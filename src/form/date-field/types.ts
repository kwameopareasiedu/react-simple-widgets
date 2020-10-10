import { DatePickerMode } from "../date-picker/types";
import { FieldDecorationType } from "../field-decoration/types";

export interface DateField {
    name: string;
    label?: string;
    format?: string;
    mode?: DatePickerMode;
    displayFormat?: string;
    validator?: (date: string) => string;
    errorTransformer?: (err: any) => string;
    onChange?: (date: string | Array<string>) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    // FieldDecoration props
    decoration?: FieldDecorationType;
    stickyFloatingLabel?: boolean;
    trailing?: any;
    leading?: any;
}