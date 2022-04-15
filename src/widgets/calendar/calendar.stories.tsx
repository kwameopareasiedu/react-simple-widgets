import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { Calendar } from "./calendar";
import arraySupport from "dayjs/plugin/arraySupport";
import advancedFormat from "dayjs/plugin/advancedFormat";
import djs from "dayjs";

djs.extend(arraySupport);
djs.extend(advancedFormat);

export default { title: "Calendar", component: Calendar };

export const Default = (): any => {
  const ExampleApp = (): any => {
    const [date, setDate] = useState(djs().format("YYYY-MM-DD"));

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

export const WithValidator = (): any => {
  const ExampleApp = (): any => {
    const [date, setDate] = useState(djs().format("YYYY-MM-DD"));

    const validator = (date: string): string => {
      if (djs(date).isBefore(djs())) {
        return "Must be after today";
      } else return null;
    };

    return (
      <div>
        <div className="alert alert-primary mb-4">
          <i className="fa fa-info-circle me-2" />
          <span>Dates cannot be before the current day</span>
        </div>

        <Calendar
          initialDate={date}
          isDateActive={(y, m, d) => djs([y, m, d]).format("YYYY-MM-DD") === date}
          isDateOutlined={(y, m, d) => djs([y, m, d]).date() === djs(date, "YYYY-MM-DD").date()}
          className="d-inline-block w-auto"
          validator={validator}
          onChange={date => {
            setDate(date);
            action("On Changed")(date);
          }}
        />
      </div>
    );
  };

  return <ExampleApp />;
};
