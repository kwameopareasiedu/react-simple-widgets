import React from "react";
import { Formik } from "formik";
import { TextField } from "./text-field";
import { FieldDecorationType, SelectFieldType, TextFieldMode } from "../../types";
import { DropdownField } from "./dropdown-field";
import { SelectField } from "./select-field";

export default {
    title: "React simple widget - Form",
    decorators: [(storyFn: any) => <div style={{ padding: "30px" }}>{storyFn()}</div>]
};

export const index = (): any => {
    const SampleForm = (): any => {
        // const [alertShown, setAlertShown] = useState(false);
        // const [previousFormValues, setPreviousFormValues] = useState(null);
        // const [formValues, setFormValues] = useState(null);
        // const [loading, setLoading] = useState(false);
        //
        // useEffect(() => console.log("Form values changed", { currentValues: formValues }, { previousValues: previousFormValues }), [formValues]);

        const initialValues = {
            firstName: "",
            otherNames: "",
            lastName: "",
            about: "",
            language: "",
            acceptTOS: false,
            gender: "",
            multiOptions: ""
        };

        const validate = (values: any) => {
            const errors: any = {};
            if (!values.firstName) errors.firstName = "Required";
            if (!values.otherNames) errors.otherNames = "Required";
            if (!values.lastName) errors.lastName = "Required";
            if (!values.acceptTOS) errors.acceptTOS = "You must accept the Terms of Service to continue";
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

                                    <TextField
                                        name="about"
                                        label="Tell us more about yourself"
                                        decoration={FieldDecorationType.FLOATING_LABEL}
                                        mode={TextFieldMode.EDITOR}
                                    />

                                    <br className="d-block d-md-none" />
                                </div>

                                <div className="col-12 col-md-6">
                                    <DropdownField name="language" label="Primary language" decoration={FieldDecorationType.FLOATING_LABEL}>
                                        <option value="english">English</option>
                                        <option value="twi">Twi</option>
                                        <option value="ga">Ga</option>
                                        <option value="Ewe">Ewe</option>
                                    </DropdownField>

                                    <br />

                                    <SelectField
                                        name="acceptTOS"
                                        type={SelectFieldType.BINARY}
                                        label="Accept terms of agreement"
                                        onChange={v => console.log("Terms of Service", v)}
                                    />

                                    <br />

                                    <SelectField
                                        name="gender"
                                        label="Gender"
                                        type={SelectFieldType.SINGLE}
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
                                        type={SelectFieldType.SINGLE}
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
                                        type={SelectFieldType.MULTI}
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
                                        type={SelectFieldType.MULTI}
                                        options={[
                                            ["Foo", "foo"],
                                            ["Bar", "bar"],
                                            ["Baz", "baz"]
                                        ]}
                                        onChange={v => console.log("Multi-selection", v)}
                                    />
                                </div>
                            </div>
                            {/*<FormikEffect*/}
                            {/*    formik={formik}*/}
                            {/*    onChange={({ previousValues, values }) => {*/}
                            {/*        setPreviousFormValues(previousValues);*/}
                            {/*        setFormValues(values);*/}
                            {/*    }}*/}
                            {/*/>*/}

                            {/*<StringInput label="String Input" name="string" />*/}
                            {/*<StringInput label="Password Input" name="password" type="password" />*/}

                            {/*<TextInput label="Text Input" name="text" />*/}

                            {/*<SelectInput label="Select Input" name="select">*/}
                            {/*    <option value="optionA">Option A</option>*/}
                            {/*    <option value="optionB">Option B</option>*/}
                            {/*</SelectInput>*/}

                            {/*<CheckboxInput label="Checkbox Input" name="checkbox" />*/}

                            {/*<CheckGroupInput*/}
                            {/*    options={[*/}
                            {/*        ["Check option 1 label", "checkOption1"],*/}
                            {/*        ["Check option 2 label", "checkOption2"]*/}
                            {/*    ]}*/}
                            {/*    label="CheckGroup Input"*/}
                            {/*    name="checkgroup"*/}
                            {/*/>*/}

                            {/*<RadioGroupInput*/}
                            {/*    options={[*/}
                            {/*        ["Radio option 1 label", "radioOption1"],*/}
                            {/*        ["Radio option 2 label", "radioOption2"]*/}
                            {/*    ]}*/}
                            {/*    label="RadioGroup Input"*/}
                            {/*    name="radiogroup"*/}
                            {/*/>*/}

                            {/*<FileInput*/}
                            {/*    label="File Input"*/}
                            {/*    name="file"*/}
                            {/*    ext={["png", "jpg"]}*/}
                            {/*    maxSize={50 * 1024}*/}
                            {/*    validate={file => (file.name.length > 30 ? "File name cannot be greater than 30 chars" : "")}*/}
                            {/*/>*/}

                            {/*<FormikFieldWrapper*/}
                            {/*    label="Custom Input (Use this if you have a custom component whose value should be part of the form)"*/}
                            {/*    name="custom">*/}
                            {/*    {({ value, setValue }) => (*/}
                            {/*        <SingleDatePicker*/}
                            {/*            value={value}*/}
                            {/*            dateFormat="YYYY-MM-DD"*/}
                            {/*            displayFormat="Do MMMM YYYY"*/}
                            {/*            displayClassName="form-control"*/}
                            {/*            onChange={date => setValue(date)}*/}
                            {/*            validateDate={date => {*/}
                            {/*                if (date !== "2020-01-01") throw new Error("Please select 1st January 2020");*/}
                            {/*            }}*/}
                            {/*        />*/}
                            {/*    )}*/}
                            {/*</FormikFieldWrapper>*/}

                            {/*<Loader className="text-center" childrenVisibleWhileLoading={false} isLoading={loading}>*/}
                            {/*    <button type="submit" className="btn btn-primary btn-block">*/}
                            {/*        Proceed*/}
                            {/*    </button>*/}
                            {/*</Loader>*/}
                        </form>
                    )}
                </Formik>
            </div>
        );
    };

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <SampleForm />
                </div>
            </div>
        </div>
    );
};

// export const fileField = () => {
//     const [file, setFile] = useState(null);
//
//     return (
//         <div>
//             <p>Use the FileField component if you just want a file upload without including it in a form</p>
//
//             <FileField onChange={file => setFile(file)} />
//
//             {file && (
//                 <p>
//                     File name: <strong>{file.name}</strong>
//                 </p>
//             )}
//         </div>
//     );
// };
