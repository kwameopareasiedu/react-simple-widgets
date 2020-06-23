import "./index.scss";
import moment from "moment";
import React, { useContext, useEffect, useRef, useState } from "react";
import { DialogSize, IDialogHelper, ITimePicker } from "../../../types";
import { DialogProviderContext } from "../../provider/dialog-provider";
import { FieldDecoration } from "../../form/field-decoration";

interface ITimePickerDialog {
    time: string;
    label?: string;
    helper: IDialogHelper;
    validator?: (time: string) => string;
}

enum DragTarget {
    HOUR,
    MINUTE
}

enum Meridian {
    AM,
    PM
}

const TimePickerDialog = ({ time, label, helper, validator }: ITimePickerDialog): any => {
    const initialTime = time || moment().format("HH:mm");
    const [initialHourComponent, initialMinuteComponent] = initialTime.split(":").map(part => parseInt(part));
    const offsetAngle = Math.PI / 2;

    const [meridian, setMeridian] = useState(initialHourComponent < 12 ? Meridian.AM : Meridian.PM);
    const [hour, setHour] = useState(meridian === Meridian.AM ? initialHourComponent : initialHourComponent % 12);
    const [minute, setMinute] = useState(initialMinuteComponent);
    const [dragging, setDragging] = useState(false);
    const [error, setError] = useState("");
    const ctxRef = useRef<CanvasRenderingContext2D>();
    const containerRef = useRef<HTMLDivElement>();
    const canvasRef = useRef<HTMLCanvasElement>();

    useEffect(() => {
        canvasRef.current.height = 300;
        canvasRef.current.width = containerRef.current.clientWidth;
        ctxRef.current = canvasRef.current.getContext("2d");
        // ctxRef.current.translate(0.5, 0.5);
        drawClock();
    }, [hour, minute, meridian]);

    const distanceBetweenPoints = (x1: number, y1: number, x2: number, y2: number): number => Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    const getCanvasCenter = (): { x: number; y: number } => ({ x: canvasRef.current.width / 2, y: canvasRef.current.height / 2 });

    const getCanvasRadius = (): number => Math.min(canvasRef.current.width, canvasRef.current.height) / 2 - 2;

    const drawClock = (): void => {
        const ctx = ctxRef.current;
        const center = getCanvasCenter();
        const radius = getCanvasRadius();
        const primaryColor = getComputedStyle(document.body).getPropertyValue("--rsw-primary-theme-color").trim();

        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        // Draw background
        ctx.beginPath();
        ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = primaryColor + "07";
        ctx.fill();

        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = primaryColor;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(center.x, center.y, 8, 0, 2 * Math.PI);
        ctx.fillStyle = primaryColor;
        ctx.fill();

        // Draw clock face for hours
        for (let i = 0; i < 12; i++) {
            const text = (i ? i : 12).toString();
            const metrics = ctx.measureText(text);
            const angle = (Math.PI * i) / 6 - offsetAngle;
            const x = (radius - 55) * Math.cos(angle) + center.x - metrics.width / 2;
            const y = (radius - 55) * Math.sin(angle) + center.y + metrics.actualBoundingBoxAscent / 2;
            ctx.fillStyle = primaryColor;
            ctx.font = "1.1rem Arial";
            ctx.fillText(text, x, y);
        }

        // Draw clock face for minutes
        for (let i = 0; i < 60; i += 5) {
            const text = (i ? i : 0).toString();
            const metrics = ctx.measureText(text);
            const angle = (Math.PI * i) / 30 - offsetAngle;
            const x = (radius - 20) * Math.cos(angle) + center.x - metrics.width / 2;
            const y = (radius - 20) * Math.sin(angle) + center.y + metrics.actualBoundingBoxAscent / 2;
            ctx.font = "0.75rem Arial";
            ctx.fillText(text, x, y);
        }

        // Draw clock hands
        const hourInclination = Math.PI * ((hour + minute / 60) / 6.0) - offsetAngle;
        const hx1 = (radius - 70) * Math.cos(hourInclination) + center.x;
        const hy1 = (radius - 70) * Math.sin(hourInclination) + center.y;
        const minuteInclination = Math.PI * (minute / 30.0) - offsetAngle;
        const mx2 = (radius - 30) * Math.cos(minuteInclination) + center.x;
        const my2 = (radius - 30) * Math.sin(minuteInclination) + center.y;

        // Draw hour hand
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.moveTo(center.x, center.y);
        ctx.lineTo(hx1, hy1);
        ctx.stroke();

        // Draw minute hand
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(center.x, center.y);
        ctx.lineTo(mx2, my2);
        ctx.stroke();
    };

    const computeTimeFromGesture = (gestureX: number, gestureY: number, dragTarget: DragTarget): void => {
        const canvas = canvasRef.current;
        const canvasBounds = canvas.getBoundingClientRect();
        const center = { x: canvas.width / 2, y: canvas.height / 2 };
        const position = { x: gestureX - canvasBounds.left, y: gestureY - canvasBounds.top };
        const rawInclination = Math.atan2(position.y - center.y, position.x - center.x);
        const inclination = (() => {
            if (rawInclination < 0 && position.x - center.x < 0) return (5 * Math.PI) / 2 + rawInclination;
            else return Math.PI / 2 + rawInclination;
        })();

        if (dragTarget === DragTarget.HOUR) setHour(Math.round((inclination * 12) / (2 * Math.PI)) % 12);
        if (dragTarget === DragTarget.MINUTE) setMinute(Math.round((inclination * 60) / (2 * Math.PI)) % 60);
    };

    const onMouseDown = (gestureX: number, gestureY: number): void => {
        const canvas = canvasRef.current;
        const canvasBounds = canvas.getBoundingClientRect();
        const center = { x: canvas.width / 2, y: canvas.height / 2 };
        const position = { x: gestureX - canvasBounds.left, y: gestureY - canvasBounds.top };
        const distanceFromCenter = distanceBetweenPoints(center.x, center.y, position.x, position.y);
        const dragTarget = distanceFromCenter < 110 ? DragTarget.HOUR : DragTarget.MINUTE;
        computeTimeFromGesture(gestureX, gestureY, dragTarget);
        setDragging(true);
    };

    const onMouseMove = (gestureX: number, gestureY: number): void => {
        if (dragging) onMouseDown(gestureX, gestureY);
    };

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

    return (
        <div className="react-simple-widget time-picker-dialog card">
            <div className="card-body">
                <header className="mb-2">
                    {label && <label className="d-block mb-2">{label}</label>}
                    <p className="preview text-center mb-0">{moment([(hour + meridian * 12) % 24, minute], "h:mm").format("h:mm A")}</p>
                </header>

                <div className="canvas-container" ref={containerRef}>
                    <canvas
                        ref={canvasRef}
                        onMouseDown={e => onMouseDown(e.clientX, e.clientY)}
                        onMouseMove={e => onMouseMove(e.clientX, e.clientY)}
                        onMouseUp={() => setDragging(false)}
                        onTouchStart={e => onMouseDown(e.touches[0].clientX, e.touches[0].clientY)}
                        onTouchMove={e => onMouseMove(e.touches[0].clientX, e.touches[0].clientY)}
                        onTouchEnd={() => setDragging(false)}
                    />
                </div>

                <div className="meridian d-flex justify-content-between mb-4">
                    <button
                        type="button"
                        className={meridian === Meridian.AM ? "btn btn-link active" : "btn btn-link"}
                        onClick={() => setMeridian(Meridian.AM)}>
                        AM
                    </button>
                    <button
                        type="button"
                        className={meridian === Meridian.PM ? "btn btn-link active" : "btn btn-link"}
                        onClick={() => setMeridian(Meridian.PM)}>
                        PM
                    </button>
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
export const TimePicker = ({ time, label, error, decoration, validator, onFocus, onBlur, onChange }: ITimePicker): any => {
    const { showDialog } = useContext(DialogProviderContext);
    const [dialogOpen, setDialogOpen] = useState(false);

    const openFileDialog = (onFocus: () => void): void => {
        if (dialogOpen) return;

        showDialog(helper => <TimePickerDialog helper={helper} time={time} label={label} validator={validator} />, {
            size: DialogSize.SMALL,
            onDialogDismissed: (time: string) => {
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
            <FieldDecoration label={label} decoration={decoration} error={error} hasValue={!!time || dialogOpen}>
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
