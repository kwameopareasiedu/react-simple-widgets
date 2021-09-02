/** @jest-environment jsdom */
import React from "react";
import { afterEach, describe, expect, it } from "@jest/globals";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { Default as BusyButtonExample } from "./busy-button.stories";

afterEach(cleanup);

describe("BusyButton Tests", () => {
    it("should render without any problems", () => {
        render(<BusyButtonExample />);
    });

    it("should show loader when clicked", async () => {
        const { container } = render(<BusyButtonExample />);

        expect(container.querySelector(".loader")).toBe(null);
        fireEvent.click(container.querySelector("button"));
        expect(container.querySelector(".loader")).not.toBe(null);
    });
});
