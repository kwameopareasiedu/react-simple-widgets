import React from "react";
import { Formik } from "formik";
import { TextField } from "./text-field";
import { DialogProvider } from "../provider/dialog-provider";
import { DatePickerMode, FieldDecorationType, SelectFieldMode, TextFieldMode } from "../../types";
import { DropdownField } from "./dropdown-field";
import { SelectField } from "./select-field";
import { FileField } from "./file-field";
import { DateField } from "./date-field";
import { TimeField } from "./time-field";

export default {
    title: "React simple widget - Form",
    decorators: [(storyFn: any) => <div style={{ padding: "30px" }}>{storyFn()}</div>]
};

export const index = (): any => {
    const SampleForm = (): any => {
        const initialValues: any = {
            firstName: "",
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
            if (!values.firstName) errors.firstName = "Required";
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
                                    <TextField
                                        name="firstName"
                                        label="TextField (Flat decoration)"
                                        placeholder="Enter first name"
                                        className="form-control"
                                    />

                                    <br />

                                    <TextField
                                        name="lastName"
                                        label="TextField (Underline decoration)"
                                        decoration={FieldDecorationType.UNDERLINE}
                                        placeholder="Enter last name"
                                    />

                                    <br />

                                    <TextField
                                        name="otherNames"
                                        label="TextField (Floating label decoration)"
                                        decoration={FieldDecorationType.FLOATING_LABEL}
                                    />

                                    <br />

                                    <TextField
                                        name="password"
                                        type="password"
                                        label="TextField (Password type, Floating label decoration)"
                                        decoration={FieldDecorationType.FLOATING_LABEL}
                                    />

                                    <br />

                                    <TextField
                                        name="about"
                                        label="TextField (Editor mode, Floating label decoration)"
                                        decoration={FieldDecorationType.FLOATING_LABEL}
                                        mode={TextFieldMode.EDITOR}
                                    />

                                    <br />

                                    <TextField name="something" label="TextField (Disabled)" decoration={FieldDecorationType.FLAT} disabled />

                                    <br />

                                    <TextField name="something" label="TextField (Disabled)" decoration={FieldDecorationType.UNDERLINE} disabled />

                                    <br />

                                    <TextField
                                        name="something"
                                        label="TextField (Disabled)"
                                        decoration={FieldDecorationType.FLOATING_LABEL}
                                        disabled
                                    />

                                    <br />

                                    <DropdownField
                                        name="something"
                                        label="DropdownField (Disabled)"
                                        decoration={FieldDecorationType.FLOATING_LABEL}
                                        disabled>
                                        <option value="option">An options</option>
                                    </DropdownField>

                                    <br className="d-block d-md-none" />
                                </div>

                                <div className="col-12 col-md-6">
                                    <DropdownField name="language" label="DropdownField" decoration={FieldDecorationType.FLOATING_LABEL}>
                                        <option value="english">English</option>
                                        <option value="twi">Twi</option>
                                        <option value="ga">Ga</option>
                                        <option value="Ewe">Ewe</option>
                                    </DropdownField>

                                    <br />

                                    <FileField name="file" label="FileField (with 1MB limit)" limit={1024 * 1024} />

                                    <br />

                                    <SelectField
                                        name="acceptTOS"
                                        mode={SelectFieldMode.BINARY}
                                        label="SelectField (Binary-select mode)"
                                        onChange={v => console.log("Terms of Service", v)}
                                    />

                                    <br />

                                    <SelectField
                                        name="gender"
                                        label="SelectField (Single-select mode)"
                                        mode={SelectFieldMode.SINGLE}
                                        options={[
                                            ["Male", "male"],
                                            ["Female", "female"]
                                        ]}
                                        onChange={v => console.log("Gender", v)}
                                    />

                                    <br />

                                    <SelectField
                                        name="gender"
                                        inline={true}
                                        label="SelectField (Single-select mode, Inline)"
                                        mode={SelectFieldMode.SINGLE}
                                        options={[
                                            ["Male", "male"],
                                            ["Female", "female"]
                                        ]}
                                        onChange={v => console.log("Gender", v)}
                                    />

                                    <br />

                                    <SelectField
                                        name="multiOptions"
                                        label="SelectField (Multi-select mode)"
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
                                        name="multiOptions"
                                        inline={true}
                                        label="SelectField (Multi-select mode, Inline)"
                                        mode={SelectFieldMode.MULTI}
                                        options={[
                                            ["Foo", "foo"],
                                            ["Bar", "bar"],
                                            ["Baz", "baz"]
                                        ]}
                                        onChange={v => console.log("Multi-selection", v)}
                                    />

                                    <br />

                                    <DateField
                                        name="date"
                                        format="YYYY-MM-DD"
                                        label="DateField (Single Mode)"
                                        displayFormat="dddd, Do MMMM YYYY"
                                        mode={DatePickerMode.SINGLE}
                                    />

                                    <br />

                                    <TimeField name="time" label="TimeField"  />
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
            <div className="card">
                <div className="card-body">
                    <SampleForm />
                </div>
            </div>
        </DialogProvider>
    );
};
