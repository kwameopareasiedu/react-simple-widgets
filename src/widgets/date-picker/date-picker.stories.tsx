import React, { useState } from "react";
import DatePicker from "./date-picker";
import advancedFormat from "dayjs/plugin/advancedFormat";
import djs from "dayjs";

djs.extend(advancedFormat);

export default { title: "DatePicker", component: DatePicker };

export const Default = (): any => {
  const ExampleApp = (): any => {
    const [date, setDate] = useState(djs().format("YYYY-MM-DD"));

    return (
      <DatePicker className="btn btn-outline-primary btn-sm d-inline-block w-auto" onChange={setDate} value={date} />
    );
  };

  return <ExampleApp />;
};

export const WithValidator = (): any => {
  const ExampleApp = (): any => {
    const [date, setDate] = useState(djs().format("YYYY-MM-DD"));

    const validator = (date: string): string => {
      if (djs(date).isBefore(djs())) {
        return "Must be after this today";
      } else return null;
    };

    return (
      <DatePicker
        className="btn btn-outline-primary btn-sm d-inline-block w-auto"
        validator={validator}
        onChange={setDate}
        value={date}
      />
    );
  };

  return <ExampleApp />;
};
