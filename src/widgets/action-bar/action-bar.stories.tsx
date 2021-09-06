import React from "react";
import { ActionBar } from "./action-bar";

export default { title: "ActionBar", component: ActionBar };

export const Default = () => (
    <ActionBar className="mb-4">
        <button className="btn btn-primary btn-sm">Action #1</button>
        <button className="btn btn-success btn-sm">Action #2</button>
        <button className="btn btn-warning btn-sm">Action #3</button>
        <button className="btn btn-danger btn-sm">Action #4</button>
    </ActionBar>
);
