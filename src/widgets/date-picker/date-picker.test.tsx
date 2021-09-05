/** @jest-environment jsdom */
import React from "react";
import { afterEach, describe, expect, it } from "@jest/globals";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { Default as DatePickerExample } from "./date-picker.stories";

afterEach(cleanup);

describe("DatePicker Tests", () => {
    it("should render without any problems", () => {
        render(<DatePickerExample />);
    });

    it("should open calendar when button is clicked", async () => {
        const { container } = render(<DatePickerExample />);

        expect(container.querySelector(".react-simple-widget.calendar")).toBe(null);
        expect(container.querySelector(".react-simple-widget.date-picker")).not.toBe(null);
        fireEvent.click(container.querySelector(".react-simple-widget.date-picker"));
        expect(container.querySelector(".react-simple-widget.calendar")).not.toBe(null);
    });
});
