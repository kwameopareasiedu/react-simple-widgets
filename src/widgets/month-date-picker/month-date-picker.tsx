import "./month-date-picker.scss";
import React, { useEffect, useState } from "react";
import { MonthDatePicker as IMonthDatePicker } from "../../../types";
import { dateMonth, dateYear, months, years } from "../calendar/calendar-utils";
import arraySupport from "dayjs/plugin/arraySupport";
import djs from "dayjs";

djs.extend(arraySupport);

export const MonthDatePicker = ({
    date,
    onDateSelect,
    className: _className,
    ...rest
}: IMonthDatePicker): JSX.Element => {
    const [displayYear, setDisplayYear] = useState(dateYear(date));
    const [displayMonth, setDisplayMonth] = useState(dateMonth(date));

    const className = (): string => {
        const classes = ["react-simple-widget", "month-date-picker"];
        if (_className) classes.push(_className);
        return classes.join(" ");
    };

    useEffect(() => {
        onDateSelect(djs([displayYear, displayMonth, 1]).format("YYYY-MM-DD"));
    }, [displayMonth, displayYear]);

    return (
        <div className={className()} {...rest}>
            <select
                value={displayMonth}
                className="form-select"
                onChange={e => setDisplayMonth(parseInt(e.target.value))}>
                {months.map((month, monthIndex) => (
                    <option key={month} value={monthIndex}>
                        {month}
                    </option>
                ))}
            </select>

            <select
                value={displayYear}
                className="form-select"
                onChange={e => setDisplayYear(parseInt(e.target.value))}>
                {years.map(year => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>
        </div>
    );
};
