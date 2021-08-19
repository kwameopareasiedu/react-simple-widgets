import React, { useState } from "react";
import { select, withKnobs } from "@storybook/addon-knobs";
import { TimePicker } from "./index";
import { DialogProvider } from "../../dialog-provider/dialog-provider";

export default {
    title: "Time Picker",
    component: TimePicker,
    decorators: [withKnobs, (storyFn: any) => <div style={{ padding: "30px" }}>{storyFn()}</div>]
};

export const usage = (): any => {
    const ExampleApp = (): any => {
        const hours = Array.from(new Array(24).fill(0).map((h, i) => i));
        const minutes = Array.from(new Array(60).fill(0).map((h, i) => i));
        const [time, setTime] = useState<string>(`${select("Hour", hours, 0)}:${select("Minute", minutes, 0)}`);

        return (
            <div>
                <TimePicker
                    time={time}
                    label="Select time"
                    validator={time => (parseInt(time.split(":")[0]) >= 15 ? "Must be before 3:00PM" : null)}
                    onChange={time => {
                        if (time) setTime(time);
                    }}
                />
            </div>
        );
    };

    return (
        <DialogProvider>
            <ExampleApp />
        </DialogProvider>
    );
};
