import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import Image from 'next/image';
import { BiSolidRectangle } from "react-icons/bi";
import {motion } from 'framer-motion'

export default function OverLay() {
    const overlayRef = useRef<HTMLDivElement>(null);

    // Example usage:
    const minHeight = 4;
    const maxHeight = 9;

    const minLeft = 110;
    const maxLeft = 170;

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, ]

    useEffect(() => {
        const tl = gsap.timeline({ delay: 3 });

        tl.to(overlayRef.current, {
            x: '100%', duration: 1,
            ease: "power3.in", opacity: 1, onComplete: () => {
                if (overlayRef.current) {
                    overlayRef.current.style.display = 'none';
                }
            }
        });


        return () => {
            tl.kill();
        }

    }, []);
    return (
        <div ref={overlayRef} className="  overflow-hidden full-width-element z-[100] fixed top-0 left-0 w-full h-screen bg-black    ">
            <div className=" w-full flex justify-end items-center h-full">
                <div className=" relative h-[100%] w-full md:w-[60%]  lg:w-[40%]   bg-white ">

                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full  object-cover absolute top-0 left-0"
                    >
                        <source src="/video2.mp4" type="video/mp4" />
                    </video>

                    <div className=" w-full h-full absolute top-0 left-0 ">
                        <div className=" w-full h-full mix-blend-multiply bg-black text-white flex flex-col justify-between items-start py-10 text-3xl font-extrabold  ">
                            {
                                array.map((item, index) => {
                                    const randomPercentage = getRandomHeightPercentage(minHeight, maxHeight);
                                    const randomLeftPercentage = getRandomLeftPercentage(minLeft, maxLeft);
                               
                                    return (
                                        <>
                                            
                                            <motion.svg
                                                key={index}
                                                initial={{ opacity: 1,x: `${randomLeftPercentage}%` }}
                                                animate={{ opacity: 1 ,x: 0 }}
                                                transition={{ duration: .7, delay: 2 }}
                                                viewport={{ once: true }}
                                                xmlns="http://www.w3.org/2000/svg"
                                                width= {'100%'}
                                                height={randomPercentage + '%'}
                                                className="text-white  "
                                            >
                                                <rect width="100%" height="100%" fill="currentColor" />
                                               
                                            </motion.svg>
                                          
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function getRandomHeightPercentage(min: number, max: number) {
    const containerHeight = 100; // Assuming the container has a height of 100%

    // Calculate the percentage range
    const range = max - min;

    // Generate a random value within the range
    const randomValue = Math.random() * range;

    // Calculate the final percentage value within the specified range
    const result = min + randomValue;

    return result;
}
function getRandomLeftPercentage(min: number, max: number) {
    const containerHeight = 100; // Assuming the container has a height of 100%

    // Calculate the percentage range
    const range = max - min;

    // Generate a random value within the range
    const randomValue = Math.random() * range;

    // Calculate the final percentage value within the specified range
    const result = min + randomValue;

    return result;
}