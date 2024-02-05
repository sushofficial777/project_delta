import { useState, useRef, useLayoutEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export default function BrandTitle() {
  const [Dimension, setDimension] = useState({
    width: 0,
    height: 0
  });

  const BrandRef = useRef(null);
  const Brad = useRef(null);
  const text = "flegoui";
  const textArray = text.split('');
  useLayoutEffect(() => {

    gsap.to(Brad.current, {
      fontSize: "3rem",
      duration: .6,
      letterSpacing: ".1rem",
      scrollTrigger: {
        trigger: BrandRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true, // animates smoothly during scroll
      },
    });

  


    const handleResize = () => {

      setDimension({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', handleResize);

    return () => {
      ScrollTrigger.killAll();
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  return (
    <>
      <div ref={BrandRef} className=" w-fit h-screen bg-black absolute ">
        <div style={{
          fontSize: "14em",
          letterSpacing: "-10px"
        }} ref={Brad} className="fixed   z-[110] mix-blend-difference bg-black text-white brand-name uppercase m-0 p-0 flex items-start justify-start  top-9 left-9">
          {textArray.map((char, index) => (
            <motion.p
              className='  '

              initial={{ opacity: 0, x: '-200px' }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              key={index}>{char}</motion.p>
          ))}
        </div>
      </div>
    </>
  )
}
