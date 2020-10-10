import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useQueryParams } from "./index";

export default { title: "UseQueryParams" };

export const usage = (): any => {
    const ExampleApp = (): any => {
        const qp = useQueryParams();

        useEffect(() => {
            console.log(qp);
        }, [qp]);

        return (
            <div>
                <p className="mb-0">Open the console to view the query parameters</p>
            </div>
        );
    };

    return (
        <BrowserRouter>
            <ExampleApp />
        </BrowserRouter>
    );
};
