import React from "react";
import { DatePicker as IDatePicker } from "../../../types";
import arraySupport from "dayjs/plugin/arraySupport";
import djs from "dayjs";
import { Calendar } from "../calendar/calendar";
import { PopupMenu } from "../popup-menu/popup-menu";

djs.extend(arraySupport);

export const DatePicker = ({ date, onDateSelect, className: _className, ...rest }: IDatePicker): JSX.Element => {
    const className = (): string => {
        const classes = ["react-simple-widget", "date-picker"];
        if (_className) classes.push(_className);
        return classes.join(" ");
    };

    return (
        <PopupMenu>
            <div className={className()} {...rest}>
                {djs(date).format("dddd, Do MMMM YYYY")}
            </div>

            {closePopup => (
                <Calendar
                    initialDate={date}
                    isDateActive={(y, m, d) => djs([y, m, d]).format("YYYY-MM-DD") === date}
                    isDateOutlined={(y, m, d) => djs([y, m, d]).date() === djs(date, "YYYY-MM-DD").date()}
                    className="d-inline-block w-auto"
                    onDateSelect={date => {
                        onDateSelect(date);
                        closePopup();
                    }}
                />
            )}
        </PopupMenu>
    );
};
