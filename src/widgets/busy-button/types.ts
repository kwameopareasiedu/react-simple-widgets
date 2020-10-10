import { ButtonHTMLAttributes } from "react";

export interface BusyButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    busy?: boolean;
}