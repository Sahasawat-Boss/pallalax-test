'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxScene() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Midground (house)
            gsap.to('#house', {
                y: -100,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1.5,
                },
            });

            // Foreground flowers (general)
            gsap.to('#flowers', {
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

            // Floating flower 2
            gsap.to('#flower-2', {
                y: -300,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 2.85,
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative h-[100vh] overflow-hidden bg-black">
            {/* Background -------------------------------------------------------------------------------*/}
            <img
                src="/scene1/bg2.png"
                alt="Background"
                className="absolute top-0 left-0 w-full h-full object-cover z-0 blur"
                style={{ filter: 'brightness(0.9) saturate(0.9) blur(0.8px)' }}
            />

            {/* House Layer -------------------------------------------------------------------------------*/}
            <img
                id="house"
                src="/scene1/house.png"
                alt="House"
                className="absolute top-14 -left-50 w-full h-full object-cover z-10 pointer-events-none" 
                style={{ filter: 'brightness(0.95) saturate(0.95)' }}
            />
            <img
                id="flowers"
                src="/scene1/house.png"
                alt="House"
                className="absolute top-16 left-0 w-full h-full object-cover z-10 pointer-events-none"
                style={{ filter: 'brightness(0.95) saturate(0.95)' }}
            />

            {/* Main Flower Foreground -------------------------------------------------------------------------------*/}
            <img
                id="flowers"
                src="/scene1/flowers.png"
                alt="Flowers"
                className="absolute top-0 left-0 w-full h-full object-cover z-20 pointer-events-none"
                style={{ filter: 'brightness(1) saturate(1.1)' }}
            />

            {/* Left Flower */}
            <img
                id="flowers"
                src="/scene1/flower1.png"
                alt="Flower 1"
                className="absolute -bottom-10 right-[14rem] w-52 h-52 object-cover z-30 pointer-events-none"
                style={{ filter: 'brightness(1) saturate(0.8)' }}
            />

            <img
                id="flower-2"
                src="/scene1/flower1.png"
                alt="Flower 1"
                className="absolute bottom-4 left-[16rem] w-62 h-62 object-cover z-30 pointer-events-none scale-x-[-1]"
                style={{ filter: 'brightness(1) saturate(0.8)' }}
            />
            <img
                id="flower-2"
                src="/scene1/flower1.png"
                alt="Flower 1"
                className="absolute -bottom-18 left-[20rem] w-50 h-50 object-cover z-30 pointer-events-none scale-x-[-1]"
                style={{ filter: 'brightness(1) saturate(0.8)' }}
            />
            <img
                id="flower-2"
                src="/scene1/flower1.png"
                alt="Flower 1"
                className="absolute -bottom-32 left-[28rem] w-62 h-62 object-cover z-30 pointer-events-none"
                style={{ filter: 'brightness(1) saturate(0.7)' }}
            />

            {/* Flower Right */}
            <img
                id="flower-2"
                src="/scene1/flower1.png"
                alt="Flower 2"
                className="absolute -bottom-1 right-[45rem] w-52 h-52 object-cover z-30 pointer-events-none"
                style={{ filter: 'brightness(1) saturate(0.8)' }}
            />
                        <img
                id="flower-1"
                src="/scene1/flower1.png"
                alt="Flower 1"
                className="absolute -bottom-14 right-[22rem] w-46 h-46 object-cover z-30 pointer-events-none scale-x-[-1]"
                style={{ filter: 'brightness(1) saturate(0.8)' }}
            />
        </div>
    );
}
