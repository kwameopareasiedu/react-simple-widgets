/** @jest-environment jsdom */
import React from "react";
import { afterEach, describe, expect, it } from "@jest/globals";
import { cleanup, render } from "@testing-library/react";
import { Default as CalendarExample } from "./calendar.stories";
import { dateDay, dateMonth, dateYear, days, daySuffix, months, years } from "./calendar-utils";
import djs from "dayjs";

afterEach(cleanup);

describe("Calendar Tests", () => {
    it("should run utility functions", () => {
        expect(years).toHaveLength(200);
        expect(months).toHaveLength(12);
        expect(days).toHaveLength(7);
        expect(dateYear()).toBe(djs().year());
        expect(dateYear("2000-01-01")).toBe(2000);
        expect(dateMonth()).toBe(djs().month());
        expect(dateMonth("2000-01-01")).toBe(0);
        expect(dateDay()).toBe(djs().date());
        expect(dateDay("2021-01-01")).toBe(1);
        expect(daySuffix(1)).toBe("st");
        expect(daySuffix(21)).toBe("st");
        expect(daySuffix(31)).toBe("st");
        expect(daySuffix(2)).toBe("nd");
        expect(daySuffix(22)).toBe("nd");
        expect(daySuffix(3)).toBe("rd");
        expect(daySuffix(23)).toBe("rd");
        expect(daySuffix(4)).toBe("th");
        expect(daySuffix(24)).toBe("th");
    });

    it("should render without any problems", () => {
        render(<CalendarExample />);
    });

    it("should open calendar when button is clicked", async () => {
        const { container } = render(<CalendarExample />);
        expect(container.querySelector(".react-simple-widget.calendar")).not.toBe(null);
    });
});
