/** @jest-environment jsdom */
import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it } from "@jest/globals";
import { Default as TagTextInput } from "./tag-input.stories";

afterEach(cleanup);

describe("TagInput test", () => {
  it("should render without issues", async () => {
    const { findByPlaceholderText } = render(<TagTextInput />);
    expect(await findByPlaceholderText("Enter tags")).not.toBe(null);
  });

  it("should add a new tag with Enter key", async () => {
    const { findByPlaceholderText, container } = render(<TagTextInput />);
    const inputEl = await findByPlaceholderText("Enter tags");
    const tagValue = "New Tag";

    fireEvent.change(inputEl, { target: { value: tagValue } });
    fireEvent.keyDown(inputEl, { key: "Enter" });

    expect(container.querySelectorAll(".option").length).toBe(1);
  });

  it("should add a new tag with Tab key", async () => {
    const { findByPlaceholderText, container } = render(<TagTextInput />);
    const inputEl = await findByPlaceholderText("Enter tags");
    const tagValue = "New Tag";

    fireEvent.change(inputEl, { target: { value: tagValue } });
    fireEvent.keyDown(inputEl, { key: "Tab" });

    expect(container.querySelectorAll(".option").length).toBe(1);
  });
});
