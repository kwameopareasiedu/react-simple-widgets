import React from "react";
import { Formik } from "formik";
import { TagField } from "./tag-field";
import { action } from "@storybook/addon-actions";

export default { title: "TagField", component: TagField };

export const Default = (): any => {
  const SampleForm = (): any => {
    const initialValues: any = { field: [] };

    const validate = (values: any) => {
      const errors: any = {};
      if (!Array.isArray(values.field)) errors.field = "Must be an array";
      if (Array.isArray(values.field) && values.field.length < 2) errors.field = "At least two tags are required";
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
                <TagField
                  name="field"
                  label="Tag field"
                  placeholder="Enter tags"
                  helper={`${formik.values.field.length} of 2 required`}
                  leading={<i className="fa fa-tags me-1" />}
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
