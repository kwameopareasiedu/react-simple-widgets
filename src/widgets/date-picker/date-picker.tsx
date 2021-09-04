import "./date-picker.scss";
import React, { useEffect, useState } from "react";
import { DatePicker as IDatePicker } from "../../../types";
import { dateDay, dateMonth, dateMonthDayOffset, dateYear, days, daySuffix, months, years } from "./date-picker-utils";
import arraySupport from "dayjs/plugin/arraySupport";
import djs from "dayjs";

djs.extend(arraySupport);

export const DatePicker = ({ date, onDateSelect, className: _className, ...rest }: IDatePicker): JSX.Element => {
    const [displayYear, setDisplayYear] = useState(dateYear(date));
    const [displayMonth, setDisplayMonth] = useState(dateMonth(date));
    const [displayDay, setDisplayDay] = useState(dateDay(date));
    const [daysInMonth, setDaysInMonth] = useState(djs([displayYear, displayMonth, displayDay]).daysInMonth());
    const [monthDayOffset, setMonthDayOffset] = useState(dateMonthDayOffset(displayYear, displayMonth));
    const [isCtrlPressed, setIsCtrlPressed] = useState(false);

    const className = (): string => {
        const classes = ["react-simple-widget", "date-picker"];
        if (_className) classes.push(_className);
        return classes.join(" ");
    };

    const selectDisplayDay = (day: number): void => {
        setDisplayDay(day);
        onDateSelect(djs([displayYear, displayMonth, day]).format("YYYY-MM-DD"));
    };

    useEffect(() => {
        if (displayMonth > months.length - 1) {
            setDisplayMonth(displayMonth % months.length);
            setDisplayYear(displayYear + 1);
        } else if (displayMonth < 0) {
            setDisplayMonth((displayMonth + months.length) % months.length);
            setDisplayYear(displayYear - 1);
        }

        if (displayMonth === 1 && displayDay > 28) setDisplayDay(28);

        setDaysInMonth(djs([displayYear, displayMonth, displayDay]).daysInMonth());
        setMonthDayOffset(dateMonthDayOffset(displayYear, displayMonth));
    }, [displayYear, displayMonth]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Control") setIsCtrlPressed(!isCtrlPressed);
        };

        window.addEventListener("keyup", onKey);
        window.addEventListener("keydown", onKey);

        return () => {
            window.removeEventListener("keyup", onKey);
            window.removeEventListener("keydown", onKey);
        };
    }, [isCtrlPressed]);

    return (
        <div className={className()} {...rest}>
            <header className="year-header d-flex align-items-center">
                <p className="display-day text-center mb-0">
                    {displayDay}
                    <span>{daySuffix(displayDay)}</span>
                </p>

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
            </header>

            <div className="calendar">
                {days.map(day => (
                    <div key={day} className="weekday">
                        {day.substr(0, 2)}
                    </div>
                ))}

                {Array(monthDayOffset + daysInMonth)
                    .fill(null)
                    .map((_, dayIndex) => {
                        if (dayIndex - monthDayOffset < 0) {
                            return <div key={dayIndex} className="offset" />;
                        }

                        return (
                            <button
                                key={dayIndex}
                                className={`btn btn-link btn-sm text-decoration-none ${
                                    dayIndex - monthDayOffset + 1 === displayDay ? "active" : ""
                                }`}
                                onClick={() => selectDisplayDay(dayIndex - monthDayOffset + 1)}>
                                {dayIndex - monthDayOffset + 1}
                            </button>
                        );
                    })}
            </div>
        </div>
    );
};
