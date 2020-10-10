import "./index.scss";
import React from "react";
import { ObjectView as Props } from "./types";

export const ObjectView = ({ object, props, splitRatio = 0.35, condensed }: Props): any => {
    const EMPTY_STRING = "---";

    const resolveItemValue = (resolver: string | ((object: any) => any)): any => {
        // If the resolver is a function, call it with the item and itemIndex
        if (typeof resolver === "function") return resolver(object) || EMPTY_STRING;

        // If the resolver is a string and not a dot notation, use the property from the object
        if (typeof resolver === "string" && resolver.indexOf(".") === -1) return object[resolver] || EMPTY_STRING;

        // If the resolver is a string with dot notation, search through the property tree of the object
        const propertyKeys = resolver.split(".");

        let iterator = object;

        for (const propertyKey of propertyKeys) {
            // If an intermediate key is undefined, return with empty message
            if (!iterator[propertyKey]) return EMPTY_STRING;
            // Assign the target property to the iterator to search through during the next iteration
            iterator = iterator[propertyKey];
        }

        return iterator || EMPTY_STRING;
    };

    return (
        <div className="react-simple-widget object-view">
            <table className={`table table-striped ${condensed ? " table-sm" : ""}`}>
                <tbody>
                    {props.map((prop, i: number) => (
                        <tr key={i}>
                            <td className="prop-label" style={{ width: `${splitRatio * 100}%` }}>
                                {prop[0]}
                            </td>
                            <td className="prop-value" style={{ width: `${(1 - splitRatio) * 100}%` }}>
                                {resolveItemValue(prop[1])}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
