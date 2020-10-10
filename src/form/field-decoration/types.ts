export enum FieldDecorationType {
    UNDERLINE,
    FLOATING_LABEL
}

export interface FieldDecorationBuilderProps {
    onFieldChange: (value: boolean) => void;
    onFieldFocus: () => void;
    onFieldBlur: () => void;
}

export type FieldDecorationBuilder = (hooks: FieldDecorationBuilderProps) => any;

export interface FieldDecoration {
    label?: any;
    error?: any;
    leading?: any;
    trailing?: any;
    disabled?: boolean;
    stickyFloatingLabel?: boolean;
    decoration?: FieldDecorationType;
    children: FieldDecorationBuilder;
}
