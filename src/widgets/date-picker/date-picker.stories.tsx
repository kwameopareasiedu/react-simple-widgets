import React, { useState } from "react";
import { DatePicker } from "./date-picker";
import { PopupMenu } from "../popup-menu/popup-menu";
import advancedFormat from "dayjs/plugin/advancedFormat";
import djs from "dayjs";

djs.extend(advancedFormat);

export default { title: "DatePicker", component: DatePicker };

export const usage = (): any => {
    const ExampleApp = (): any => {
        const [date, setDate] = useState("2021-09-04");
        return (
            <DatePicker
                className="btn btn-outline-primary btn-sm d-inline-block w-auto"
                onDateSelect={setDate}
                date={date}
            />
        );
    };

    return <ExampleApp />;
};
