'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stars = [
    { top: '7%', left: '49%', size: 'w-0.9 h-0.9', delay: '0s' },
    { top: '12%', left: '40%', size: 'w-0.7 h-0.7', delay: '0.3s' },
    { top: '15%', left: '52%', size: 'w-0.7 h-0.7', delay: '0.3s' },
    { top: '5%', left: '55%', size: 'w-0.9 h-0.9', delay: '0.7s' },
    { top: '16%', left: '60%', size: 'w-0.9 h-0.9', delay: '1.2s' },
    { top: '12%', left: '62%', size: 'w-0.7 h-0.7', delay: '1.4s' },
];

export default function ShiningStars() {
    const starRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(starRef.current, {
                y: 45, // move stars downward slightly
                ease: 'none',
                scrollTrigger: {
                    trigger: document.body,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 2.5,
                },
            });
        }, starRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={starRef}
            className="absolute inset-0 z-40 pointer-events-none"
        >
            {stars.map((star, index) => (
                <div
                    key={index}
                    className={`absolute rounded-full bg-white opacity-80 ${star.size}`}
                    style={{
                        top: star.top,
                        left: star.left,
                        animation: `shine 2s infinite ease-in-out`,
                        animationDelay: star.delay,
                        boxShadow: '0 0 6px 3px white',
                    }}
                />
            ))}
        </div>
    );
}
