import React, { useEffect, useState } from "react";
import { debounce } from "./index";

export default { title: "Debounce" };

export const usage = () => {
    const ExampleApp = (): any => {
        const [value, setValue] = useState("");
        const [debounced, setDebouncedValue] = useState("");

        useEffect(() => debounce("set-debounce", () => setDebouncedValue(value), 1000), [value]);

        return (
            <div style={{ padding: "30px" }}>
                <input type="text" className="form-control mb-4" value={value} onChange={e => setValue(e.target.value)} />

                <p className="text-center" style={{ color: "red" }}>
                    Raw input value (Updates immediately when input value changes): <strong>{value}</strong>{" "}
                </p>

                <p className="text-center" style={{ color: "green" }}>
                    Debounced input value (Will update 1s after any change is made): <strong>{debounced}</strong>{" "}
                </p>
            </div>
        );
    };

    return <ExampleApp />;
};
