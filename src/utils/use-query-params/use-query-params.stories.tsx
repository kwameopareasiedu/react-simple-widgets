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
                <div className="alert alert-primary mb-4">
                    <p className="mb-0">
                        <span>
                            Because Storybook renders in an <code>iframe</code>, query parameters added will not be seen
                            in the browser&apos;s address bar.
                        </span>
                        <br />
                        <strong>Open the console to view the query parameters</strong>
                    </p>
                </div>

                <div className="d-flex align-items-center mb-4">
                    <button className="btn btn-primary btn-sm me-2" onClick={() => qp.set("foo", "bar")}>
                        Add query parameter &quot;foo&quot;=&quot;bar&quot;
                    </button>

                    <button className="btn btn-danger btn-sm me-2" onClick={() => qp.unset("foo")}>
                        Remove query parameter &quot;foo&quot;=&quot;bar&quot;
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
