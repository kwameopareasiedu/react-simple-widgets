import React, { useState } from "react";
import { MultiDatePicker } from "./multi-date-picker";
import advancedFormat from "dayjs/plugin/advancedFormat";
import djs from "dayjs";

djs.extend(advancedFormat);

export default { title: "MultiDatePicker", component: MultiDatePicker };

export const Default = (): any => {
    const ExampleApp = (): any => {
        const [dates, setDates] = useState([]);

        return (
            <MultiDatePicker
                className="btn btn-outline-primary btn-sm d-inline-block w-auto"
                onChange={setDates}
                value={dates}
            />
        );
    };

    return <ExampleApp />;
};
