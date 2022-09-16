import React from "react";
import { DatePickerProps } from "../../../types";
import arraySupport from "dayjs/plugin/arraySupport";
import advancedFormat from "dayjs/plugin/advancedFormat";
import djs from "dayjs";
import { Calendar } from "../calendar/calendar";
import { PopupMenu } from "../popup-menu/popup-menu";
import styled from "styled-components";

djs.extend(arraySupport);
djs.extend(advancedFormat);

const DatePickerRoot = styled.div.attrs(props => ({
  className: "react-simple-widget date-picker " + props.className
}))``;

export const DatePicker = ({
  value,
  validator,
  displayFormat,
  placeholder,
  onChange,
  ...rest
}: DatePickerProps): JSX.Element => {
  return (
    <PopupMenu>
      <DatePickerRoot {...rest}>
        {!value
          ? placeholder
          : djs(value).format(displayFormat || "ddd, Do MMM YYYY")}
      </DatePickerRoot>

      {closePopup => (
        <Calendar
          initialDate={value || undefined}
          className="d-inline-block w-auto"
          isDateActive={(y, m, d) =>
            djs([y, m, d]).format("YYYY-MM-DD") === value
          }
          isDateOutlined={(y, m, d) =>
            djs([y, m, d]).date() === djs(value, "YYYY-MM-DD").date()
          }
          validator={validator}
          onChange={date => {
            onChange(date);
            closePopup();
          }}
        />
      )}
    </PopupMenu>
  );
};
