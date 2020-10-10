import { FieldDecorationType } from "../field-decoration/types";

export interface FilePicker {
    file: File;
    error?: string;
    limit?: number;
    label?: string;
    extensions?: Array<string>;
    validator?: (file: File) => string;
    onChange: (file: File) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    // FieldDecoration props
    decoration?: FieldDecorationType;
    trailing?: any;
    leading?: any;
}