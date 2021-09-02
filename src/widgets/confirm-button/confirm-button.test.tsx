/** @jest-environment jsdom */
import React from "react";
import { afterEach, describe, expect, it } from "@jest/globals";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { Default as ConfirmButtonExample } from "./confirm-button.stories";

afterEach(cleanup);

describe("ConfirmButton Tests", () => {
    it("should render without any problems", () => {
        render(<ConfirmButtonExample />);
    });

    it("should have 4 confirm buttons", async () => {
        const { findAllByText } = render(<ConfirmButtonExample />);
        expect(await findAllByText("Start")).toHaveLength(4);
    });

    it("should open a dialog when button is pressed", async () => {
        const { findByText, findAllByText } = render(<ConfirmButtonExample />);

        const startButtons = await findAllByText("Start");
        fireEvent.click(startButtons[0]);
        expect(
            await findByText("Proceeding will disable the button for two (2) seconds. Do you want to proceed?")
        ).not.toBe(null);
    });
});
