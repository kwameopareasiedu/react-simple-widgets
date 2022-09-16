import React, { useEffect, useRef, useState } from "react";
import { FlashType, FlashViewProps } from "../../../types";
import ErrorIcon from "../../assets/error.svg";
import WarningIcon from "../../assets/warning.svg";
import SuccessIcon from "../../assets/success.svg";
import InfoIcon from "../../assets/info.svg";
import styled from "styled-components";

const FlashViewRoot = styled.div.attrs(props => ({
  className: "react-simple-widget flash-view " + props.className
}))`
  --flash-title-color: #e3e3e3;

  max-width: 300px;
  border-radius: 12px;
  overflow: hidden;
  margin: 0 auto;

  &.flash-state-error {
    --flash-title-color: var(--rsw-flash-view-error-theme-color);

    .card-body .flash-button {
      color: white;
    }
  }

  &.flash-state-warning {
    --flash-title-color: var(--rsw-flash-view-warning-theme-color);

    .card-body .flash-button {
      color: #333333;
    }
  }

  &.flash-state-info {
    --flash-title-color: var(--rsw-flash-view-info-theme-color);

    .card-body .flash-button {
      color: #333333;
    }
  }

  &.flash-state-success {
    --flash-title-color: var(--rsw-flash-view-success-theme-color);

    .card-body .flash-button {
      color: white;
    }
  }

  .card-body {
    padding: 25px;
    color: #545454;

    .flash-icon {
      width: 50px;
      margin-bottom: 15px;
    }

    .flash-title {
      margin-bottom: 20px;
      font-weight: bold;
      color: var(--flash-title-color);
    }

    .flash-message {
      margin-bottom: 15px;
      word-break: break-word;
    }

    .flash-button {
      width: 100%;
      font-size: 1rem;
      border-radius: 8px;
      background-color: var(--flash-title-color);
      transition: box-shadow 0.5s;
      overflow: hidden;

      img {
        width: 30px;
      }
    }

    .flash-button:hover {
      box-shadow: none;
    }
  }

  .flash-view-close-timer {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
  }
`;

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

  const additionalClassNames = (): string => {
    const classes = ["card"];

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
    <FlashViewRoot className={additionalClassNames()}>
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
    </FlashViewRoot>
  );
};
