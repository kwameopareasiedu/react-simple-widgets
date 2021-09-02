import React from "react";
import { useCountdown } from "./use-countdown";

export default { title: "UseCountdown" };

export const Default = () => {
    const ExampleApp = (): any => {
        const [count, running, stopCountdown, resetCountdown] = useCountdown(10);

        return (
            <div style={{ padding: "30px" }}>
                <div className="mb-4">
                    <button className="btn btn-primary btn-sm" onClick={resetCountdown} disabled={running}>
                        {!running
                            ? "Start 10s countdown"
                            : `Button will be enabled in ${count} second${count > 1 ? "s" : ""}`}
                    </button>
                </div>

                <div className="mb-4">
                    <button className="btn btn-danger btn-sm" onClick={stopCountdown} disabled={!running}>
                        Cancel
                    </button>
                </div>
            </div>
        );
    };

    return <ExampleApp />;
};
