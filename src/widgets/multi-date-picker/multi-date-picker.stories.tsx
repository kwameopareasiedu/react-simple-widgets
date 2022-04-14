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

export const WithValidator = (): any => {
  const ExampleApp = (): any => {
    const [dates, setDates] = useState([]);

    const validator = (date: string): string => {
      if (djs(date).isBefore(djs())) {
        return "Must be after this today";
      } else return null;
    };

    return (
      <MultiDatePicker
        value={dates}
        className="btn btn-outline-primary btn-sm d-inline-block w-auto"
        validator={validator}
        onChange={setDates}
      />
    );
  };

  return <ExampleApp />;
};
