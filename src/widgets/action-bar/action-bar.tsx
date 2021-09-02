import "./action-bar.scss";
import React, { Children } from "react";
import { ActionBar as IActionBar } from "../../../types";

export const ActionBar = ({ children, className: _className, ...rest }: IActionBar): any => {
    if (Children.toArray(children).length === 0) return null;

    const className = (): string => {
        const classes = ["react-simple-widget", "action-bar"];
        if (_className) classes.push(_className);
        return classes.join(" ");
    };

    return (
        <div className={className()} {...rest}>
            {children}
        </div>
    );
};
