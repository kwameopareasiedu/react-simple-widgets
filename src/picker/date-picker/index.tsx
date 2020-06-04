import "./index.scss";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { DatePickerMode, DialogSize, FieldDecorationType, IDatePicker, IDialogHelper } from "../../../types";
import { DialogProviderContext } from "../../provider/dialog-provider";
import { FieldDecoration } from "../../form/field-decoration";

interface IDatePickerDialog {
    label?: string;
    format?: string;
    mode: DatePickerMode;
    helper: IDialogHelper;
    date: Array<string> | string;
    validator?: (date: string) => string;
}

const DatePickerDialog = ({ label, mode, date, format = "YYYY-MM-DD", helper, validator }: IDatePickerDialog): any => {
    const yearList = Array.from(new Array(200), (v, i) => moment().year() + i - 120);
    const monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const weekDayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const [error, setError] = useState("");
    const [ready, setReady] = useState(false);
    const [displayYear, setDisplayYear] = useState<number>();
    const [displayMonth, setDisplayMonth] = useState<number>();
    const [dates, setDates] = useState<Array<string>>([]);

    useEffect(() => {
        const defaultDateMoment = moment();
        const dateMoment = moment(date, format);
        const modeIsSingle = [DatePickerMode.SINGLE, DatePickerMode.MONTH].includes(mode);
        const dateIsString = Object.prototype.toString.call(date) === "[object String]";
        const dateIsArray = Object.prototype.toString.call(date) === "[object Array]";

        if (dateIsArray) {
            const initialDates = date as Array<string>;

            if (initialDates.length === 0) setDates([]);
            else if (modeIsSingle) setDates([initialDates[0]]);
            else if (!modeIsSingle) setDates([...initialDates]);
        } else if (dateIsString) setDates([date as string]);

        setDisplayYear(dateMoment.isValid() ? dateMoment.year() : defaultDateMoment.year());
        setDisplayMonth(dateMoment.isValid() ? dateMoment.month() : defaultDateMoment.month());
        setReady(true);
    }, []);

    const clearWindowSelect = (): void => {
        if (window.getSelection) {
            if (window.getSelection().empty) window.getSelection().empty();
            else if (window.getSelection().removeAllRanges) window.getSelection().removeAllRanges();
        } else if ((document as any).selection) (document as any).selection.empty();
    };

    const selectDate = (e: React.MouseEvent, year: number, month: number, day: number): void => {
        const dateMoment = moment([year, month, day]);

        // Clear the text selection caused by the Shift key being engaged
        clearWindowSelect();

        if (validator) {
            const error = validator(dateMoment.format(format));
            if (error) return setError(error);
            else setError(null);
        }

        if (mode === DatePickerMode.SINGLE) setDates([dateMoment.format(format)]);
        if (mode === DatePickerMode.MONTH) setDates([dateMoment.format(format)]);
        if (mode === DatePickerMode.MULTI) {
            if (dates.length > 0) {
                if (!dates.includes(dateMoment.format(format))) {
                    if (e.shiftKey) {
                        const lastSelectedDate = dates.slice(-1)[0];
                        const lastSelectedDateMoment = moment(lastSelectedDate, format);

                        if (dateMoment.isBefore(lastSelectedDateMoment)) {
                            const newDates: Array<string> = [];
                            for (; dateMoment.isSameOrBefore(lastSelectedDateMoment); dateMoment.add(1, "d"))
                                newDates.push(dateMoment.format(format));
                            setDates(newDates);
                        } else if (dateMoment.isAfter(lastSelectedDateMoment)) {
                            const newDates: Array<string> = [];
                            for (; dateMoment.isSameOrAfter(lastSelectedDateMoment); dateMoment.subtract(1, "d"))
                                newDates.push(dateMoment.format(format));
                            setDates(newDates);
                        }
                    } else setDates([...dates, dateMoment.format(format)]);
                } else setDates(dates.filter(d => d != dateMoment.format(format)));
            } else setDates([dateMoment.format(format)]);
        }

        setDisplayYear(year);
        setDisplayMonth(month);
    };

    const selectCurrentDay = (e: React.MouseEvent) => {
        const currentMoment = moment();
        const day = mode !== DatePickerMode.MONTH ? currentMoment.date() : 1;
        selectDate(e, currentMoment.year(), currentMoment.month(), day);
    };

    const returnDate = (): void => {
        if (mode === DatePickerMode.SINGLE) helper.dismiss(dates[0]);
        if (mode === DatePickerMode.MULTI) helper.dismiss(dates.length > 0 ? dates : null);
        if (mode === DatePickerMode.MONTH) helper.dismiss(dates[0]);
    };

    const buildDayCalendar = (): any => {
        const calendar = [];
        const displayMoment = moment([displayYear, displayMonth, 1]);
        const daysInMonth = displayMoment.daysInMonth();
        const offset = displayMoment.day();
        const tempMoment = moment();

        for (let i = 1; i <= daysInMonth + offset; i++) {
            if (i > offset) {
                const day = i - offset;
                const props: any = {};
                const classes = ["calendar-day", "calendar-day-valid"];

                if (dates.includes(tempMoment.year(displayYear).month(displayMonth).date(day).format(format))) classes.push("calendar-day-active");

                props.onClick = (e: React.MouseEvent): void => selectDate(e, displayYear, displayMonth, day);
                props.className = classes.join(" ");
                props.key = day;

                calendar.push(<span {...props}>{day}</span>);
            } else calendar.push(<span key={i - offset} className="calendar-day" />);
        }

        return calendar;
    };

    const buildMonthCalendar = (): any => {
        const calendar = [];
        const tempMoment = moment();

        for (let month = 0; month < 12; month++) {
            const props: any = {};
            const classes = ["calendar-month"];

            if (dates.includes(tempMoment.year(displayYear).month(month).date(1).format(format))) classes.push("calendar-month-active");

            props.onClick = (e: React.MouseEvent): void => selectDate(e, displayYear, month, 1);
            props.className = classes.join(" ");
            props.key = month;

            calendar.push(<span {...props}>{monthList[month]}</span>);
        }

        return calendar;
    };

    return (
        <div className="react-simple-widget date-picker-dialog card">
            {ready && (
                <div className="card-body">
                    {label && <label>{label}</label>}

                    <div className="controls">
                        {mode !== DatePickerMode.MONTH && (
                            <select className="month-select" value={displayMonth} onChange={e => setDisplayMonth(parseInt(e.target.value))}>
                                {monthList.map((month, index) => (
                                    <option key={month} value={index}>
                                        {month}
                                    </option>
                                ))}
                            </select>
                        )}

                        <button type="button" onClick={selectCurrentDay}>
                            {mode !== DatePickerMode.MONTH ? "Today" : "This month"}
                        </button>

                        <select className="year-select" value={displayYear} onChange={e => setDisplayYear(parseInt(e.target.value))}>
                            {yearList.map((year, index) => (
                                <option key={index} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>

                    {mode !== DatePickerMode.MONTH ? (
                        <div className="day-calendar">
                            <header>
                                {weekDayList.map(day => (
                                    <span key={day}>{day}</span>
                                ))}
                            </header>

                            <section>{buildDayCalendar()}</section>
                        </div>
                    ) : (
                        <div className="month-calendar">{buildMonthCalendar()}</div>
                    )}

                    {mode === DatePickerMode.MULTI && (
                        <p className="hint">
                            Hint: Hold <code>Shift</code> to select a range of dates
                        </p>
                    )}

                    {error && <div className="error">{error}</div>}

                    <div className="actions">
                        <button type="button" className="btn btn-light btn-sm btn-block" onClick={returnDate}>
                            {dates.length === 0 ? "Select none" : "Select"}
                        </button>

                        <span>&nbsp;</span>

                        <button type="button" className="btn btn-link btn-sm btn-block" onClick={(): void => setDates([])}>
                            Clear
                        </button>

                        <span>&nbsp;</span>

                        <button type="button" className="btn btn-link btn-sm btn-block" onClick={(): void => helper.dismiss()}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

/**
 * DatePicker is a widget that allows the user select a date. It uses the
 * dialog to show the picker and thus required DialogProvider to be an ancestor
 */
export const DatePicker = ({
    date,
    mode = DatePickerMode.SINGLE,
    label,
    error,
    format = "YYYY-MM-DD",
    displayFormat = "dddd, Do MMMM YYYY",
    decoration,
    validator,
    onFocus,
    onBlur,
    onChange
}: IDatePicker): any => {
    const { showDialog } = useContext(DialogProviderContext);
    const [dialogOpen, setDialogOpen] = useState(false);

    const openFileDialog = (onFocus: () => void): void => {
        if (dialogOpen) return;

        const options = {
            size: DialogSize.SMALL,
            onDialogDismissed: (date: string) => {
                setDialogOpen(false);
                onChange(date);
            }
        };

        showDialog(
            helper => <DatePickerDialog helper={helper} mode={mode} date={date} label={label} format={format} validator={validator} />,
            options
        );

        setDialogOpen(true);
        onFocus();
    };

    const onKeyUp = (e: React.KeyboardEvent, onFocus: () => void): void => {
        if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            e.stopPropagation();
            openFileDialog(onFocus);
        }
    };

    return (
        <div className="react-simple-widget date-picker">
            <FieldDecoration label={label} decoration={decoration} error={error} hasValue={!!date || dialogOpen}>
                {({ onFieldFocus, onFieldBlur }): any => (
                    <div
                        className="trigger"
                        onKeyUp={e => onKeyUp(e, onFieldFocus)}
                        onClick={(): void => openFileDialog(onFieldFocus)}
                        onFocus={() => {
                            onFieldFocus();
                            if (onFocus) onFocus();
                        }}
                        onBlur={() => {
                            onFieldBlur();
                            if (onBlur) onBlur();
                        }}
                        tabIndex={0}>
                        {date && mode !== DatePickerMode.MULTI && moment(date).format(displayFormat)}
                        {date && mode === DatePickerMode.MULTI && (date as Array<string>).map(d => moment(d).format(displayFormat)).join(", ")}
                    </div>
                )}
            </FieldDecoration>
        </div>
    );
};
