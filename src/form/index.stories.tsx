import React from "react";
import { Formik } from "formik";
import { TextField } from "./text-field";
import { DialogProvider } from "../widgets/dialog-provider/dialog-provider";
import { FieldDecorationType } from "../widgets/field-decoration/types";
import { SelectFieldMode } from "./select-field/types";
import { TextFieldMode } from "./text-field/types";
import { DropdownField } from "./dropdown-field";
import { PasswordField } from "./password-field";
import { SelectField } from "./select-field";
import { FileField } from "./file-field";
import { DateField } from "./date-field";
import { TimeField } from "./time-field";

export default {
    title: "Form widgets",
    decorators: [(storyFn: any) => <div style={{ padding: "30px" }}>{storyFn()}</div>]
};

export const index = (): any => {
    const SampleForm = (): any => {
        const initialValues: any = {
            textFieldValue: "",
            textFieldEditorValue: "",
            passwordFieldValue: "",
            dropdownFieldValue: "",
            binarySelectFieldValue: "",
            singleSelectFieldValue: "",
            multiSelectFieldValue: "",
            fileField: "",
            dateField: ""
        };

        const validate = (values: any) => {
            const errors: any = {};
            if (!values.textFieldValue) errors.textFieldValue = "Required";
            if (!values.textFieldEditorValue) errors.textFieldEditorValue = "Required";
            if (!values.passwordFieldValue) errors.passwordFieldValue = "Required";
            if (!values.dropdownFieldValue) errors.dropdownFieldValue = "Required";
            if (!values.binarySelectFieldValue) errors.binarySelectFieldValue = "Required";
            if (!values.singleSelectFieldValue) errors.singleSelectFieldValue = "Required";
            if (!values.multiSelectFieldValue) errors.multiSelectFieldValue = "Required";
            if (!values.dateField) errors.dateField = "Required";
            if (!values.dateField) errors.dateField = "Required";
            return errors;
        };

        const onSubmit = (values: any) => {
            console.log(values);
        };

        return (
            <div id="sample-form">
                <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
                    {formik => (
                        <form onSubmit={formik.handleSubmit}>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <TextField
                                        name="textFieldValue"
                                        label="TextField (Flat)"
                                        placeholder="Enter value"
                                    />

                                    <br />

                                    <TextField
                                        name="textFieldValue"
                                        label="TextField (Underline)"
                                        decoration={FieldDecorationType.UNDERLINE}
                                        placeholder="Enter last name"
                                    />

                                    <br />

                                    <TextField
                                        name="textFieldValue"
                                        label="TextField (Floating label)"
                                        decoration={FieldDecorationType.FLOATING_LABEL}
                                    />

                                    <br />

                                    <TextField
                                        name="textFieldEditorValue"
                                        label="TextField (Flat editor)"
                                        mode={TextFieldMode.EDITOR}
                                    />

                                    <br />

                                    <TextField
                                        name="textFieldEditorValue"
                                        label="TextField (Underline editor)"
                                        decoration={FieldDecorationType.UNDERLINE}
                                        mode={TextFieldMode.EDITOR}
                                    />

                                    <br />

                                    <TextField
                                        name="textFieldEditorValue"
                                        label="TextField (Floating label editor)"
                                        decoration={FieldDecorationType.FLOATING_LABEL}
                                        mode={TextFieldMode.EDITOR}
                                    />

                                    <br />

                                    <PasswordField
                                        name="PasswordField"
                                        label="PasswordField (Floating label editor)"
                                        decoration={FieldDecorationType.FLOATING_LABEL}
                                        mode={TextFieldMode.EDITOR}
                                    />

                                    <br />

                                    <DropdownField name="dropdownFieldValue" label="DropdownField (Flat)">
                                        <option value="" />
                                        <option value="A">Option A</option>
                                        <option value="B">Option B</option>
                                        <option value="C">Option C</option>
                                    </DropdownField>

                                    <br />

                                    <DropdownField
                                        name="dropdownFieldValue"
                                        label="DropdownField (Underline)"
                                        decoration={FieldDecorationType.UNDERLINE}>
                                        <option value="" />
                                        <option value="A">Option A</option>
                                        <option value="B">Option B</option>
                                        <option value="C">Option C</option>
                                    </DropdownField>

                                    <br />

                                    <DropdownField
                                        name="dropdownFieldValue"
                                        label="DropdownField (Floating label)"
                                        decoration={FieldDecorationType.FLOATING_LABEL}
                                        leading={<i className="fa fa-layer-group" />}>
                                        <option value="" />
                                        <option value="A">Option A</option>
                                        <option value="B">Option B</option>
                                        <option value="C">Option C</option>
                                    </DropdownField>

                                    {/*<br className="d-block d-md-none" />*/}
                                </div>

                                <div className="col-12 col-md-6">
                                    <SelectField
                                        name="binarySelectFieldValue"
                                        label="SelectField (Binary select)"
                                        onChange={v => console.log("Terms of Service", v)}
                                    />

                                    <br />

                                    <SelectField
                                        name="singleSelectFieldValue"
                                        label="SelectField (Single select)"
                                        mode={SelectFieldMode.SINGLE}
                                        options={[
                                            ["Male", "male"],
                                            ["Female", "female"]
                                        ]}
                                        onChange={v => console.log("Gender", v)}
                                    />

                                    <br />

                                    <SelectField
                                        name="singleSelectFieldValue"
                                        label="SelectField (Inline single select)"
                                        mode={SelectFieldMode.SINGLE}
                                        options={[
                                            ["Male", "male"],
                                            ["Female", "female"]
                                        ]}
                                        onChange={v => console.log("Gender", v)}
                                        inline
                                    />

                                    <br />

                                    <SelectField
                                        name="multiSelectFieldValue"
                                        label="SelectField (Multi select)"
                                        mode={SelectFieldMode.MULTI}
                                        options={[
                                            ["Foo", "foo"],
                                            ["Bar", "bar"],
                                            ["Baz", "baz"]
                                        ]}
                                        onChange={v => console.log("Multi-selection", v)}
                                    />

                                    <br />

                                    <SelectField
                                        name="multiSelectFieldValue"
                                        label="SelectField (Inline multi select)"
                                        mode={SelectFieldMode.MULTI}
                                        options={[
                                            ["Foo", "foo"],
                                            ["Bar", "bar"],
                                            ["Baz", "baz"]
                                        ]}
                                        onChange={v => console.log("Multi-selection", v)}
                                        inline
                                    />

                                    <br />

                                    <FileField
                                        name="file"
                                        label="FileField (with 1MB limit)"
                                        leading={<i className="fa fa-file-word" />}
                                        limit={1024 * 1024}
                                    />

                                    <br />

                                    <DateField
                                        name="date"
                                        format="YYYY-MM-DD"
                                        label="DateField (Single Mode)"
                                        leading={<i className="fa fa-calendar-alt" />}
                                        displayFormat="dddd, Do MMMM YYYY"
                                    />

                                    <br />

                                    <TimeField name="time" label="TimeField" leading={<i className="fa fa-clock" />} />
                                </div>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        );
    };

    return (
        <DialogProvider>
            <SampleForm />
        </DialogProvider>
    );
};
