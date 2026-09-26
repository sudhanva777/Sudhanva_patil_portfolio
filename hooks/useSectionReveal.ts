"use client";

import { useEffect, useRef } from "react";

export function useSectionReveal() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("section-visible");
                    el.classList.remove("section-hidden");
                    // Once revealed, unobserve to save resources
                    observer.unobserve(el);
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        el.classList.add("section-hidden");
        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    return ref;
}
