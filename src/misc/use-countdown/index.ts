import { useRef, useState } from "react";
import { IUseCountdown } from "../../../types";

export const useCountdown = (delay: number): IUseCountdown => {
    const [countdown, setCountdown] = useState(delay);
    const [running, setRunning] = useState(false);
    const intervalRef = useRef<any>();

    const resetCountdown = (): void => {
        if (intervalRef.current) clearInterval(intervalRef.current);

        setCountdown(delay);
        setRunning(true);

        intervalRef.current = setInterval(() => {
            setCountdown(countdown => {
                if (countdown - 1 === 0) {
                    setRunning(() => false);
                    clearInterval(intervalRef.current);
                }

                return countdown - 1;
            });
        }, 1000);
    };

    return { countdown, running, resetCountdown };
};
