import "./page-transition-view.scss";
import { useLocation } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { IPageTransitionOptions, IPageTransitionView } from "../../../types";
import { PageTransitionProviderContext } from "./context";

export const PageTransitionView = ({ children }: IPageTransitionView): any => {
    const { pathname, search, hash } = useLocation();
    const [redirectData, setRedirectData] = useState(null);
    const [className, setClassName] = useState("react-simple-widget page-transition-view");
    const { redirect: providerRedirect } = useContext(PageTransitionProviderContext);

    const redirect = (to: string, options?: IPageTransitionOptions): void => {
        if (!to || pathname + search + hash === to) return;
        if (!options || !options.dontAnimate) {
            setRedirectData([to, options]);
            setClassName("react-simple-widget page-transition-view page-transition-view-redirecting");
        } else providerRedirect(to, options);
    };

    const onAnimationEnd = (e: any): void => {
        const animationName = getAnimationName(e);
        if (animationName === "page-transition-view-exit-animation") {
            setClassName("react-simple-widget page-transition-view");
            providerRedirect(redirectData[0], redirectData[1]);
        }
    };

    const getAnimationName = (e: any): string => (e.originalEvent ? e.originalEvent.animationname : e.animationName);

    return (
        <PageTransitionProviderContext.Provider value={{ redirect }}>
            <div key={pathname + search + hash} className={className} onAnimationEnd={onAnimationEnd}>
                {children}
            </div>
        </PageTransitionProviderContext.Provider>
    );
};
