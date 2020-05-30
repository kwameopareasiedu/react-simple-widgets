import "./page-transition-view.scss";
import { useLocation } from "react-router-dom";
import React, { useContext, useState } from "react";
import { IPageTransitionOptions, IPageTransitionView } from "../../../types";
import { PageTransitionProviderContext } from "./context";

export const PageTransitionView = ({ children }: IPageTransitionView): any => {
    const { pathname } = useLocation();
    const [redirectData, setRedirectData] = useState(null);
    const [className, setClassName] = useState("react-simple-widget page-transition-view");
    const { redirect: providerRedirect } = useContext(PageTransitionProviderContext);

    const redirect = (to: string, options?: IPageTransitionOptions): void => {
        if (pathname === to) return;
        if (!options || !options.dontAnimate) {
            setRedirectData([to, options]);
            setClassName("react-simple-widget page-transition-view page-transition-view-redirecting");
        } else providerRedirect(to, options);
    };

    const onAnimationEnd = (e: any): void => {
        const animationName = getAnimationName(e);
        if (animationName === "page-transition-view-exit-animation") providerRedirect(redirectData[0], redirectData[1]);
    };

    const getAnimationName = (e: any): string => (e.originalEvent ? e.originalEvent.animationname : e.animationName);

    return (
        <PageTransitionProviderContext.Provider value={{ redirect }}>
            <div className={className} onAnimationEnd={onAnimationEnd}>
                {children}
            </div>
        </PageTransitionProviderContext.Provider>
    );
};
