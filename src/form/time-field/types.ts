import { FieldDecorationType } from "../field-decoration/types";

export interface TimeField {
    name: string;
    label?: string;
    error?: string;
    errorTransformer?: (err: any) => string;
    validator?: (time: string) => string;
    onChange?: (time: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    // FieldDecoration props
    decoration?: FieldDecorationType;
    stickyFloatingLabel?: boolean;
    trailing?: any;
    leading?: any;
}
