import React from "react";
import { Loader } from "./index";

export default { title: "Loader", component: Loader };

export const normal = () => <Loader />;

export const withText = () => <Loader>Hello world</Loader>;

export const withTextCentered = () => <Loader className="text-center d-block">Hello world</Loader>;
