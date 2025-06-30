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
                    scrub: 2.5,
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
                    scrub: 2.8,
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
                style={{ filter: 'brightness(0.9) saturate(0.9)' }}
            />

            {/* House Layer */}
            <img
                id="house"
                src="/layers/house.png"
                alt="House"
                className="absolute top-5 -left-50 w-full h-full object-cover z-10 pointer-events-none"
                style={{ filter: 'brightness(0.95) saturate(0.95)' }}
            />
            <img
                id="house"
                src="/layers/house.png"
                alt="House"
                className="absolute top-0 left-0 w-full h-full object-cover z-10 pointer-events-none"
                style={{ filter: 'brightness(0.95) saturate(0.95)' }}
            />

            {/* Main Flower Foreground */}
            <img
                id="flowers"
                src="/layers/flowers.png"
                alt="Flowers"
                className="absolute top-0 left-0 w-full h-full object-cover z-20 pointer-events-none"
                style={{ filter: 'brightness(1) saturate(1.1)' }}
            />

            {/* Extra Flower 1 */}
            <img
                id="flower-1"
                src="/layers/flower1.png"
                alt="Flower 1"
                className="absolute bottom-0 right-[15rem] w-52 h-52 object-cover z-30 pointer-events-none"
                style={{ filter: 'brightness(1) saturate(0.9)' }}
            />

            {/* Extra Flower 2 */}
            <img
                id="flower-2"
                src="/layers/flower1.png"
                alt="Flower 2"
                className="absolute bottom-10 right-[45rem] w-52 h-52 object-cover z-30 pointer-events-none"
                style={{ filter: 'brightness(1) saturate(0.9)' }}
            />
        </div>
    );
}
