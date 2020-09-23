import "./flash-view.scss";
import React from "react";
import { FlashType } from "./types";
import ErrorIcon from "../../assets/error.svg";
import WarningIcon from "../../assets/warning.svg";
import SuccessIcon from "../../assets/success.svg";
import ChevronIcon from "../../assets/chevron-right.svg";
import InfoIcon from "../../assets/info.svg";

interface IFlashView {
    type: FlashType;
    title: string;
    message: string;
    onDismiss: () => void;
}

export const FlashView = ({ type, title, message, onDismiss }: IFlashView): any => {
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

    return (
        <div className={className()}>
            <div className="card-body text-center">
                <img src={icon()} alt="Flash icon" className="flash-icon" />
                <h5 className="flash-title">{title}</h5>
                <div className="flash-message">{message || ""}</div>
                <button type="button" className="btn btn-lg flash-button" onClick={onDismiss}>
                    <img src={ChevronIcon} alt="Continue" />
                </button>
            </div>
        </div>
    );
};
