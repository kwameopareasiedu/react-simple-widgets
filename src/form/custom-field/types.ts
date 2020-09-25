import { FieldHelperProps, FieldInputProps, FieldMetaProps } from "formik";
import { InputHTMLAttributes } from "react";

export type CustomFieldBuilder = (options: FieldMetaProps<any> & FieldInputProps<any> & FieldHelperProps<any>) => any;

export interface CustomField extends InputHTMLAttributes<HTMLInputElement> {
    errorTransformer?: (err: any) => string;
    children: CustomFieldBuilder;
}
