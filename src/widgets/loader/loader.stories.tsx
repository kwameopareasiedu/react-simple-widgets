import React from "react";
import { Loader } from "./loader";

export default { title: "Loader", component: Loader };

export const Default = () => <Loader />;

export const Inverted = () => (
    <div style={{ padding: 20, backgroundColor: "#333" }}>
        <Loader className="text-center text-white" invert>
            Hello world
        </Loader>
    </div>
);
