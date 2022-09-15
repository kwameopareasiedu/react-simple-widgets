import React from "react";
import { DatePickerProps } from "../../../types";
import arraySupport from "dayjs/plugin/arraySupport";
import advancedFormat from "dayjs/plugin/advancedFormat";
import djs from "dayjs";
import { Calendar } from "../calendar/calendar";
import { PopupMenu } from "../popup-menu/popup-menu";

djs.extend(arraySupport);
djs.extend(advancedFormat);

export const DatePicker = ({
  value,
  validator,
  className: _className,
  displayFormat,
  placeholder,
  onChange,
  ...rest
}: DatePickerProps): JSX.Element => {
  const className = (): string => {
    const classes = ["react-simple-widget", "date-picker"];
    if (_className) classes.push(_className);
    return classes.join(" ");
  };

  return (
    <PopupMenu>
      <div className={className()} {...rest}>
        {!value
          ? placeholder
          : djs(value).format(displayFormat || "ddd, Do MMM YYYY")}
      </div>

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
