import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useGsapAnimation = () => {
  const heroRef = useRef(null);
  const searchRef = useRef(null);
  const cardsRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo('.hero-content',
        {
          opacity: 0,
          y: 100
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out'
        }
      );

      // Search form animation
      gsap.fromTo('.search-form',
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: 'power3.out'
        }
      );

      // Cards animation
      const cards = document.querySelectorAll('.card');
      cards.forEach((card, index) => {
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 50
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.1 * index,
            scrollTrigger: {
              trigger: card,
              start: 'top bottom-=100',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      // Section title animation
      gsap.fromTo('.section-title',
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.section-title',
            start: 'top bottom-=50',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Card hover animations
      cards.forEach((card) => {
        const image = card.querySelector('img');
        if (image) {
          card.addEventListener('mouseenter', () => {
            gsap.to(image, {
              scale: 1.1,
              duration: 0.4,
              ease: 'power2.out'
            });
          });
          card.addEventListener('mouseleave', () => {
            gsap.to(image, {
              scale: 1,
              duration: 0.4,
              ease: 'power2.out'
            });
          });
        }
      });
    });

    // Cleanup
    return () => {
      ctx.revert();
    };
  }, []);

  return {
    heroRef,
    searchRef,
    cardsRef,
    titleRef
  };
};
