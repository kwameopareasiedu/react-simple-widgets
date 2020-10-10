import "./index.scss";
import React, { AllHTMLAttributes } from "react";

/** Breadcrumbs is a widget that provides breadcrumb styling for its link children */
export const Breadcrumbs = ({ children, className, ...props }: AllHTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={`react-simple-widget breadcrumbs ${className || ""}`} {...props}>
            {children}
        </div>
    );
};
