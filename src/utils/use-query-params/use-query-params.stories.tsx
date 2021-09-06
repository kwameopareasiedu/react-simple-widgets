import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useQueryParams } from "./use-query-params";

export default { title: "UseQueryParams" };

export const Default = (): any => {
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
