import "./multi-date-picker.scss";
import React, { useState } from "react";
import { MultiDatePicker as IMultiDatePicker } from "../../../types";
import arraySupport from "dayjs/plugin/arraySupport";
import djs from "dayjs";
import { Calendar } from "../calendar/calendar";
import { PopupMenu } from "../popup-menu/popup-menu";
import advancedFormat from "dayjs/plugin/advancedFormat";

djs.extend(arraySupport);
djs.extend(advancedFormat);

export const MultiDatePicker = ({
    value: _dates,
    className: _className,
    displayFormat,
    onChange,
    ...rest
}: IMultiDatePicker): JSX.Element => {
    const [dates, setDates] = useState([..._dates]);

    const className = (): string => {
        const classes = ["react-simple-widget", "multi-date-picker"];
        if (_className) classes.push(_className);
        return classes.join(" ");
    };

    const isDateActive = (year: number, month: number, day: number) => {
        const formatted = djs([year, month, day]).format("YYYY-MM-DD");
        return dates.includes(formatted);
    };

    const isDateOutlined = (year: number, month: number, day: number) => {
        for (const date of dates) {
            if (djs([year, month, day]).date() === djs(date, "YYYY-MM-DD").date()) {
                return true;
            }
        }

        return false;
    };

    return (
        <PopupMenu>
            <div className={className()} {...rest}>
                {_dates.length > 1 && `${dates.length} dates selected`}
                {_dates.length === 1 && djs(dates[0]).format(displayFormat || "ddd, Do MMM YYYY")}
                {_dates.length === 0 && "No date selected"}
            </div>

            {closePopup => (
                <div className="react-simple-widget multi-date-picker-popup">
                    <Calendar
                        className="d-inline-block w-auto"
                        initialDate={dates[0] || undefined}
                        isDateOutlined={isDateOutlined}
                        isDateActive={isDateActive}
                        onChange={date => {
                            if (!dates.includes(date)) {
                                setDates([...dates, date]);
                            } else {
                                setDates(dates.filter(d => d !== date));
                            }
                        }}
                    />

                    <div className="selected-dates">
                        <label className="d-block">Selected Dates</label>

                        {dates.length === 0 ? (
                            <p className="mb-0 no-dates">None selected</p>
                        ) : (
                            <div className=" dates list-group list-group-flush">
                                {dates.map(date => (
                                    <div key={date} className="list-group-item d-flex align-items-center py-0">
                                        <small className="me-2">
                                            {djs(date, "YYYY-MM-DD").format("ddd, Do MMMM YYYY")}
                                        </small>

                                        <button
                                            type="button"
                                            className="btn btn-link btn-sm"
                                            onClick={() => setDates(dates.filter(d => d !== date))}>
                                            <i className="fa fa-times" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="actions">
                            <button
                                type="button"
                                className="btn btn-primary btn-sm"
                                onClick={() => {
                                    onChange([...dates]);
                                    closePopup();
                                }}>
                                Ok
                            </button>

                            {dates.length > 0 && (
                                <button
                                    type="button"
                                    className="btn btn-link btn-sm text-decoration-none"
                                    onClick={() => setDates([])}>
                                    Clear
                                </button>
                            )}

                            <button
                                type="button"
                                className="btn btn-link btn-sm text-decoration-none"
                                onClick={closePopup}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </PopupMenu>
    );
};
