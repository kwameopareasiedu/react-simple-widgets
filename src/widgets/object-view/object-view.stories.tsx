import React from "react";
import moment from "moment";
import { ObjectView } from "./object-view";

const object = {
    id: 1,
    name: "Item 1",
    created_at: "2019-01-01",
    nested_object: {
        nested_property: {
            current_value: "Hello world"
        }
    }
};

export default { title: "ObjectView", component: ObjectView };

export const Default = (): any => (
    <ObjectView
        object={object}
        className="table-striped table-sm table-bordered"
        props={[
            ["ID", "id"],
            ["Name", "name"],
            ["Created At", o => <strong>{moment(o.created_at).format("dddd DD-MMMM-YYYY")}</strong>],
            ["Nested value", "nested_object.nested_property.current_value"],
            ["Nested undefined value", "nested_object.nested_object.nested_property.current_value"]
        ]}
    />
);

export const CustomSplit = (): any => (
    <ObjectView
        object={object}
        split={0.8}
        props={[
            ["ID", "id"],
            ["Name", "name"],
            ["Created At", o => <strong>{moment(o.created_at).format("dddd DD-MMMM-YYYY")}</strong>],
            ["Nested value", "nested_object.nested_property.current_value"]
        ]}
    />
);
