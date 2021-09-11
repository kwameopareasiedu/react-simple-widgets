import "./month-date-picker.scss";
import React, { useEffect, useState } from "react";
import { MonthDatePicker as IMonthDatePicker } from "../../../types";
import { dateMonth, dateYear, months, years } from "../calendar/calendar-utils";
import arraySupport from "dayjs/plugin/arraySupport";
import djs from "dayjs";
import { PopupMenu } from "../popup-menu/popup-menu";
import { FieldDecoration } from "../field-decoration/field-decoration";
import advancedFormat from "dayjs/plugin/advancedFormat";

djs.extend(arraySupport);
djs.extend(advancedFormat);

export const MonthDatePicker = ({ value, className: _className, onChange, ...rest }: IMonthDatePicker): JSX.Element => {
    const [displayYear, setDisplayYear] = useState(dateYear(value));
    const [displayMonth, setDisplayMonth] = useState(dateMonth(value));

    const className = (): string => {
        const classes = ["react-simple-widget", "month-date-picker"];
        if (_className) classes.push(_className);
        return classes.join(" ");
    };

    const monthBtnClassName = (active: boolean): string => {
        const classes = ["btn", "btn-link", "btn-sm", "text-decoration-none"];
        if (active) classes.push("active");
        return classes.join(" ");
    };

    const resetDisplayDate = (): void => {
        const current = djs();
        setDisplayYear(current.year());
        setDisplayMonth(current.month());
    };

    useEffect(() => {
        onChange(djs([displayYear, displayMonth, 1]).format("YYYY-MM-DD"));
    }, [displayMonth, displayYear]);

    return (
        <PopupMenu>
            <div className={className()} {...rest}>
                {djs([displayYear, displayMonth, 1]).format("MMMM YYYY")}
            </div>

            {closePopup => (
                <div className="react-simple-widget month-date-picker-popup card">
                    <div className="card-body">
                        <header className="d-flex justify-content-between align-items-center mb-3">
                            <p className="mb-0">Select Date</p>

                            <button type="button" className="btn btn-light btn-sm" onClick={resetDisplayDate}>
                                <i className="fa fa-clock" />
                            </button>
                        </header>

                        <FieldDecoration label="Year" className="mb-4">
                            {({ onFieldFocus, onFieldBlur }) => (
                                <select
                                    value={displayYear}
                                    className="year-select"
                                    onChange={e => setDisplayYear(parseInt(e.target.value))}
                                    onFocus={onFieldFocus}
                                    onBlur={onFieldBlur}>
                                    {years.map(year => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </select>
                            )}
                        </FieldDecoration>

                        <div className="month-select">
                            {months.map((month, monthIndex) => (
                                <button
                                    key={month}
                                    type="button"
                                    className={monthBtnClassName(monthIndex === displayMonth)}
                                    onClick={() => {
                                        setDisplayMonth(monthIndex);
                                        closePopup();
                                    }}>
                                    {month.substring(0, 3)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </PopupMenu>
    );
};
