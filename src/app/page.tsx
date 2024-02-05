"use client"
import Image from "next/image";
import { useState, useLayoutEffect, useRef } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import OverLay from "@/Components/OverLay";
import gsap from "gsap";
export default function Home() {
  const [Dimension, setDimension] = useState({
    width: 0,
    height: 0,

  });
  const heroRef = useRef(null);
  const heroImageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["end end", "end start"],
  })



  const imageyScroll = useTransform(scrollYProgress, [0, 1], [0, -Dimension.height * .2]);

  useLayoutEffect(() => {

  const tl =  gsap.to(heroRef.current, {
    delay: 3,
    display: 'block',
    
  })

    const handleResize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      tl.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  return (
    <>
    {/* <OverLay/> */}
      <div
      style={{
        display: 'none'
      }}
        ref={heroRef} className=" bg-cover bg-center  overflow-hidden w-full h-screen  relative ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full  object-cover absolute top-0 left-0"
        >
          <source src="/video2.mp4" type="video/mp4" />
        </video>
      </div>
      <div className=" w-full h-screen "></div>
    </>
  );
}
