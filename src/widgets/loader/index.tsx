import React, { AllHTMLAttributes } from "react";

/** This widget renders a spinning border indicator. It is intrinsically a <span /> hence it accepts all attributes of a <span/> */
export const Loader = ({ className, children, ...rest }: AllHTMLAttributes<HTMLSpanElement>): any => {
    return (
        <div className={`react-simple-widget loader text-center ${className ? className : ""}`} {...rest}>
            <span className={`spinner-border spinner-border-sm mr-2`} />
            {children}
        </div>
    );
};
