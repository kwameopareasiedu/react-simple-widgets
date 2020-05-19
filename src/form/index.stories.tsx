import React from "react";
import { Formik } from "formik";
import { CustomField } from "./custom-field";
import { FieldDecoration } from "./field-decoration";
import { FieldDecorationType } from "../../types";

export default {
    title: "React simple widget - Form",
    decorators: [(storyFn: any) => <div style={{ width: "960px", padding: "30px" }}>{storyFn()}</div>]
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
            lastName: ""
        };

        const validate = (values: any) => {
            const errors: any = {};
            if (!values.firstName) errors.firstName = "Required";
            if (!values.otherNames) errors.otherNames = "Required";
            if (!values.lastName) errors.lastName = "Required";
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
                            <CustomField name="firstName">
                                {({ value, error, touched, setValue, setTouched }) => (
                                    <FieldDecoration label="First name" error={touched && error} hasValue={!!value}>
                                        {({ onFocus, onBlur }) => (
                                            <input
                                                value={value}
                                                onChange={e => setValue(e.target.value)}
                                                onFocus={(): void => {
                                                    setTouched(true);
                                                    onFocus();
                                                }}
                                                onBlur={onBlur}
                                            />
                                        )}
                                    </FieldDecoration>
                                )}
                            </CustomField>

                            <br />

                            <CustomField name="lastName">
                                {({ value, error, touched, setValue, setTouched }) => (
                                    <FieldDecoration
                                        label="Last name"
                                        error={touched && error}
                                        hasValue={!!value}
                                        decoration={FieldDecorationType.UNDERLINE}>
                                        {({ onFocus, onBlur }) => (
                                            <input
                                                value={value}
                                                onChange={e => setValue(e.target.value)}
                                                onFocus={(): void => {
                                                    setTouched(true);
                                                    onFocus();
                                                }}
                                                onBlur={onBlur}
                                            />
                                        )}
                                    </FieldDecoration>
                                )}
                            </CustomField>

                            <br />

                            <CustomField name="otherNames">
                                {({ value, error, touched, setValue, setTouched }) => (
                                    <FieldDecoration
                                        label="Other names"
                                        error={touched && error}
                                        hasValue={!!value}
                                        decoration={FieldDecorationType.FLOATING_LABEL}>
                                        {({ onFocus, onBlur }) => (
                                            <input
                                                value={value}
                                                onChange={e => setValue(e.target.value)}
                                                onFocus={(): void => {
                                                    setTouched(true);
                                                    onFocus();
                                                }}
                                                onBlur={onBlur}
                                            />
                                        )}
                                    </FieldDecoration>
                                )}
                            </CustomField>
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
