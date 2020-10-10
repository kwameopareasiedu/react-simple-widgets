import "./transition-view.scss";
import { useLocation } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { TransitionProviderContext } from "./transition-provider-context";
import { TransitionView as Props } from "./types";

export const TransitionView = ({ children }: Props): any => {
    const { pathname, search, hash } = useLocation();
    const [className, setClassName] = useState("react-simple-widget transition-view");
    const { __config__, __incrementViewCount__, __decrementViewCount__, __endRedirect__ } = useContext(TransitionProviderContext);

    useEffect(() => {
        // On load notify the TransitionProvider by incrementing the view count
        __incrementViewCount__();
        // On unload notify the TransitionProvider by decrementing the view count
        return __decrementViewCount__;
    }, []);

    useEffect(() => {
        if (__config__ && (!__config__.to || __config__.to === pathname + search + hash)) return;

        if (__config__) {
            if (__config__.options && __config__.options.dontAnimate) __endRedirect__();
            else setClassName("react-simple-widget transition-view transition-view-redirecting");
        } else setClassName("react-simple-widget transition-view");
    }, [__config__]);

    const onAnimationEnd = (e: any): void => {
        const animationName = getAnimationName(e);
        if (animationName === "transition-view-exit-animation") __endRedirect__();
    };

    const getAnimationName = (e: any): string => (e.originalEvent ? e.originalEvent.animationname : e.animationName);

    return (
        <div className={className} onAnimationEnd={onAnimationEnd}>
            {children}
        </div>
    );
};
