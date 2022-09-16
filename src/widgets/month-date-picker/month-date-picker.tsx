import React, { useEffect, useState } from "react";
import { MonthDatePickerProps } from "../../../types";
import { dateMonth, dateYear, months, years } from "../calendar/calendar-utils";
import arraySupport from "dayjs/plugin/arraySupport";
import djs from "dayjs";
import { PopupMenu } from "../popup-menu/popup-menu";
import { FieldDecoration } from "../field-decoration/field-decoration";
import advancedFormat from "dayjs/plugin/advancedFormat";
import styled from "styled-components";

djs.extend(arraySupport);
djs.extend(advancedFormat);

const MonthDatePickerRoot = styled.div.attrs(props => ({
  className: "react-simple-widget month-date-picker " + props.className
}))``;

const MonthDatePickerPopupRoot = styled.div.attrs(props => ({
  className: "react-simple-widget month-date-picker-popup " + props.className
}))`
  header {
    p {
      font-weight: 400;
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 2px;
    }

    button {
      i {
        color: var(--rsw-primary-color);
      }
    }
  }

  select {
    display: inline-block;
    width: auto;
    background-color: transparent;
  }

  .month-select {
    display: grid;
    grid-template-columns: repeat(4, 25%);

    button {
      transition: background-color var(--rsw-transition-duration);
      white-space: nowrap;
      border-radius: 2px;
    }

    button:focus,
    button:hover {
      outline: none;
      box-shadow: none;
    }

    button.active {
      background-color: var(--rsw-primary-color);
      color: white;
      font-weight: bold;
    }
  }

  .month-date-picker-error {
    text-align: center;
    margin-top: 12px;
    padding-top: 12px;
    font-size: 85%;
    font-weight: bold;
    color: var(--rsw-error-color);
    border-top: 1px solid #e3e3e3;
  }
`;

export const MonthDatePicker = ({
  value,
  validator,
  onChange,
  ...rest
}: MonthDatePickerProps): JSX.Element => {
  const [displayYear, setDisplayYear] = useState(dateYear(value));
  const [displayMonth, setDisplayMonth] = useState(dateMonth(value));
  const [error, setError] = useState(null);

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
      <MonthDatePickerRoot {...rest}>
        {djs([displayYear, displayMonth, 1]).format("MMMM YYYY")}
      </MonthDatePickerRoot>

      {closePopup => (
        <MonthDatePickerPopupRoot className="card">
          <div className="card-body">
            <header className="d-flex justify-content-between align-items-center mb-3">
              <p className="mb-0">Select Date</p>

              <button
                type="button"
                className="btn btn-light btn-sm"
                onClick={resetDisplayDate}>
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

                    if (validator) {
                      const selectedDate = djs([
                        displayYear,
                        monthIndex,
                        1
                      ]).format("YYYY-MM-DD");
                      const error = validator(selectedDate);
                      if (error) return setError(error);
                      else setError(null);
                    } else setError(null);

                    closePopup();
                  }}>
                  {month.substring(0, 3)}
                </button>
              ))}
            </div>

            {error && <div className="month-date-picker-error">{error}</div>}
          </div>
        </MonthDatePickerPopupRoot>
      )}
    </PopupMenu>
  );
};
