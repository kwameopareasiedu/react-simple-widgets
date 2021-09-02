import moment from "moment";
import React, { useState } from "react";
import { DatePicker } from "./index";
import { DatePickerMode } from "./types";
import { FieldDecorationType } from "../field-decoration/types";
import { DialogProvider } from "../../widgets/dialog-provider/dialog-provider";

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
                    leading={<i className="fa fa-calendar-alt" />}
                    validator={date => (moment(date, "YYYY-MM-DD").year() > 2020 ? "Must be before 2021" : null)}
                    onChange={setDate}
                />

                <br />

                <p>This date picker allows for selecting a month</p>
                <DatePicker
                    date={date1}
                    format="YYYY-MM-DD"
                    label="Select date"
                    displayFormat="MMMM YYYY"
                    mode={DatePickerMode.MONTH}
                    leading={<i className="fa fa-calendar-alt" />}
                    decoration={FieldDecorationType.UNDERLINE}
                    onChange={setDate1}
                />

                <br />

                <p>This date picker allows you to select multiple dates</p>
                <DatePicker
                    date={date2}
                    format="YYYY-MM-DD"
                    label="Select date"
                    mode={DatePickerMode.MULTI}
                    leading={<i className="fa fa-calendar-alt" />}
                    decoration={FieldDecorationType.FLOATING_LABEL}
                    onChange={setDate2}
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
