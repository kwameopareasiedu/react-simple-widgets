import { useEffect, useState } from "react";
import { UseWindowBreakpoints as Props } from "./types";

/** A hook that reports the current window width category as defined by the Bootstrap CSS framework */
export const useWindowBreakpoints = (): Props => {
    const getMetrics = (): Props => ({
        width: window.innerWidth,
        xs: window.innerWidth < 540,
        sm: window.innerWidth >= 540 && window.innerWidth < 720,
        md: window.innerWidth >= 720 && window.innerWidth < 960,
        lg: window.innerWidth >= 960 && window.innerWidth < 1140,
        xl: window.innerWidth >= 1140,
    });

    const [category, setCategory] = useState(getMetrics());

    useEffect(() => {
        const handler = () => setCategory(getMetrics());
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler);
    }, []);

    return category;
};
