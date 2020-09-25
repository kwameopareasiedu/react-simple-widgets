import React from "react";
import { FieldDecoration } from "./index";
import { FieldDecorationType } from "./types";
// import { DialogSize, DialogHelper } from "./types";

export default {
    title: "Field Decoration",
    component: FieldDecoration
};

export const normal = (): any => {
    const ExampleApp = (): any => {
        return (
            <div>
                <FieldDecoration label="Flat field">
                    {({ onFieldFocus, onFieldBlur, onFieldChange }) => (
                        <input type="text" onFocus={onFieldFocus} onBlur={onFieldBlur} onChange={(e: any) => onFieldChange(e.target.value)} />
                    )}
                </FieldDecoration>

                <div className="mb-4" />

                <FieldDecoration label="Flat field" leading={<i className="fa fa-user" />} error="Required">
                    {({ onFieldFocus, onFieldBlur, onFieldChange }) => (
                        <input
                            type="text"
                            placeholder="First name"
                            onFocus={onFieldFocus}
                            onBlur={onFieldBlur}
                            onChange={(e: any) => onFieldChange(e.target.value)}
                        />
                    )}
                </FieldDecoration>

                <div className="mb-4" />

                <FieldDecoration label="Underline field" decoration={FieldDecorationType.UNDERLINE}>
                    {({ onFieldFocus, onFieldBlur, onFieldChange }) => (
                        <input type="text" onFocus={onFieldFocus} onBlur={onFieldBlur} onChange={(e: any) => onFieldChange(e.target.value)} />
                    )}
                </FieldDecoration>

                <div className="mb-4" />

                <FieldDecoration label="Underline field" leading={<i className="fa fa-user" />} decoration={FieldDecorationType.UNDERLINE}>
                    {({ onFieldFocus, onFieldBlur, onFieldChange }) => (
                        <input type="text" onFocus={onFieldFocus} onBlur={onFieldBlur} onChange={(e: any) => onFieldChange(e.target.value)} />
                    )}
                </FieldDecoration>

                <div className="mb-4" />

                <FieldDecoration label="Field decoration field" error="Required" decoration={FieldDecorationType.FLOATING_LABEL}>
                    {({ onFieldFocus, onFieldBlur, onFieldChange }) => (
                        <input type="text" onFocus={onFieldFocus} onBlur={onFieldBlur} onChange={(e: any) => onFieldChange(e.target.value)} />
                    )}
                </FieldDecoration>

                <div className="mb-4" />

                <FieldDecoration
                    label="Field decoration field"
                    leading={<i className="fa fa-lock" />}
                    trailing={<i className="fa fa-eye" />}
                    error="Required"
                    decoration={FieldDecorationType.FLOATING_LABEL}>
                    {({ onFieldFocus, onFieldBlur, onFieldChange }) => (
                        <input type="text" onFocus={onFieldFocus} onBlur={onFieldBlur} onChange={(e: any) => onFieldChange(e.target.value)} />
                    )}
                </FieldDecoration>
            </div>
        );
    };

    return <ExampleApp />;
};
