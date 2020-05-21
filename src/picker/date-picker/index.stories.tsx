import moment from "moment";
import React, { useState } from "react";
import { DialogProvider } from "../../provider/dialog-provider";
import { DatePickerMode, FieldDecorationType } from "../../../types";
import { DatePicker } from "./index";

export default {
    title: "Date Picker",
    component: DatePicker,
    decorators: [(storyFn: any) => <div style={{ padding: "30px" }}>{storyFn()}</div>]
};

export const usage = (): any => {
    const ExampleApp = (): any => {
        const [date, setDate] = useState<string | Array<string>>();
        const [date1, setDate1] = useState<string | Array<string>>();
        const [date2, setDate2] = useState<string | Array<string>>();

        return (
            <div>
                <p>This date picker allows for selecting a single date before 2021</p>
                <DatePicker
                    date={date}
                    format="YYYY-MM-DD"
                    label="Select date"
                    mode={DatePickerMode.SINGLE}
                    decoration={FieldDecorationType.FLOATING_LABEL}
                    validator={date => (moment(date, "YYYY-MM-DD").year() > 2020 ? "Must be before 2021" : null)}
                    onChange={date => {
                        if (date) setDate(date);
                    }}
                />

                <br />

                <p>This date picker allows for selecting a month</p>
                <DatePicker
                    date={date1}
                    format="YYYY-MM-DD"
                    label="Select date"
                    displayFormat="MMMM YYYY"
                    mode={DatePickerMode.MONTH}
                    decoration={FieldDecorationType.FLOATING_LABEL}
                    onChange={date => {
                        if (date) setDate1(date);
                    }}
                />

                <br />

                <p>This date picker allows for selecting multiple dates</p>
                <DatePicker
                    date={date2}
                    format="YYYY-MM-DD"
                    label="Select date"
                    mode={DatePickerMode.MULTI}
                    decoration={FieldDecorationType.FLOATING_LABEL}
                    onChange={date => {
                        if (date) setDate2(date);
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
