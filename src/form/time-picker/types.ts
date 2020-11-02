import { FieldDecorationType } from "../field-decoration/types";

export interface TimePicker {
    time: string;
    label?: string;
    error?: string;
    validator?: (time: string) => string;
    onChange: (time: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    // FieldDecoration props
    decoration?: FieldDecorationType;
    stickyFloatingLabel?: boolean;
    trailing?: any;
    leading?: any;
}
