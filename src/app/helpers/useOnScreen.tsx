'use client'
import React, { RefObject } from "react";

export default function useOnScreen(ref: RefObject<HTMLElement>) {
    const [isIntersecting, setIntersecting] = React.useState(false);
    
    const observer = React.useMemo(
        () => {
            if (!window.IntersectionObserver) return
            return new IntersectionObserver(([entry]) =>
                setIntersecting(entry.isIntersecting)
            )
        }, []
    );

    React.useEffect(() => {
        if (!ref.current || !observer) return
        observer.observe(ref.current!);
        return () => observer.disconnect();
    }, []);

    return isIntersecting;
}
