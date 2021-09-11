import React, { useState } from "react";
import { TimePicker } from "./time-picker";
import advancedFormat from "dayjs/plugin/advancedFormat";
import djs from "dayjs";
import { action } from "@storybook/addon-actions";

djs.extend(advancedFormat);

export default { title: "TimePicker", component: TimePicker };

export const Default = (): any => {
    const ExampleApp = (): any => {
        const [time, setTime] = useState(djs().format("HH:mm"));

        return (
            <TimePicker
                className="btn btn-outline-primary btn-sm d-inline-block w-auto"
                onChange={time => {
                    action("Time changed")(time);
                    setTime(time);
                }}
                value={time}
            />
        );
    };

    return <ExampleApp />;
};
