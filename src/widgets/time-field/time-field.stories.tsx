import React from "react";
import { Formik } from "formik";
import { TimeField } from "./time-field";
import { action } from "@storybook/addon-actions";

export default { title: "TimeField", component: TimeField };

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
                                <TimeField
                                    name="field"
                                    label="Month date field"
                                    placeholder="Click to select date"
                                    helper={`${formik.values.field.length} of 6`}
                                    leading={<i className="fa fa-calendar me-1" />}
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
