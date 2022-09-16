import React, { useEffect, useState } from "react";
import { CalendarProps } from "../../../types";
import {
  dateDay,
  dateMonth,
  dateMonthDayOffset,
  dateYear,
  days,
  daySuffix,
  months,
  years
} from "./calendar-utils";
import arraySupport from "dayjs/plugin/arraySupport";
import djs from "dayjs";
import styled from "styled-components";

djs.extend(arraySupport);

const CalendarRoot = styled.div.attrs(props => ({
  className: "react-simple-widget calendar " + props.className
}))`
  position: relative;
  background-color: white;
  border: 2px solid var(--rsw-primary-color);
  border-radius: 4px;

  header {
    padding: 6px 12px;

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

  .controls {
    p {
      padding: 4px 12px;
      transition: background-color var(--rsw-transition-duration);
      flex: 1 1;
    }

    .display-day {
      span {
        font-size: 10px;
        vertical-align: super;
      }
    }

    select {
      border: none;
    }

    select:focus {
      box-shadow: none;
      outline: none;
      border: none;
    }

    select:last-child {
      width: auto;
    }
  }

  .calendar-days {
    display: grid;
    padding: 6px;
    grid-template-columns: repeat(7, 1fr);
    overflow: auto;

    .weekday {
      font-size: 85%;
      padding-bottom: 4px;
      text-align: center;
      opacity: 0.75;
    }

    button {
      transition: background-color var(--rsw-transition-duration);
      border-radius: 2px;
    }

    button:focus,
    button:hover {
      outline: none;
      box-shadow: none;
    }

    button.outline {
      border: 2px solid var(--rsw-primary-color);
      border-radius: 4px;
    }

    button.current {
      color: var(--rsw-primary-color);
      background-color: var(--rsw-primary-color-light);
    }

    button.active {
      background-color: var(--rsw-primary-color);
      color: white;
      font-weight: bold;
    }

    button:not(.active):hover {
      cursor: pointer;
      background-color: #f3f3f3;
    }

    button,
    .offset {
      padding: 6px 10px;
    }
  }

  .calendar-error {
    text-align: center;
    margin: 0;
    padding: 12px;
    font-size: 85%;
    font-weight: bold;
    color: var(--rsw-error-color);
    border-top: 1px solid #e3e3e3;
  }
`;

export const Calendar = ({
  initialDate,
  isDateActive,
  isDateOutlined,
  validator,
  onChange,
  ...rest
}: CalendarProps): JSX.Element => {
  const [displayYear, setDisplayYear] = useState(dateYear(initialDate));
  const [displayMonth, setDisplayMonth] = useState(dateMonth(initialDate));
  const [displayDay, setDisplayDay] = useState(dateDay(initialDate));
  const [daysInMonth, setDaysInMonth] = useState(
    djs([displayYear, displayMonth, displayDay]).daysInMonth()
  );
  const [monthDayOffset, setMonthDayOffset] = useState(
    dateMonthDayOffset(displayYear, displayMonth)
  );
  const [isCtrlPressed, setIsCtrlPressed] = useState(false);
  const [error, setError] = useState(null);

  const calendarDayClassName = (day: number): string => {
    const classes = ["btn", "btn-link", "btn-sm", "text-decoration-none"];
    if (isDateActive && isDateActive(displayYear, displayMonth, day))
      classes.push("active");
    if (isDateOutlined && isDateOutlined(displayYear, displayMonth, day))
      classes.push("outline");
    if (djs([displayYear, displayMonth, day]).isSame(djs(), "day"))
      classes.push("current");
    return classes.join(" ");
  };

  const selectDisplayDay = (day: number): void => {
    const selectedDate = djs([displayYear, displayMonth, day]).format(
      "YYYY-MM-DD"
    );

    if (validator) {
      const error = validator(selectedDate);
      if (error) return setError(error);
      else setError(null);
    } else setError(null);

    setDisplayDay(day);
    onChange(selectedDate);
  };

  const resetDisplayDate = (): void => {
    const current = djs();
    setDisplayYear(current.year());
    setDisplayMonth(current.month());
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
    <CalendarRoot {...rest}>
      <header className="d-flex justify-content-between align-items-center">
        <p className="mb-0">Select Date</p>

        <button
          type="button"
          className="btn btn-light btn-sm"
          onClick={resetDisplayDate}>
          <i className="fa fa-clock" />
        </button>
      </header>

      <div className="controls d-flex align-items-center">
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
      </div>

      <div className="calendar-days">
        {days.map(day => (
          <div key={day} className="weekday">
            {day.substring(0, 2)}
          </div>
        ))}

        {Array(monthDayOffset + daysInMonth)
          .fill(null)
          .map((_, dayIndex) => {
            if (dayIndex - monthDayOffset < 0) {
              return <div key={dayIndex} className="offset" />;
            }

            const day = dayIndex - monthDayOffset + 1;

            return (
              <button
                type="button"
                key={dayIndex}
                className={calendarDayClassName(day)}
                onClick={() => selectDisplayDay(day)}>
                {day}
              </button>
            );
          })}
      </div>

      {error && <p className="calendar-error">{error}</p>}
    </CalendarRoot>
  );
};
