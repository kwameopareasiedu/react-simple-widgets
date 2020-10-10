import { FieldDecorationType } from "../field-decoration/types";

export enum DatePickerMode {
    MULTI,
    MONTH
}

export interface DatePicker {
    label?: string;
    error?: string;
    format?: string;
    mode?: DatePickerMode;
    displayFormat?: string;
    date: string | Array<string>;
    validator?: (date: string) => string;
    onChange: (date: string | Array<string>) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    // FieldDecorationProps
    decoration?: FieldDecorationType;
    stickyFloatingLabel?: boolean;
    trailing?: any;
    leading?: any;
}
