import "./index.scss";
import React from "react";
import { IBreadcrumbs } from "../../../types";

/** Breadcrumbs is a widget that provides breadcrumb styling for its link children */
export const Breadcrumbs = ({ children, className, ...props }: IBreadcrumbs) => {
    return (
        <div className={`react-simple-widget breadcrumbs ${className || ""}`} {...props}>
            {children}
        </div>
    );
};
