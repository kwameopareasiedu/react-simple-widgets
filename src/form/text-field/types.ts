import { InputHTMLAttributes } from "react";
import { FieldDecorationType } from "../field-decoration/types";

export enum TextFieldMode {
    INPUT,
    EDITOR
}

export interface TextField extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    mode?: TextFieldMode;
    onEditorBlur?: () => void;
    onEditorFocus?: () => void;
    onEditorChange?: (value: any) => void;
    // CustomField props
    errorTransformer?: (err: any) => string;
    // FieldDecoration props
    decoration?: FieldDecorationType;
    stickyFloatingLabel?: boolean;
    trailing?: any;
    leading?: any;
}
