
import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';
export default function SmoothScroll() {

   useEffect(() => {
    const lenis = new Lenis()
    function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    console.log("kjhgfd");
    
    requestAnimationFrame(raf)
    return ;
   },[]);
    return (
        <></>
    )
}
