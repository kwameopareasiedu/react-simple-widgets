/** @jest-environment jsdom */
import React from "react";
import { afterEach, describe, expect, it } from "@jest/globals";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { Default as PopupMenuExample } from "./popup-menu.stories";

afterEach(cleanup);

describe("PopupMenu Tests", () => {
    it("should render without any problems", () => {
        render(<PopupMenuExample />);
    });

    it("should show menu trigger buttons", async () => {
        const { findAllByText, container } = render(<PopupMenuExample />);
        expect(await findAllByText("Options")).toHaveLength(2);
        expect(container.querySelector(".card")).toBe(null);
    });

    it("should open a popup menu when trigger is pressed", async () => {
        const { findAllByText, container } = render(<PopupMenuExample />);

        const triggers = await findAllByText("Options");
        fireEvent.click(triggers[0]);
        expect(container.querySelector(".card")).not.toBe(null);
    });
});
