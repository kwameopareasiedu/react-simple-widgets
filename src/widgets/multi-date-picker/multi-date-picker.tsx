import React, { useState } from "react";
import { MultiDatePickerProps } from "../../../types";
import arraySupport from "dayjs/plugin/arraySupport";
import djs from "dayjs";
import { Calendar } from "../calendar/calendar";
import { PopupMenu } from "../popup-menu/popup-menu";
import advancedFormat from "dayjs/plugin/advancedFormat";
import styled from "styled-components";

djs.extend(arraySupport);
djs.extend(advancedFormat);

const MultiDateFieldRoot = styled.div.attrs(props => ({
  className: "react-simple-widget multi-date-picker " + props.className
}))``;

const MultiDateFieldPopupRoot = styled.div.attrs(props => ({
  className: "react-simple-widget multi-date-picker-popup " + props.className
}))`
  @media screen and (min-width: 576px) {
    display: flex;
    align-items: stretch;
  }

  .calendar {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    @media screen and (min-width: 576px) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 4px;
    }
  }

  .selected-dates {
    display: flex;
    max-height: 200px;
    margin-top: -4px;
    padding-top: 4px;
    background-color: white;
    border-left: 2px solid var(--rsw-primary-color);
    border-right: 2px solid var(--rsw-primary-color);
    border-bottom: 2px solid var(--rsw-primary-color);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    flex-direction: column;
    overflow: hidden;

    @media screen and (min-width: 576px) {
      max-height: 336px;
      border: 2px solid var(--rsw-primary-color);
      border-top: 2px solid var(--rsw-primary-color);
      border-left: none;
      border-top-right-radius: 4px;
      border-bottom-left-radius: 0;
      background-color: white;
      margin-top: 0;
      padding-top: 0;
      margin-left: -4px;
      padding-left: 4px;
      overflow: hidden;
    }

    label,
    p {
      font-size: 12px;
      padding: 4px 12px;
      border-bottom: 1px solid #e3e3e3;
    }

    p {
      flex: 1 1;
    }

    .dates {
      flex: 1 1;
      overflow: auto;

      .list-group-item {
        small {
          flex: 1 1;
        }
      }
    }

    .actions {
      display: flex;

      button {
        flex: 1 1;
        border-radius: 0;
      }
    }
  }
`;

export const MultiDatePicker = ({
  value: _dates,
  displayFormat,
  validator,
  onChange,
  ...rest
}: MultiDatePickerProps): JSX.Element => {
  const [dates, setDates] = useState([..._dates]);

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
      <MultiDateFieldRoot {...rest}>
        {_dates.length > 1 && `${dates.length} dates selected`}
        {_dates.length === 1 &&
          djs(dates[0]).format(displayFormat || "ddd, Do MMM YYYY")}
        {_dates.length === 0 && "No date selected"}
      </MultiDateFieldRoot>

      {closePopup => (
        <MultiDateFieldPopupRoot>
          <Calendar
            className="d-inline-block w-auto"
            initialDate={dates[0] || undefined}
            isDateOutlined={isDateOutlined}
            isDateActive={isDateActive}
            validator={validator}
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
                  <div
                    key={date}
                    className="list-group-item d-flex align-items-center py-0">
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
        </MultiDateFieldPopupRoot>
      )}
    </PopupMenu>
  );
};
