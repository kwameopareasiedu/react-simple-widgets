import "./object-view.scss";
import React from "react";
import { ObjectView as IObjectView, ObjectViewCellResolver, ObjectViewCellResolverFunction } from "../../../types";

const EMPTY_STRING = "---";

export const ObjectView = ({ object, props, split = 0.35, className: _className, ...rest }: IObjectView): any => {
    const className = (): string => {
        const classes = ["react-simple-widget", "object-view", "table"];
        if (_className) classes.push(_className);
        return classes.join(" ");
    };

    const resolveCellValue = (resolver: ObjectViewCellResolver): any => {
        if (!object) return EMPTY_STRING;
        else if (typeof resolver === "string") {
            if (resolver.indexOf(".") === -1) {
                return object[resolver] || EMPTY_STRING;
            } else {
                let iterator = object;
                const propertyKeys = resolver.split(".");

                for (const propertyKey of propertyKeys) {
                    if (!iterator[propertyKey]) return EMPTY_STRING;
                    iterator = iterator[propertyKey];
                }

                return iterator || EMPTY_STRING;
            }
        } else if (typeof resolver === "function") {
            return (resolver as ObjectViewCellResolverFunction)(object);
        } else return EMPTY_STRING;
    };

    return (
        <table className={className()} {...rest}>
            <tbody>
                {props.map((prop, i: number) => (
                    <tr key={i}>
                        <td className="prop-label" style={{ width: `${split * 100}%` }}>
                            {prop[0]}
                        </td>
                        <td className="prop-value" style={{ width: `${(1 - split) * 100}%` }}>
                            {resolveCellValue(prop[1])}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
