import React from "react";
import { Formik } from "formik";
import { MultiSelectField } from "./multi-select-field";
import { action } from "@storybook/addon-actions";

export default { title: "MultiSelectField", component: MultiSelectField };

export const Default = (): any => {
    const SampleForm = (): any => {
        const initialValues: any = { field: "" };

        const validate = (values: any) => {
            const errors: any = {};
            if (!values.field) errors.field = "Required";
            return errors;
        };

        const onSubmit = (values: any) => {
            console.log(values);
            action("Form Submit")(values);
        };

        return (
            <div id="sample-form">
                <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
                    {formik => (
                        <form onSubmit={formik.handleSubmit}>
                            <div className="mb-4">
                                <MultiSelectField
                                    name="field"
                                    label="Multi Select field"
                                    placeholder="Enter value"
                                    options={[
                                        ["Option 1", "option-1"],
                                        ["Option 2", "option-2"],
                                        ["Option 3", "option-3"],
                                        ["Option 4", "option-4"],
                                        ["Option 5", "option-5"]
                                    ]}
                                />
                            </div>

                            <div className="mb-4">
                                <MultiSelectField
                                    name="field"
                                    label="Multi Select field (Inline)"
                                    placeholder="Enter value"
                                    options={[
                                        ["Option 1", "option-1"],
                                        ["Option 2", "option-2"],
                                        ["Option 3", "option-3"],
                                        ["Option 4", "option-4"],
                                        ["Option 5", "option-5"]
                                    ]}
                                    inline
                                />
                            </div>

                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        );
    };

    return <SampleForm />;
};
