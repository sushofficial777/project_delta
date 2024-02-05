import { useEffect, useState } from 'react'
import gsap from 'gsap';
import { motion } from 'framer-motion'
import { ScrollTrigger } from 'gsap/all';
import ExpendMenu from './ExpendMenu';
gsap.registerPlugin(ScrollTrigger);

export default function Nvbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>

      <div className=" z-[101]  fixed mix-blend-difference   flex justify-end items-center gap-6 w-full px-10 h-fit py-8 text-black top-0 left-0 ">

        <div className="  ">

        </div>

        <div className=" ">
          <motion.div
            onClick={handleMenu}
            className={`${isMenuOpen ? "rotate-45"  : "" } w-10 h-10  md:w-16 lg:w-16  md:h-16 lg:h-16  duration-300  cursor-pointer flex relative items-center justify-center  rounded-full  `}>
            <motion.div className=" lg:w-12 md:w-12 w-12 absolute   left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] h-2 bg-white"></motion.div>
            <motion.div className=" lg:w-12 md:w-12 w-12 rotate-90 absolute left-[50%]   top-[50%] translate-x-[-50%] translate-y-[-50%] h-2 bg-white"></motion.div>
          </motion.div>
        </div>


      </div>

      {/*  expend menu start */}

      <ExpendMenu isMenuOpen={isMenuOpen} />

      {/*  expend menu end */}

    </>
  )
}
