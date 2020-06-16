import "./page-transition-view.scss";
import { useLocation } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { PageTransitionProviderContext } from "./context";
import { IPageTransitionView } from "../../../types";

export const PageTransitionView = ({ children }: IPageTransitionView): any => {
    const { pathname, search, hash } = useLocation();
    const [className, setClassName] = useState("react-simple-widget page-transition-view");
    const {
        __internal_config,
        __internal_incrementPageTransitionViewCount,
        __internal_decrementPageTransitionViewCount,
        __internal_endRedirect
    } = useContext(PageTransitionProviderContext);

    useEffect(() => {
        // On load notify the PageTransitionProvider by incrementing the view count
        __internal_incrementPageTransitionViewCount();
        // On unload notify the PageTransitionProvider by decrementing the view count
        return __internal_decrementPageTransitionViewCount;
    }, []);

    useEffect(() => {
        if (__internal_config && (!__internal_config.to || __internal_config.to === pathname + search + hash)) return;

        if (__internal_config) {
            if (__internal_config.options && __internal_config.options.dontAnimate) __internal_endRedirect();
            else setClassName("react-simple-widget page-transition-view page-transition-view-redirecting");
        } else setClassName("react-simple-widget page-transition-view");
    }, [__internal_config]);

    const onAnimationEnd = (e: any): void => {
        const animationName = getAnimationName(e);
        if (animationName === "page-transition-view-exit-animation") __internal_endRedirect();
    };

    const getAnimationName = (e: any): string => (e.originalEvent ? e.originalEvent.animationname : e.animationName);

    return (
        <div className={className} onAnimationEnd={onAnimationEnd}>
            {children}
        </div>
    );
};
