import { useEffect, useState } from "react";
import { UseWindowBreakpoints, UseWindowBreakpointsState } from "../../../types";

export const useWindowBreakpoints: UseWindowBreakpoints = (): UseWindowBreakpointsState => {
    const computeState = (): UseWindowBreakpointsState => ({
        width: window.innerWidth,
        xs: window.innerWidth < 576,
        sm: window.innerWidth >= 576 && window.innerWidth < 768,
        md: window.innerWidth >= 768 && window.innerWidth < 992,
        lg: window.innerWidth >= 992 && window.innerWidth < 1200,
        xl: window.innerWidth >= 1200 && window.innerWidth < 1400,
        xxl: window.innerWidth >= 1400
    });

    const [state, setState] = useState(computeState());

    useEffect(() => {
        const handler = () => setState(computeState());
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler);
    }, []);

    return state;
};
