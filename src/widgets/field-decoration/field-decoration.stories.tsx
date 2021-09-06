import React from "react";
import { FieldDecoration } from "./field-decoration";

export default { title: "FieldDecoration", component: FieldDecoration };

export const Default = (): any => {
    return (
        <FieldDecoration
            label="Flat field"
            leading={<i className="fa fa-user me-2" style={{ opacity: 0.35 }} />}
            trailing={
                <button className="btn bt-light btn-sm">
                    <i className="fa fa-redo" />
                </button>
            }
            error="This is a test error"
            helper="Max length: 10 chars">
            {({ onFieldFocus, onFieldBlur }) => (
                <input type="text" onFocus={onFieldFocus} onBlur={onFieldBlur} placeholder="Enter name here" />
            )}
        </FieldDecoration>
    );
};

export const Disabled = (): any => {
    return (
        <FieldDecoration
            label="Flat field"
            leading={<i className="fa fa-user me-2" style={{ opacity: 0.35 }} />}
            trailing={
                <button className="btn bt-light btn-sm">
                    <i className="fa fa-redo" />
                </button>
            }
            error="This is a test error"
            helper="Max length: 10 chars"
            disabled>
            {({ onFieldFocus, onFieldBlur }) => (
                <input type="text" onFocus={onFieldFocus} onBlur={onFieldBlur} placeholder="Enter name here" />
            )}
        </FieldDecoration>
    );
};
