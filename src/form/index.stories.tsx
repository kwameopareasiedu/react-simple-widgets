import React from "react";
import { Formik } from "formik";
import { TextField } from "./text-field";
import { DialogProvider } from "../provider/dialog-provider";
import { DatePickerMode, FieldDecorationType, SelectFieldMode, TextFieldMode } from "../../types";
import { DropdownField } from "./dropdown-field";
import { SelectField } from "./select-field";
import { FileField } from "./file-field";
import { DateField } from "./date-field";

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
                                    <TextField name="firstName" label="First name" placeholder="Enter first name" className="form-control" />

                                    <br />

                                    <TextField
                                        name="lastName"
                                        label="Last name"
                                        decoration={FieldDecorationType.UNDERLINE}
                                        placeholder="Enter last name"
                                    />

                                    <br />

                                    <TextField name="otherNames" label="Other names" decoration={FieldDecorationType.FLOATING_LABEL} />

                                    <br />

                                    <TextField name="password" type="password" label="Password" decoration={FieldDecorationType.FLOATING_LABEL} />

                                    <br />

                                    <TextField
                                        name="about"
                                        label="Tell us more about yourself"
                                        decoration={FieldDecorationType.FLOATING_LABEL}
                                        mode={TextFieldMode.EDITOR}
                                    />

                                    <br />

                                    <DropdownField name="language" label="Primary language" decoration={FieldDecorationType.FLOATING_LABEL}>
                                        <option value="english">English</option>
                                        <option value="twi">Twi</option>
                                        <option value="ga">Ga</option>
                                        <option value="Ewe">Ewe</option>
                                    </DropdownField>

                                    <br />

                                    <FileField name="file" label="File upload (1MB limit)" limit={1024 * 1024} />

                                    <br className="d-block d-md-none" />
                                </div>

                                <div className="col-12 col-md-6">
                                    <SelectField
                                        name="acceptTOS"
                                        mode={SelectFieldMode.BINARY}
                                        label="Accept terms of agreement"
                                        onChange={v => console.log("Terms of Service", v)}
                                    />

                                    <br />

                                    <SelectField
                                        name="gender"
                                        label="Gender"
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
                                        label="Gender (Inline)"
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
                                        inline={false}
                                        label="Multi selection"
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
                                        label="Multi selection (inline)"
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
                                        label="Date picker"
                                        displayFormat="dddd, Do MMMM YYYY"
                                        mode={DatePickerMode.SINGLE}
                                    />
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
