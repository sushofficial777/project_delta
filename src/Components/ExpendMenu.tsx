import React, { useRef, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
export default function ExpendMenu({ isMenuOpen }: { isMenuOpen: boolean }) {

    const menuItems = [{
        name: "Home",
        link: "/"

    },
    {
        name: "About",
        link: "/",
    },
    {
        name: "WORK",
        link: "/",
    },
    {
        name: "Contact",
        link: "/",
    }



]

    const menuRef = useRef(null);

    const controls = useAnimation();

    useEffect(() => {
        controls.start(isMenuOpen ? { width: '100%', top: 0, height: '100vh', borderRadius: '', opacity: 1, } : { width: "100%", top: "-100%", height: "100vh", borderRadius: '', opacity: 1, });
    }, [isMenuOpen, controls]);

    return (
        <>
            <motion.div
                animate={controls}
                transition={{ type: 'tween', duration: .8, ease: "circInOut" }}
                className="fixed z-[100] top-0 left-0   bg-slate-300 overflow-hidden "

            >
                <div className=" w-full h-full flex  items-center justify-center  ">

                    <div className=" lg:w-[50%] md:w-[50%] w-0 h-full  "></div>
                    <div className=" lg:w-[50%] px-10 pt-10 md:w-[50%] w-full  h-full  ">

                        <div className=" mt-[8rem] mix-blend-difference    ">
                           {
                               menuItems.map((item:any, index:number) => {
                                   return (
                                    <>
                                     <Link key={index} style={{overflow:'hidden'}} href={'/'} className=' mb-4    text-[40px] md:text-[50px] relative   text-white  lg:text-[70px] font-extrabold uppercase ' >
                                
                                <p  
                                className='   ' >{item.name} </p>
                                {/* <div className=" w-full h-[2px] absolute left-0 bottom-2 rounded-sm bg-white "></div> */}
                           
                            </Link>
                                    
                                    </>
                                   )
                               })
                           }
                            
                             
                        </div>


                    </div>


                </div>



            </motion.div>


        </>
    )
}
