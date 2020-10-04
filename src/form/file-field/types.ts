import { FieldDecorationType } from "../field-decoration/types";

export interface FileField {
    name: string;
    limit?: number;
    label?: string;
    extensions?: Array<string>;
    validator?: (file: File) => string;
    errorTransformer?: (err: any) => string;
    onChange?: (file: File) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    // FieldDecoration props
    decoration?: FieldDecorationType;
    trailing?: any;
    leading?: any;
}
