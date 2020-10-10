import React from "react";
import moment from "moment";
import { ObjectView } from "./index";

const object = {
    id: 1,
    name: "Item 1",
    created_at: "2019-01-01",
    nested_object: { nested_property: { current_value: "Hello world" } }
};

export default { title: "ObjectView", component: ObjectView };

export const normal = (): any => (
    <ObjectView
        object={object}
        props={[
            ["ID", "id"],
            ["Name", "name"],
            ["Created At", o => <strong>{moment(o.created_at).format("dddd DD-MMMM-YYYY")}</strong>],
            ["Nested value", "nested_object.nested_property.current_value"],
            ["Nested undefined value", "nested_object.nested_object.nested_property.current_value"]
        ]}
    />
);

export const condensed = (): any => (
    <ObjectView
        object={object}
        props={[
            ["ID", "id"],
            ["Name", "name"],
            ["Created At", o => <strong>{moment(o.created_at).format("dddd DD-MMMM-YYYY")}</strong>],
            ["Nested value", "nested_object.nested_property.current_value"],
            ["Nested undefined value", "nested_object.nested_object.nested_property.current_value"]
        ]}
        condensed
    />
);

export const withCustomSplitRatio = (): any => (
    <ObjectView
        object={object}
        splitRatio={0.8}
        props={[
            ["ID", "id"],
            ["Name", "name"],
            ["Created At", o => <strong>{moment(o.created_at).format("dddd DD-MMMM-YYYY")}</strong>],
            ["Nested value", "nested_object.nested_property.current_value"]
        ]}
    />
);
