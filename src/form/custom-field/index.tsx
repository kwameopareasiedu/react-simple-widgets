import { useField } from "formik";
import { CustomField as Props } from "./types";

/** CustomField is a form field that transforms a component into a form field compatible with a formik form */
export const CustomField = ({ children, errorTransformer, ...rest }: Props): any => {
    const [field, meta, helper] = useField(rest as any);

    // Converts any error into a string to be displayed in the error component
    const defaultErrorHandler = (error: any): string => {
        switch (Object.prototype.toString.call(error)) {
            case "[object Object]":
                return Object.keys(error)
                    .map(k => error[k as any])
                    .join(", ");
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
