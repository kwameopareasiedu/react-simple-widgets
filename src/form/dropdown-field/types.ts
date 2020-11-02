import { SelectHTMLAttributes } from "react";
import { FieldDecorationType } from "../field-decoration/types";

export interface DropdownField extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    children: any;
    label?: string;
    // CustomField props
    errorTransformer?: (err: any) => string;
    // FieldDecoration props
    decoration?: FieldDecorationType;
    stickyFloatingLabel?: boolean;
    trailing?: any;
    leading?: any;
}
