import "./flash-view.scss";
import React from "react";
import { FlashType } from "../../../types";
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
        if (type === FlashType.ERROR) classes.push("flash-state-error");
        if (type === FlashType.WARNING) classes.push("flash-state-warning");
        if (type === FlashType.INFO) classes.push("flash-state-info");
        if (type === FlashType.SUCCESS) classes.push("flash-state-success");
        return classes.join(" ");
    };

    const icon = (): any => {
        if (type === FlashType.ERROR) return ErrorIcon;
        if (type === FlashType.WARNING) return WarningIcon;
        if (type === FlashType.INFO) return InfoIcon;
        if (type === FlashType.SUCCESS) return SuccessIcon;
    };

    return (
        <div className={className()}>
            <div className="card-body text-center">
                <img src={icon()} alt="Flash icon" className="flash-icon" />
                <h5 className="flash-title">{title}</h5>
                <p className="flash-message">{message || ""}</p>
                <button type="button" className="btn btn-lg flash-button" onClick={onDismiss}>
                    <img src={ChevronIcon} alt="Continue" />
                </button>
            </div>
        </div>
    );
};
