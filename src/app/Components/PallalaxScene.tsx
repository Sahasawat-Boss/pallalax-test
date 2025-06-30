'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxScene() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to('#house', {
                y: -70,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 2, // smoother
                },
            });

            gsap.to('#flowers', {
                y: -120,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 3,
                },
            });

            gsap.to('#flower1', {
                y: -110,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 3,
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative h-[100vh] overflow-hidden bg-black">
            {/* Background */}
            <img
                src="/layers/bg.png"
                alt="Background"
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                style={{ filter: 'hue-rotate(10deg) brightness(0.9) saturate(0.9)' }}
            />

            {/* House - warm orange glow */}
            <img
                id="house"
                src="/layers/house.png"
                alt="House"
                className="absolute top-0 left-0 w-full h-full object-cover z-10 pointer-events-none"
                style={{ filter: 'hue-rotate(10deg) brightness(0.95) saturate(0.95)' }}
            />

            {/* Flowers - cold icy tone */}
            <img
                id="flowers"
                src="/layers/flowers.png"
                alt="Flowers"
                className="absolute top-0 left-0 w-full h-full object-cover z-20 pointer-events-none"
                style={{ filter: 'hue-rotate(0deg) brightness(1) saturate(1.1)' }}
            />
            <img
                id="flower1"
                src="/layers/flower1.png"
                alt="Flowers"
                className="absolute -bottom-10 right-60 w-52 h-52 object-cover z-20 pointer-events-none"
                style={{ filter: 'hue-rotate(0deg) brightness(1) saturate(0.8)' }}
            />
            <img
                id="flower1"
                src="/layers/flower1.png"
                alt="Flowers"
                className="absolute bottom-0 right-160 w-52 h-52 object-cover z-20 pointer-events-none"
                style={{ filter: 'hue-rotate(0deg) brightness(1) saturate(0.8)' }}
            />

        </div>
    );
}
