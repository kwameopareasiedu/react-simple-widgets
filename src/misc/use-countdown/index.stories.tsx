import React, { useEffect, useState } from "react";
import { useCountdown } from "./index";

export default { title: "Use Countdown" };

export const usage = () => {
    const ExampleApp = (): any => {
        const { countdown, running, resetCountdown } = useCountdown(10);

        return (
            <div style={{ padding: "30px" }}>
                <button className="btn btn-primary btn-sm" onClick={resetCountdown} disabled={running}>
                    {!running ? "Start 10s countdown" : `Button will be enabled in ${countdown} second${countdown > 1 ? "s" : ""}`}
                </button>
            </div>
        );
    };

    return <ExampleApp />;
};
