'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxScene2() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Midground (house)
            gsap.to('#layer1', {
                y: -100,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1.5,
                },
            });

            // Foreground capibara
            gsap.to('#capibara', {
                y: -200,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 2,
                },
                
            });

            // Floating flower 1
            gsap.to('#flower-1', {
                y: -250,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 2.65,
                },
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative h-[100vh] overflow-hidden bg-[#74adb4]">
            {/* Background -------------------------------------------------------------------------------*/}
            <img
                src="/scene2/bg.png"
                alt="Background"
                className="absolute -top-28 left-0 w-full h-full object-cover z-0 blur"
                style={{ filter: 'brightness(0.9) saturate(1) blur(0px)' }}
            />

            {/* Layer 1 -------------------------------------------------------------------------------*/}
            <img
                id="layer1"
                src="/scene2/watercan.png"
                alt="watercan"
                className="absolute top-48 left-[180px] w-38 h-auto object-cover z-10 pointer-events-none" 
                style={{ filter: 'brightness(0.95) saturate(0.95)' }}
            />
            <img
                id="layer1"
                src="/scene2/flower.png"
                alt="flower"
                className="absolute top-40 left-18 w-42 h-auto object-cover z-0 pointer-events-none" 
                style={{ filter: 'brightness(0.95) saturate(0.95)' }}
            />
            <img
                id="layer1"
                src="/scene2/flower.png"
                alt="flower"
                className="absolute top-40 left-4 w-42 h-auto object-cover z-0 pointer-events-none" 
                style={{ filter: 'brightness(0.95) saturate(0.95)' }}
            />

            {/* Main Flower Foreground -------------------------------------------------------------------------------*/}
            <img
                id="capibara"
                src="/scene2/capibara.png"
                alt="capibara"
                className="absolute top-45 left-110 w-120 h-auto object-cover z-20 pointer-events-none"
                style={{ filter: 'brightness(1) saturate(1.1)' }}
            />
        </div>
    );
}
