import React, { useContext } from "react";
import { TransitionLink as Props } from "./types";
import { TransitionProviderContext } from "./transition-provider-context";

export const Link = ({ children, to, dontAnimate, replaceUrl, onClick, className, ...props }: Props): any => {
    const { redirect } = useContext(TransitionProviderContext);

    const interceptOnClick = (e: any): void => {
        e.preventDefault();
        if (onClick) onClick(e);
        redirect(to, { dontAnimate, replaceUrl });
    };

    return (
        <a
            href={to}
            className={`react-simple-widget page-transition-link ${className || ""}`}
            onClick={interceptOnClick}
            {...props}>
            {children}
        </a>
    );
};
