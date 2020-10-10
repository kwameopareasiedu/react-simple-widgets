import React from "react";
import { Breadcrumbs } from "./index";
import { BrowserRouter, Link } from "react-router-dom";

export default { title: "Breadcrumbs", component: Breadcrumbs };

export const usage = () => (
    <BrowserRouter>
        <Breadcrumbs className="mt-4">
            <Link to="">Home</Link>
            <Link to="">Page 1</Link>
            <Link to="">Path 1</Link>
            <Link to="">Sub-path 1</Link>
            <Link to="">Sub-sub-path 1</Link>
        </Breadcrumbs>
    </BrowserRouter>
);
