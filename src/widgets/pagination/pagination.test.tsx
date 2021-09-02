/** @jest-environment jsdom */
import React from "react";
import { afterEach, describe, expect, it } from "@jest/globals";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { Default as PaginationExample } from "./pagination.stories";

afterEach(cleanup);

describe("Pagination Tests", () => {
    it("should render without any problems", () => {
        render(<PaginationExample />);
    });

    it("should show correct page ranges", async () => {
        const { container } = render(<PaginationExample />);
        expect((await container.querySelector(".pagination-info")).textContent).toBe("Showing 1 - 10 of 140 items");
    });

    it("should show correct page buttons", async () => {
        const { findAllByText } = render(<PaginationExample />);
        expect((await findAllByText("Prev")).length).toBeGreaterThan(0);
        expect((await findAllByText("1")).length).toBeGreaterThan(0);
        expect((await findAllByText("2")).length).toBeGreaterThan(0);
        expect((await findAllByText("3")).length).toBeGreaterThan(0);
        expect((await findAllByText("4")).length).toBeGreaterThan(0);
        expect((await findAllByText("5")).length).toBeGreaterThan(0);
        expect((await findAllByText("12")).length).toBeGreaterThan(0);
        expect((await findAllByText("13")).length).toBeGreaterThan(0);
        expect((await findAllByText("14")).length).toBeGreaterThan(0);
        expect((await findAllByText("Next")).length).toBeGreaterThan(0);
    });

    it("should change page when page button is pressed", async () => {
        const { findByText, findAllByText } = render(<PaginationExample />);

        const page5Button = await findByText("5");
        fireEvent.click(page5Button);
        expect((await findAllByText("Prev")).length).toBeGreaterThan(0);
        expect((await findAllByText("1")).length).toBeGreaterThan(0);
        expect((await findAllByText("2")).length).toBeGreaterThan(0);
        expect((await findAllByText("3")).length).toBeGreaterThan(0);
        expect((await findAllByText("4")).length).toBeGreaterThan(0);
        expect((await findAllByText("5")).length).toBeGreaterThan(0);
        expect((await findAllByText("6")).length).toBeGreaterThan(0);
        expect((await findAllByText("7")).length).toBeGreaterThan(0);
        expect((await findAllByText("8")).length).toBeGreaterThan(0);
        expect((await findAllByText("9")).length).toBeGreaterThan(0);
        expect((await findAllByText("12")).length).toBeGreaterThan(0);
        expect((await findAllByText("13")).length).toBeGreaterThan(0);
        expect((await findAllByText("14")).length).toBeGreaterThan(0);
        expect((await findAllByText("Next")).length).toBeGreaterThan(0);
    });
});
