import { useRef, useState } from "react";
import { UseCountdown, UseCountdownState } from "../../../types";

export const useCountdown: UseCountdown = (countdown: number): UseCountdownState => {
    const [count, setCount] = useState(countdown);
    const [running, setRunning] = useState(false);
    const intervalRef = useRef<any>();

    const resetCountdown = (): void => {
        if (intervalRef.current) clearInterval(intervalRef.current);

        setCount(countdown);
        setRunning(true);

        intervalRef.current = setInterval(() => {
            setCount(countdown => {
                if (countdown - 1 === 0) {
                    setRunning(() => false);
                    clearInterval(intervalRef.current);
                }

                return countdown - 1;
            });
        }, 1000);
    };

    const stopCountdown = (): void => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setRunning(false);
        setCount(0);
    };

    return [count, running, stopCountdown, resetCountdown];
};
