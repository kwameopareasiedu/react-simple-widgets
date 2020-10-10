import React from "react";
import { Loader } from "./index";

export default { title: "Loader", component: Loader };

export const normal = () => <Loader />;

export const withText = () => <Loader>Hello world</Loader>;
