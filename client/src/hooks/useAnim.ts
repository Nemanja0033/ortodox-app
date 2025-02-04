import { useEffect } from "react";
import gsap from "gsap";

export const useAnim = (ref: React.RefObject<HTMLElement>, range: number) => {
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              ref.current,
              { opacity: 0, x: range },
              {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "power3.out",
                delay: 0.2,
              }
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, range]);
};
