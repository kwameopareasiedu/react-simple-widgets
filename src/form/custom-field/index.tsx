import React from "react";
import { useField } from "formik";
import { ICustomField } from "../../../types";

/** CustomField is a form field that transforms a custom component into a form field compatible with a formik form */
export const CustomField = ({ children, errorTransformer, ...rest }: ICustomField): any => {
    const [field, meta, helper] = useField(rest as any);

    if (Object.prototype.toString.call(children) !== "[object Function]") throw new Error("CustomField expects a function as its child");

    // Converts any error into a string to be displayed in the error component
    const defaultErrorHandler = (error: any): string => {
        const dataType = Object.prototype.toString.call(error);
        switch (dataType) {
            case "[object Object]":
                const errors = Object.keys(error).map(k => error[k as any]);
                return errors.join(", ");
            case "[object Array]":
                return error.join(", ");
            case "[object String]":
                return error.toString();
            default:
                return null;
        }
    };

    return children({ ...field, ...meta, ...helper, error: (errorTransformer || defaultErrorHandler)(meta.error) });
};
