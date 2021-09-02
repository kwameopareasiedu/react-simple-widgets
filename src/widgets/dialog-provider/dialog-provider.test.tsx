/** @jest-environment jsdom */
import React from "react";
import { afterEach, describe, expect, it, jest } from "@jest/globals";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { Default as DialogProviderExample } from "./dialog-provider.stories";

afterEach(cleanup);

describe("DialogProvider Tests", () => {
    it("should render without any problems", () => {
        render(<DialogProviderExample />);
    });

    it("should have 6 dialog buttons", async () => {
        const { findByText } = render(<DialogProviderExample />);
        expect(await findByText("Open small dialog")).not.toBe(null);
        expect(await findByText("Open medium dialog")).not.toBe(null);
        expect(await findByText("Open wide dialog")).not.toBe(null);
        expect(await findByText("Open all dialogs")).not.toBe(null);
        expect(await findByText("Open dialog for value")).not.toBe(null);
        expect(await findByText("Open background dismissible dialog")).not.toBe(null);
    });

    it("should open a dialog when button is pressed", async () => {
        const { findByText, container } = render(<DialogProviderExample />);

        fireEvent.click(await findByText("Open small dialog"));
        expect(container.querySelector("p")).not.toBe(null);
    });

    // it("should close a dialog when escape is pressed", async () => {
    //     const { findByText, container } = render(<DialogProviderExample />);
    //     const openSmallDialogBtn = await findByText("Open small dialog");
    //
    //     fireEvent.click(openSmallDialogBtn);
    //     fireEvent.keyUp(container, { key: "Escape", code: "Escape" });
    //
    //     await new Promise(resolve => setTimeout(resolve, 50));
    //
    //     expect(container.querySelector("p")).toBe(null);
    // });

    it("should open all dialog when button is pressed", async () => {
        const { findByText, container } = render(<DialogProviderExample />);

        fireEvent.click(await findByText("Open all dialogs"));
        expect(container.querySelectorAll("p").length).toBe(4);
    });

    it("should open and close a dialog", async () => {
        const { findByText, container } = render(<DialogProviderExample />);

        fireEvent.click(await findByText("Open medium dialog"));
        expect(container.querySelectorAll("p").length).toBe(1);

        fireEvent.click(await findByText("Close dialog"));
        expect(container.querySelectorAll("p").length).toBe(0);
    });

    it("should return a value when dialog is closed", async () => {
        const alertMock = jest.fn();
        global.alert = alertMock;

        const { findByText, container } = render(<DialogProviderExample />);

        fireEvent.click(await findByText("Open dialog for value"));
        expect(container.querySelectorAll("p").length).toBe(1);

        const valueButton = container.querySelector(".card button");

        fireEvent.click(valueButton);
        expect(alertMock).toHaveBeenCalledTimes(1);
        expect(alertMock).toHaveBeenCalledWith("Dialog returned a value of A");
    });

    it("should close a dismissible dialog when background is clicked", async () => {
        const { findByText, container } = render(<DialogProviderExample />);
        const openDismissibleDialogBtn = await findByText("Open background dismissible dialog");

        fireEvent.click(openDismissibleDialogBtn);
        fireEvent.click(container.querySelector(".dialog-view"));
        expect(container.querySelectorAll(".dialog-view-content").length).toBe(0);
    });
});
