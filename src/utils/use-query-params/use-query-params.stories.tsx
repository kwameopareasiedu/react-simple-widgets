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
                <p className="mb-4">Open the console to view the query parameters</p>

                <div className="d-flex align-items-center mb-4">
                    <button className="btn btn-primary btn-sm me-2" onClick={() => qp.set("foo", "bar")}>
                        Add query parameter
                    </button>

                    <button className="btn btn-danger btn-sm me-2" onClick={() => qp.unset("foo")}>
                        Remove query parameter
                    </button>
                </div>
            </div>
        );
    };

    return (
        <BrowserRouter>
            <ExampleApp />
        </BrowserRouter>
    );
};
