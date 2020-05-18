import React, { useContext } from "react";
import { IPageTransitionLink } from "../../../types";
import { PageTransitionProviderContext } from "./context";

export const Link = ({ children, to, dontAnimate, replaceUrl, onClick, ...props }: IPageTransitionLink): any => {
    const { redirect } = useContext(PageTransitionProviderContext);

    const interceptOnClick = (e: any): void => {
        e.preventDefault();
        if (onClick) onClick(e);
        redirect(to, { dontAnimate, replaceUrl });
    };

    return (
        <a href={to} onClick={interceptOnClick} {...props}>
            {children}
        </a>
    );
};
