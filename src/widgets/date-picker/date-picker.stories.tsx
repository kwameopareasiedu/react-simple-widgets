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
            <div>
                <PopupMenu>
                    <button className="btn btn-primary btn-sm">{djs(date).format("dddd, Do MMMM YYYY")}</button>
                    <DatePicker className="d-inline-block w-auto" onDateSelect={setDate} date={date} />
                </PopupMenu>
            </div>
        );
    };

    return <ExampleApp />;
};
