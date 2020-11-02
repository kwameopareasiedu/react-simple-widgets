import "./index.scss";
import moment from "moment";
import React, { useContext, useEffect, useRef, useState } from "react";
import { DialogHelper, DialogSize } from "../../providers/dialog-provider/types";
import { DialogProviderContext } from "../../providers/dialog-provider";
import { FieldDecoration } from "../field-decoration";
import { TimePicker as Props } from "./types";
import DownIcon from "../../assets/down.svg";
import UpIcon from "../../assets/up.svg";

interface ITimePickerDialog {
    time: string;
    label?: string;
    helper: DialogHelper;
    validator?: (time: string) => string;
}

enum Meridian {
    AM,
    PM
}

const TimePickerDialog = ({ time, label, helper, validator }: ITimePickerDialog): any => {
    const initialTime = time || moment().format("HH:mm");
    const [initialHour, initialMinute] = initialTime.split(":").map(part => parseInt(part));
    const [meridian, setMeridian] = useState(initialHour < 12 ? Meridian.AM : Meridian.PM);
    const [hour, setHour] = useState(meridian === Meridian.AM ? initialHour : initialHour % 12);
    const [repeatMinuteOffset, setRepeatMinuteOffset] = useState(null);
    const [repeatHourOffset, setRepeatHourOffset] = useState(null);
    const [minute, setMinute] = useState(initialMinute);
    const [error, setError] = useState("");
    const repeatTimerRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        if (repeatHourOffset) {
            repeatTimerRef.current = setInterval(() => {
                interceptSetHour(repeatHourOffset);
            }, 250);
        } else clearInterval(repeatTimerRef.current);
    }, [repeatHourOffset]);

    useEffect(() => {
        if (repeatMinuteOffset) {
            repeatTimerRef.current = setInterval(() => {
                interceptSetMinute(repeatMinuteOffset);
            }, 100);
        } else clearInterval(repeatTimerRef.current);
    }, [repeatMinuteOffset]);

    const returnTime = (): void => {
        const finalHour = meridian === Meridian.AM ? hour : hour + 12;
        const time = `${finalHour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;

        if (validator) {
            const error = validator(time);
            if (error) return setError(error);
            else setError(null);
        }

        helper.dismiss(time);
    };

    const interceptSetHour = (offset: number): void => {
        setHour(hour => {
            let newHour = hour + offset;
            if (newHour < 0) newHour = 11;
            else if (newHour > 11) newHour = 0;
            return newHour;
        });
    };

    const interceptSetMinute = (offset: number): void => {
        setMinute(minute => {
            let newMinute = minute + offset;
            if (newMinute < 0) newMinute = 59;
            else if (newMinute > 59) newMinute = 0;
            return newMinute;
        });
    };

    return (
        <div className="react-simple-widget time-picker-dialog card">
            <div className="card-body">
                {label && <label>{label}</label>}

                <div className="controls">
                    <section className="hour-section">
                        <button
                            type="button"
                            className="btn"
                            onClick={() => interceptSetHour(1)}
                            onMouseDown={() => setRepeatHourOffset(1)}
                            onMouseLeave={() => setRepeatHourOffset(null)}
                            onMouseUp={() => setRepeatHourOffset(null)}>
                            <img src={UpIcon} alt="Up icon" />
                        </button>

                        <input
                            type="text"
                            className="form-control"
                            value={hour === 0 ? "12" : hour.toString().padStart(2, "0")}
                            readOnly
                        />

                        <button
                            type="button"
                            className="btn"
                            onClick={() => interceptSetHour(-1)}
                            onMouseDown={() => setRepeatHourOffset(-1)}
                            onMouseLeave={() => setRepeatHourOffset(null)}
                            onMouseUp={() => setRepeatHourOffset(null)}>
                            <img src={DownIcon} alt="Down icon" />
                        </button>
                    </section>

                    <span>&nbsp;&nbsp;:&nbsp;&nbsp;</span>

                    <section className="minute-section">
                        <button
                            type="button"
                            className="btn"
                            onClick={() => interceptSetMinute(1)}
                            onMouseDown={() => setRepeatMinuteOffset(1)}
                            onMouseLeave={() => setRepeatMinuteOffset(null)}
                            onMouseUp={() => setRepeatMinuteOffset(null)}>
                            <img src={UpIcon} alt="Up icon" />
                        </button>

                        <input
                            type="text"
                            className="form-control"
                            value={minute.toString().padStart(2, "0")}
                            readOnly
                        />

                        <button
                            type="button"
                            className="btn"
                            onClick={() => interceptSetMinute(-1)}
                            onMouseDown={() => setRepeatMinuteOffset(-1)}
                            onMouseLeave={() => setRepeatMinuteOffset(null)}
                            onMouseUp={() => setRepeatMinuteOffset(null)}>
                            <img src={DownIcon} alt="Down icon" />
                        </button>
                    </section>

                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>

                    <section className="meridian-section">
                        <button
                            type="button"
                            className={`btn mb-2 ${meridian === Meridian.AM ? "active" : ""}`}
                            onClick={() => setMeridian(Meridian.AM)}>
                            AM
                        </button>
                        <button
                            type="button"
                            className={`btn ${meridian === Meridian.PM ? "active" : ""}`}
                            onClick={() => setMeridian(Meridian.PM)}>
                            PM
                        </button>
                    </section>
                </div>

                {error && <div className="error mb-4">{error}</div>}

                <div className="footer d-flex justify-content-between">
                    <button type="button" className="btn btn-light btn-sm btn-block" onClick={returnTime}>
                        Select
                    </button>

                    <span>&nbsp;</span>

                    <button type="button" className="btn btn-link btn-sm btn-block" onClick={() => helper.dismiss()}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

/**
 * TimePicker is a widget that allows the user select a time using the HH:mm format. It uses the
 * dialog to show the picker and thus required DialogProvider to be an ancestor
 */
export const TimePicker = ({
    time,
    label,
    error,
    leading,
    trailing,
    stickyFloatingLabel,
    decoration,
    validator,
    onFocus,
    onBlur,
    onChange
}: Props): any => {
    const { showDialog } = useContext(DialogProviderContext);
    const [dialogOpen, setDialogOpen] = useState(false);

    const openFileDialog = (onFocus: () => void): void => {
        if (dialogOpen) return;

        showDialog(helper => <TimePickerDialog helper={helper} time={time} label={label} validator={validator} />, {
            size: DialogSize.SMALL,
            onDismissed: (time: string) => {
                setDialogOpen(false);
                onChange(time);
            }
        });

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
        <div className="react-simple-widget time-picker">
            <FieldDecoration
                label={label}
                error={error}
                leading={leading}
                trailing={trailing}
                decoration={decoration}
                stickyFloatingLabel={stickyFloatingLabel || !!time || dialogOpen}>
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
                        {time && moment(time, "HH:mm").format("h:mm A")}
                    </div>
                )}
            </FieldDecoration>
        </div>
    );
};
