import React, { useState } from "react";
import { MonthDatePicker } from "./month-date-picker";
import advancedFormat from "dayjs/plugin/advancedFormat";
import djs from "dayjs";

djs.extend(advancedFormat);

export default { title: "MonthDatePicker", component: MonthDatePicker };

export const usage = (): any => {
    const ExampleApp = (): any => {
        const [date, setDate] = useState("2021-09-04");
        return <MonthDatePicker className="d-inline-block" onDateSelect={setDate} date={date} />;
    };

    return <ExampleApp />;
};
