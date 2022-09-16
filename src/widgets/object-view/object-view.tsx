import React from "react";
import {
  ObjectViewCellResolver,
  ObjectViewCellResolverFunction,
  ObjectViewProps
} from "../../../types";
import styled from "styled-components";

const EMPTY_STRING = "---";

const ObjectViewRoot = styled.table.attrs(props => ({
  className: "react-simple-widget object-view table " + props.className
}))`
  .prop-label {
    font-size: 85%;
    font-style: italic;
    vertical-align: middle;
  }
`;

export const ObjectView = ({
  object,
  props,
  split = 0.35,
  ...rest
}: ObjectViewProps): any => {
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
    <ObjectViewRoot {...rest}>
      <tbody>
        {props.map((prop, i: number) => (
          <tr key={i}>
            <td className="prop-label" style={{ width: `${split * 100}%` }}>
              {prop[0]}
            </td>
            <td
              className="prop-value"
              style={{ width: `${(1 - split) * 100}%` }}>
              {resolveCellValue(prop[1])}
            </td>
          </tr>
        ))}
      </tbody>
    </ObjectViewRoot>
  );
};
