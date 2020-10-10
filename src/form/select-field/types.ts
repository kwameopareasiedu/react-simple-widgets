export enum SelectFieldMode {
    SINGLE,
    MULTI
}

export interface SelectField {
    name: string;
    label?: string;
    inline?: boolean;
    mode?: SelectFieldMode;
    options?: Array<[string, any]>;
    onChange?: (value: any) => void;
    // CustomField props
    errorTransformer?: (err: any) => string;
}
