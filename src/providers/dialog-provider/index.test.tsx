import React from "react";
import { afterEach, expect, it } from "@jest/globals";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { normal as DialogProviderExample } from "./index.stories";

afterEach(cleanup);

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
    const openSmallDialogBtn = await findByText("Open small dialog");

    fireEvent.click(openSmallDialogBtn);
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
//     screen.debug();
//     // expect(container.querySelector("p")).toBe(null);
// });

it("should open all dialog when button is pressed", async () => {
    const { findByText, container } = render(<DialogProviderExample />);
    const openAllDialogBtn = await findByText("Open all dialogs");

    fireEvent.click(openAllDialogBtn);
    expect(container.querySelectorAll("p").length).toBe(3);
});

it("should close a dismissible dialog when background is clicked", async () => {
    const { findByText, container } = render(<DialogProviderExample />);
    const openDismissibleDialogBtn = await findByText("Open background dismissible dialog");

    fireEvent.click(openDismissibleDialogBtn);
    fireEvent.click(container.querySelector(".dialog-view"));
    expect(container.querySelectorAll(".dialog-view-content").length).toBe(0);
});
