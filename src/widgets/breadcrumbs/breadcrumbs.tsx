import "./breadcrumbs.scss";
import React from "react";
import { Breadcrumbs as IBreadcrumbs } from "../../../types";

export const Breadcrumbs = ({ children, className: _className, ...rest }: IBreadcrumbs) => {
    const className = (): string => {
        const classes = ["react-simple-widget", "breadcrumbs"];
        if (_className) classes.push(_className);
        return classes.join(" ");
    };

    return (
        <div className={className()} {...rest}>
            {children}
        </div>
    );
};
