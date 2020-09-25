import React from "react";
import { Formik } from "formik";
import { TextField } from "./text-field";
import { DialogProvider } from "../providers/dialog-provider";
import { FieldDecorationType } from "./field-decoration/types";
import { TextFieldMode } from "./text-field/types";
// import { DialogProvider } from "../provider/dialog-provider";
// import { DatePickerMode, FieldDecorationType, SelectFieldMode, TextFieldMode } from "../../types";
// import { DropdownField } from "../../../rsw-components/form/dropdown-field";
// import { SelectField } from "../../../rsw-components/form/select-field";
// import { FileField } from "../../../rsw-components/form/file-field";
// import { DateField } from "../../../rsw-components/form/date-field";
// import { TimeField } from "../../../rsw-components/form/time-field";

export default {
    title: "Form widgets",
    decorators: [(storyFn: any) => <div style={{ padding: "30px" }}>{storyFn()}</div>]
};

export const index = (): any => {
    const SampleForm = (): any => {
        const initialValues: any = {
            textFieldValue: "",
            textFieldEditorValue: "",
            otherNames: "",
            lastName: "",
            password: "",
            about: "",
            language: "",
            acceptTOS: false,
            gender: "",
            multiOptions: "",
            file: null,
            date: null
        };

        const validate = (values: any) => {
            const errors: any = {};
            if (!values.textFieldValue) errors.textFieldValue = "Required";
            if (!values.textFieldEditorValue) errors.textFieldEditorValue = "Required";
            if (!values.otherNames) errors.otherNames = "Required";
            if (!values.lastName) errors.lastName = "Required";
            if (!values.acceptTOS) errors.acceptTOS = "You must accept the Terms of Service to continue";
            if (!values.file) errors.file = "Required";
            return errors;
        };

        const onSubmit = (values: any) => {
            console.log(values);
            // setTimeout(() => {
            //     console.log(values);
            //     setLoading(false);
            //
            //     if (!alertShown) {
            //         alert("Form values have been logged in the console");
            //         setAlertShown(true);
            //     }
            // }, 2000);
            //
            // setLoading(true);
        };

        return (
            <div id="sample-form">
                <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
                    {formik => (
                        <form onSubmit={formik.handleSubmit}>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <TextField name="textFieldValue" label="TextField (Flat)" placeholder="Enter value" />

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

                                    <TextField name="textFieldEditorValue" label="TextField (Flat editor)" mode={TextFieldMode.EDITOR} />

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

                                    {/*<DropdownField*/}
                                    {/*    name="something"*/}
                                    {/*    label="DropdownField (Disabled)"*/}
                                    {/*    decoration={FieldDecorationType.FLOATING_LABEL}*/}
                                    {/*    disabled>*/}
                                    {/*    <option value="option">An options</option>*/}
                                    {/*</DropdownField>*/}

                                    {/*<br className="d-block d-md-none" />*/}
                                </div>

                                {/*<div className="col-12 col-md-6">*/}
                                {/*    <DropdownField name="language" label="DropdownField" decoration={FieldDecorationType.FLOATING_LABEL}>*/}
                                {/*        <option value="english">English</option>*/}
                                {/*        <option value="twi">Twi</option>*/}
                                {/*        <option value="ga">Ga</option>*/}
                                {/*        <option value="Ewe">Ewe</option>*/}
                                {/*    </DropdownField>*/}

                                {/*    <br />*/}

                                {/*    <FileField name="file" label="FileField (with 1MB limit)" limit={1024 * 1024} />*/}

                                {/*    <br />*/}

                                {/*    <SelectField*/}
                                {/*        name="acceptTOS"*/}
                                {/*        mode={SelectFieldMode.BINARY}*/}
                                {/*        label="SelectField (Binary-select mode)"*/}
                                {/*        onChange={v => console.log("Terms of Service", v)}*/}
                                {/*    />*/}

                                {/*    <br />*/}

                                {/*    <SelectField*/}
                                {/*        name="gender"*/}
                                {/*        label="SelectField (Single-select mode)"*/}
                                {/*        mode={SelectFieldMode.SINGLE}*/}
                                {/*        options={[*/}
                                {/*            ["Male", "male"],*/}
                                {/*            ["Female", "female"]*/}
                                {/*        ]}*/}
                                {/*        onChange={v => console.log("Gender", v)}*/}
                                {/*    />*/}

                                {/*    <br />*/}

                                {/*    <SelectField*/}
                                {/*        name="gender"*/}
                                {/*        inline={true}*/}
                                {/*        label="SelectField (Single-select mode, Inline)"*/}
                                {/*        mode={SelectFieldMode.SINGLE}*/}
                                {/*        options={[*/}
                                {/*            ["Male", "male"],*/}
                                {/*            ["Female", "female"]*/}
                                {/*        ]}*/}
                                {/*        onChange={v => console.log("Gender", v)}*/}
                                {/*    />*/}

                                {/*    <br />*/}

                                {/*    <SelectField*/}
                                {/*        name="multiOptions"*/}
                                {/*        label="SelectField (Multi-select mode)"*/}
                                {/*        mode={SelectFieldMode.MULTI}*/}
                                {/*        options={[*/}
                                {/*            ["Foo", "foo"],*/}
                                {/*            ["Bar", "bar"],*/}
                                {/*            ["Baz", "baz"]*/}
                                {/*        ]}*/}
                                {/*        onChange={v => console.log("Multi-selection", v)}*/}
                                {/*    />*/}

                                {/*    <br />*/}

                                {/*    <SelectField*/}
                                {/*        name="multiOptions"*/}
                                {/*        inline={true}*/}
                                {/*        label="SelectField (Multi-select mode, Inline)"*/}
                                {/*        mode={SelectFieldMode.MULTI}*/}
                                {/*        options={[*/}
                                {/*            ["Foo", "foo"],*/}
                                {/*            ["Bar", "bar"],*/}
                                {/*            ["Baz", "baz"]*/}
                                {/*        ]}*/}
                                {/*        onChange={v => console.log("Multi-selection", v)}*/}
                                {/*    />*/}

                                {/*    <br />*/}

                                {/*    <DateField*/}
                                {/*        name="date"*/}
                                {/*        format="YYYY-MM-DD"*/}
                                {/*        label="DateField (Single Mode)"*/}
                                {/*        displayFormat="dddd, Do MMMM YYYY"*/}
                                {/*        mode={DatePickerMode.SINGLE}*/}
                                {/*    />*/}

                                {/*    <br />*/}

                                {/*    <TimeField name="time" label="TimeField"  />*/}
                                {/*</div>*/}
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
