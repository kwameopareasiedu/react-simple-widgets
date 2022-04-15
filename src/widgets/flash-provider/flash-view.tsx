import "./flash-view.scss";
import React, { useEffect, useRef, useState } from "react";
import { FlashType, FlashViewProps } from "../../../types";
import ErrorIcon from "../../assets/error.svg";
import WarningIcon from "../../assets/warning.svg";
import SuccessIcon from "../../assets/success.svg";
import InfoIcon from "../../assets/info.svg";

export const FlashView = ({
  type,
  title,
  message,
  buttonText,
  closeTimerMs,
  onDismiss
}: FlashViewProps): JSX.Element => {
  const [closeTimer, setCloseTimer] = useState(closeTimerMs);
  const closeTimerIntervalRef = useRef<NodeJS.Timer>();

  const className = (): string => {
    const classes = ["react-simple-widget", "flash-view", "card"];

    switch (type) {
      case FlashType.ERROR:
        classes.push("flash-state-error");
        break;
      case FlashType.WARNING:
        classes.push("flash-state-warning");
        break;
      case FlashType.INFO:
        classes.push("flash-state-info");
        break;
      case FlashType.SUCCESS:
        classes.push("flash-state-success");
        break;
    }

    return classes.join(" ");
  };

  const icon = (): any => {
    switch (type) {
      case FlashType.ERROR:
        return ErrorIcon;
      case FlashType.WARNING:
        return WarningIcon;
      case FlashType.INFO:
        return InfoIcon;
      case FlashType.SUCCESS:
        return SuccessIcon;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (closeTimerMs > 0) {
      closeTimerIntervalRef.current = setInterval(() => {
        setCloseTimer(timer => {
          if (timer <= 0) clearInterval(closeTimerIntervalRef.current);
          return timer - 100;
        });
      }, 100);
    }

    return () => {
      if (closeTimerIntervalRef.current) {
        // Clear interval before destruction
        clearInterval(closeTimerIntervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (closeTimerMs > 0 && closeTimer <= 0) {
      // If timer is set and has elapsed, close popup
      if (onDismiss) onDismiss();
    }
  }, [closeTimer]);

  return (
    <div className={className()}>
      <div className="card-body text-center">
        <img src={icon()} alt="Flash icon" className="flash-icon" />
        <h5 className="flash-title">{title}</h5>
        <div className="flash-message">{message || ""}</div>
        <button type="button" className="btn flash-button" onClick={onDismiss}>
          {buttonText || "Dismiss"}
        </button>
      </div>

      {closeTimer > 0 && (
        <p className="flash-view-close-timer mb-0">
          {Math.ceil(closeTimer / 1000)
            .toString()
            .padStart(2, "0")}
        </p>
      )}
    </div>
  );
};
