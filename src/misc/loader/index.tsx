import React from "react";
import { ILoader } from "../../../types";

/** This widget renders a spinning border indicator. It is intrinsically a <span /> hence it accepts all attributes of a <span/> */
export const Loader = ({ className, children, ...rest }: ILoader): any => {
    return (
        <span className={`react-simple-widget loader ${className ? className : ""}`} {...rest}>
            <span className={`spinner-border spinner-border-sm mr-2`} />
            {children}
        </span>
    );
};
