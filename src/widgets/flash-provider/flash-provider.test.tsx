/** @jest-environment jsdom */
import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it, jest } from "@jest/globals";
import { Default as FlashProviderExample } from "./flash-provider.stories";

afterEach(cleanup);

describe("FlashProvider test", () => {
    it("should render without issues", async () => {
        const { findByText } = render(<FlashProviderExample />);
        expect(await findByText("Flash error")).not.toBe(null);
        expect(await findByText("Flash warning")).not.toBe(null);
        expect(await findByText("Flash info")).not.toBe(null);
        expect(await findByText("Flash success")).not.toBe(null);
    });

    it("should flash a messages", async () => {
        const { findByText, container } = render(<FlashProviderExample />);

        fireEvent.click(await findByText("Flash error"));
        fireEvent.click(await findByText("Flash warning"));
        fireEvent.click(await findByText("Flash info"));
        fireEvent.click(await findByText("Flash success"));

        expect(container.querySelector(".flash-state-error")).not.toBe(null);
        expect(container.querySelector(".flash-state-warning")).not.toBe(null);
        expect(container.querySelector(".flash-state-info")).not.toBe(null);
        expect(container.querySelector(".flash-state-success")).not.toBe(null);
    });

    it("should dismiss a flash", async () => {
        const alertMock = jest.fn();
        global.alert = alertMock;

        const { findByText, container } = render(<FlashProviderExample />);

        fireEvent.click(await findByText("Flash error"));
        expect(container.querySelector(".flash-button")).not.toBe(null);

        fireEvent.click(await container.querySelector(".flash-button"));

        expect(alertMock).toHaveBeenCalledTimes(1);
        expect(alertMock).toHaveBeenCalledWith("Dismissed");
        expect(container.querySelector(".flash-state-error")).toBe(null);
    });
});
