'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ShiningStars from './ShinigStars';

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
            {/* Black Gradient Overlay */}
            <div
                className="absolute top-0 left-0 w-full h-full z-0"
                style={{
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 1), transparent 15%)',
                }}
            />
            <div
                className="absolute top-0 left-0 w-full h-full z-0"
                style={{
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), transparent 20%)',
                }}
            />

            {/* ShiningStars Deco -------------------------------------------------------------------------------*/}
            <ShiningStars />

            {/* House Layer -------------------------------------------------------------------------------*/}
            <img
                id="house"
                src="/scene1/house.png"
                alt="House"
                className="absolute top-18 -left-50 w-full h-full object-cover z-10 pointer-events-none hidden md:block"
                style={{ filter: 'brightness(0.8) saturate(0.95)' }}
            />
            <img
                id="flowers"
                src="/scene1/house.png"
                alt="House"
                className="absolute top-22 left-0 w-full h-full object-cover z-10 pointer-events-none"
                style={{ filter: 'brightness(0.8) saturate(0.95)' }}
            />

            {/* Main Flower Foreground -------------------------------------------------------------------------------*/}
            <img
                id="flowers"
                src="/scene1/flowers.png"
                alt="Flowers"
                className="absolute top-10 left-0 w-full h-full object-cover z-20 pointer-events-none"
                style={{ filter: 'hue-rotate(185deg) brightness(1.2) saturate(1.1)' }}
            />

            {/* Left Flower -------------------------------------------------------------------------------*/}
            <img
                id="flowers"
                src="/scene1/flower1.png"
                alt="Flower 1"
                className="absolute -bottom-10 right-[14rem] w-52 h-52 object-cover z-30 pointer-events-none"
                style={{ filter: 'hue-rotate(185deg) brightness(1.2) saturate(0.8)' }}
            />

            <img
                id="flower-2"
                src="/scene1/flower1.png"
                alt="Flower 1"
                className="absolute bottom-0 left-[16rem] w-60 h-60 object-cover z-30 pointer-events-none scale-x-[-1]"
                style={{ filter: 'hue-rotate(185deg) brightness(1.2) saturate(0.8)' }}
            />

            <img
                id="flower-2"
                src="/scene1/flower1.png"
                alt="Flower 1"
                className="absolute -bottom-28 left-[28rem] w-60 h-60 object-cover z-30 pointer-events-none"
                style={{ filter: 'hue-rotate(185deg) brightness(1.2) saturate(0.7)' }}
            />

            {/* Flower Right */}
            <img
                id="flower-2"
                src="/scene1/flower1.png"
                alt="Flower 2"
                className="absolute -bottom-1 right-[45rem] w-52 h-52 object-cover z-30 pointer-events-none"
                style={{ filter: 'hue-rotate(185deg) brightness(1.35) saturate(0.8)' }}
            />
            <img
                id="flower-1"
                src="/scene1/flower1.png"
                alt="Flower 1"
                className="absolute -bottom-14 right-[22rem] w-46 h-46 object-cover z-30 pointer-events-none scale-x-[-1]"
                style={{ filter: 'hue-rotate(185deg) brightness(1.35) saturate(0.8)' }}
            />

            {/* Leaf -------------------------------------------------------------------------------*/}
            {/* Leaf Left */}
            <img
                id="house"
                src="/scene1/leaf.png"
                alt="Flower 1"
                className="absolute top-12 -left-30 w-100 h-auto z-30 pointer-events-none"
                style={{ filter: 'hue-rotate(0deg) brightness(0.18) saturate(0.8)' }}
            />
            <img
                id="house"
                src="/scene1/leaf.png"
                alt="Flower 1"
                className="absolute top-0 -left-12 w-100 h-auto z-30 pointer-events-none "
                style={{ filter: 'hue-rotate(0deg) brightness(0.18) saturate(0.8)' }}
            />

            {/* Leaf Right */}
            <img
                id="house"
                src="/scene1/leaf.png"
                alt="Flower 1"
                className="absolute top-2 -right-30 w-100 h-auto z-30 pointer-events-none"
                style={{ filter: 'hue-rotate(0deg) brightness(0.18) saturate(0.8)' }}
            />
            <img
                id="house"
                src="/scene1/leaf.png"
                alt="Flower 1"
                className="absolute -top-4 -right-20 w-100 h-auto z-30 pointer-events-none"
                style={{ filter: 'hue-rotate(0deg) brightness(0.18) saturate(0.8)' }}
            />
            <img
                id="house"
                src="/scene1/leaf.png"
                alt="Flower 1"
                className="absolute top-16 -right-55 w-100 h-auto z-30 pointer-events-none scale-x-[-1]"
                style={{ filter: 'hue-rotate(0deg) brightness(0.18) saturate(0.8)' }}
            />
        </div>
    );
}
