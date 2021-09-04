import React, { useState } from "react";
import { Calendar } from "./calendar";
import { PopupMenu } from "../popup-menu/popup-menu";
import arraySupport from "dayjs/plugin/arraySupport";
import advancedFormat from "dayjs/plugin/advancedFormat";
import djs from "dayjs";

djs.extend(arraySupport);
djs.extend(advancedFormat);

export default { title: "Calendar", component: Calendar };

export const usage = (): any => {
    const ExampleApp = (): any => {
        const [date, setDate] = useState("2021-09-04");

        return (
            <div>
                <PopupMenu>
                    <button className="btn btn-primary btn-sm">{djs(date).format("dddd, Do MMMM YYYY")}</button>

                    {closePopup => (
                        <Calendar
                            initialDate={date}
                            isDateActive={(y, m, d) => djs([y, m, d]).format("YYYY-MM-DD") === date}
                            isDateOutlined={(y, m, d) => djs([y, m, d]).date() === djs(date, "YYYY-MM-DD").date()}
                            className="d-inline-block w-auto"
                            onDateSelect={date => {
                                setDate(date);
                                closePopup();
                            }}
                        />
                    )}
                </PopupMenu>
            </div>
        );
    };

    return <ExampleApp />;
};
