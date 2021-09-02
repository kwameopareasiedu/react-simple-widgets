import React from "react";
import { Formik } from "formik";
import { CheckboxField } from "./checkbox-field";
import { action } from "@storybook/addon-actions";

export default { title: "CheckboxField", component: CheckboxField };

export const Default = (): any => {
    const SampleForm = (): any => {
        const initialValues: any = { field: "" };

        const onSubmit = (values: any) => {
            console.log(values);
            action("Form Submit")(values);
        };

        return (
            <div id="sample-form">
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                    {formik => (
                        <form onSubmit={formik.handleSubmit}>
                            <div className="mb-4">
                                <CheckboxField name="field" label="Checkbox field" />
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
