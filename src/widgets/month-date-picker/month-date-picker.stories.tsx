import React, { useState } from "react";
import { MonthDatePicker } from "./month-date-picker";
import advancedFormat from "dayjs/plugin/advancedFormat";
import djs from "dayjs";

djs.extend(advancedFormat);

export default { title: "MonthDatePicker", component: MonthDatePicker };

export const Default = (): any => {
    const ExampleApp = (): any => {
        const [date, setDate] = useState("2021-09-04");

        return (
            <MonthDatePicker
                className="btn btn-outline-primary btn-sm d-inline-block w-auto"
                onChange={setDate}
                value={date}
            />
        );
    };

    return <ExampleApp />;
};
