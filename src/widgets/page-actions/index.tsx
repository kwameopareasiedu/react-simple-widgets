import "./index.scss";
import React, { AllHTMLAttributes, Children } from "react";

/**
 * PageActions is a widget that displays a row of spaced options for a page. If no children are
 * present, it returns null
 */
export const PageActions = ({ children, className, ...rest }: AllHTMLAttributes<HTMLDivElement>): any => {
    if (Children.toArray(children).length === 0) return null;

    return (
        <div className={`react-simple-widget page-actions ${className || ""}`} {...rest}>
            {children}
        </div>
    );
};
