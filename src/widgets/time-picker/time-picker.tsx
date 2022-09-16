import React, { useEffect, useState } from "react";
import { TimePickerProps } from "../../../types";
import arraySupport from "dayjs/plugin/arraySupport";
import djs from "dayjs";
import { PopupMenu } from "../popup-menu/popup-menu";
import { FieldDecoration } from "../field-decoration/field-decoration";
import {
  Meridian,
  timeHour,
  timeMeridian,
  timeMinute
} from "./time-picker-utils";
import styled from "styled-components";

djs.extend(arraySupport);

const TimePickerRoot = styled.div.attrs(props => ({
  className: "react-simple-widget time-picker " + props.className
}))``;

const TimePickerPopupRoot = styled.div.attrs(props => ({
  className: "react-simple-widget time-picker-popup " + props.className
}))`
  width: 200px;

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

  .field-decoration {
    flex: 1 1;
  }
`;

export const TimePicker = ({
  value,
  onChange,
  ...rest
}: TimePickerProps): JSX.Element => {
  const [displayHour, _setDisplayHour] = useState(timeHour(value) % 12);
  const [displayMinute, _setDisplayMinute] = useState(timeMinute(value));
  const [displayMeridian, setDisplayMeridian] = useState<Meridian>(
    timeMeridian(value)
  );

  const setDisplayHour = (hour: string): void => {
    let val = parseInt(hour);
    if (val > 12) val = 1;
    else if (val < 1) val = 12;
    _setDisplayHour(val);
  };

  const setDisplayMinute = (minute: string): void => {
    let val = parseInt(minute);
    if (val > 59) val = 0;
    else if (val < 0) val = 59;
    _setDisplayMinute(val);
  };

  const resetDisplayTime = (): void => {
    const current = djs();
    _setDisplayHour(current.hour() % 12);
    _setDisplayMinute(current.minute());
  };

  useEffect(() => {
    let resolvedHour =
      displayMeridian === "AM" && displayHour === 12 ? 0 : displayHour;
    resolvedHour += displayMeridian === "PM" && displayHour !== 12 ? 12 : 0;
    const time = djs([2021, 1, 1, resolvedHour, displayMinute, 0]);

    if (!time.isValid()) {
      onChange(djs().format("HH:mm"));
    } else onChange(time.format("HH:mm"));
  }, [displayHour, displayMinute, displayMeridian]);

  return (
    <PopupMenu>
      <TimePickerRoot {...rest}>
        {djs(`2021-01-01T${value}`).format("h:mm A")}
      </TimePickerRoot>

      {closePopup => (
        <TimePickerPopupRoot className="card">
          <div className="card-body">
            <header className="d-flex justify-content-between align-items-center mb-3">
              <p className="mb-0">Select Time</p>

              <button
                type="button"
                className="btn btn-light btn-sm"
                onClick={resetDisplayTime}>
                <i className="fa fa-clock" />
              </button>
            </header>

            <div className="d-flex align-items-center mb-3">
              <FieldDecoration label="Hour" className="me-4">
                {({ onFieldFocus, onFieldBlur }) => (
                  <input
                    type="number"
                    className="hour-select"
                    value={!isNaN(displayHour) ? displayHour : ""}
                    onChange={e => setDisplayHour(e.target.value)}
                    onFocus={onFieldFocus}
                    onBlur={onFieldBlur}
                  />
                )}
              </FieldDecoration>

              <FieldDecoration label="Minute">
                {({ onFieldFocus, onFieldBlur }) => (
                  <input
                    type="number"
                    className="minute-select"
                    value={!isNaN(displayMinute) ? displayMinute : ""}
                    onChange={e => setDisplayMinute(e.target.value)}
                    onFocus={onFieldFocus}
                    onBlur={onFieldBlur}
                  />
                )}
              </FieldDecoration>
            </div>

            <div className="w-100 btn-group mb-3">
              <button
                type="button"
                className={
                  displayMeridian === "AM"
                    ? "btn btn-secondary btn-sm"
                    : "btn btn-light btn-sm"
                }
                onClick={() => setDisplayMeridian("AM")}>
                AM
              </button>

              <button
                type="button"
                className={
                  displayMeridian === "PM"
                    ? "btn btn-secondary btn-sm"
                    : "btn btn-light btn-sm"
                }
                onClick={() => setDisplayMeridian("PM")}>
                PM
              </button>
            </div>

            <div className="d-grid">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={closePopup}>
                Ok
              </button>
            </div>
          </div>
        </TimePickerPopupRoot>
      )}
    </PopupMenu>
  );
};
