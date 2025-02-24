import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'scale';
  delay?: number;
  duration?: number;
}

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fadeIn',
  delay = 0,
  duration = 1
}: AnimatedSectionProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let animation_config = {};

    switch (animation) {
      case 'fadeIn':
        animation_config = {
          opacity: [0, 1],
          y: [20, 0]
        };
        break;
      case 'slideUp':
        animation_config = {
          opacity: [0, 1],
          y: [100, 0]
        };
        break;
      case 'slideLeft':
        animation_config = {
          opacity: [0, 1],
          x: [-100, 0]
        };
        break;
      case 'scale':
        animation_config = {
          opacity: [0, 1],
          scale: [0.8, 1]
        };
        break;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo(
      element,
      {
        ...animation_config,
        opacity: 0
      },
      {
        ...animation_config,
        opacity: 1,
        duration: duration,
        delay: delay,
        ease: 'power3.out'
      }
    );

    return () => {
      tl.kill();
    };
  }, [animation, delay, duration]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
