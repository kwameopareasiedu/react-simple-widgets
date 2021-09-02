import { useField } from "formik";
import { CustomField as ICustomField } from "../../../types";

export const CustomField = ({ children, errorBuilder: _errorBuilder, ...rest }: ICustomField): any => {
    const [field, meta, helper] = useField(rest as any);

    const errorBuilder = (error: any): string => {
        if (_errorBuilder) return _errorBuilder(error);

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

    return children({ ...field, ...meta, ...helper, error: errorBuilder(meta.error) });
};
