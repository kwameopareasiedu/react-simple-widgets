import React from "react";
import { PageActions } from "./index";

export default { title: "PageActions", component: PageActions };

export const normal = () => (
    <PageActions className="mb-4">
        <button className="btn btn-primary btn-sm">Action #1</button>
        <button className="btn btn-success btn-sm">Action #2</button>
        <button className="btn btn-warning btn-sm">Action #3</button>
        <button className="btn btn-danger btn-sm">Action #4</button>
    </PageActions>
);

export const withNoChildren = () => <PageActions className="mb-4" />;
