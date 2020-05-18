import "./page-transition-view.scss";
import { useLocation } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { PageTransitionProviderContext } from "./context";
import { IPageTransitionView } from "../../../types";

export const PageTransitionView = ({ children }: IPageTransitionView): any => {
    const { pathname, search } = useLocation();
    const [className, setClassName] = useState("page-transition-view");
    const { __config, __incrementPageTransitionsInScope, __decrementPageTransitionsInScope, __finishRedirect } = useContext(
        PageTransitionProviderContext
    );

    useEffect(() => {
        __incrementPageTransitionsInScope();
        return __decrementPageTransitionsInScope;
    }, []);

    useEffect(() => {
        const classes = ["page-transition-view"];
        if (__config && __config.path != pathname + search) classes.push("page-transition-view-redirecting");
        setClassName(classes.join(" "));
    }, [__config]);

    const onAnimationEnd = (e: any): void => {
        const animationName = getAnimationName(e);
        if (animationName === "page-transition-view-exit-animation") __finishRedirect();
    };

    const getAnimationName = (e: any): string => {
        if (e.originalEvent) {
            return e.originalEvent.animationname;
        } else return e.animationName;
    };

    return (
        <div className={className} onAnimationEnd={onAnimationEnd}>
            {children}
        </div>
    );
};
