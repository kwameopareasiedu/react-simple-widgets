import "./index.scss";
import React from "react";
import { IObjectView } from "../../../types";

export const ObjectView = ({ object, props, splitRatio = 0.3 }: IObjectView): any => {
    const propValue = (propResolution: string | ((object: any) => any)): any => {
        // If the propResolution is a function, call it with the object and itemIndex
        if (typeof propResolution === "function") return propResolution(object) || "---";

        // If it is a string and not a dot notation, use the property from the object
        if (typeof propResolution === "string" && propResolution.indexOf(".") === -1) return object[propResolution] || "---";

        // If it is a string with dot notation, search through the property tree of the object
        const propertyValue = { value: object };
        const keys = propResolution.trim().split(".");

        // If the object is undefined, return with empty message
        if (!propertyValue.value) return "---";

        for (const key of keys) {
            // If an intermediate key is undefined, return with empty message
            if (!propertyValue.value[key]) return "---";
            propertyValue.value = propertyValue.value[key];
        }

        return propertyValue.value || "---";
    };

    return (
        <div className="react-simple-widget object-view">
            <table className="table table-bordered table-striped table-sm">
                <tbody>
                    {props.map((prop, i: number) => (
                        <tr key={i}>
                            <td className="prop-label" style={{ width: `${splitRatio * 100}%` }}>
                                {prop[0]}
                            </td>
                            <td className="prop-value" style={{ width: `${(1 - splitRatio) * 100}%` }}>
                                {propValue(prop[1])}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
