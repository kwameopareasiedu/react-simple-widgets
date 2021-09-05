import React, { useState } from "react";
import { Calendar } from "./calendar";
import arraySupport from "dayjs/plugin/arraySupport";
import advancedFormat from "dayjs/plugin/advancedFormat";
import djs from "dayjs";

djs.extend(arraySupport);
djs.extend(advancedFormat);

export default { title: "Calendar", component: Calendar };

export const Default = (): any => {
    const ExampleApp = (): any => {
        const [date, setDate] = useState("2021-09-04");

        return (
            <Calendar
                initialDate={date}
                isDateActive={(y, m, d) => djs([y, m, d]).format("YYYY-MM-DD") === date}
                isDateOutlined={(y, m, d) => djs([y, m, d]).date() === djs(date, "YYYY-MM-DD").date()}
                className="d-inline-block w-auto"
                onChange={date => {
                    setDate(date);
                }}
            />
        );
    };

    return <ExampleApp />;
};
