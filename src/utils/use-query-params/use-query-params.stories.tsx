import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useQueryParams } from "./use-query-params";

export default { title: "UseQueryParams" };

export const Default = (): any => {
  const ExampleApp = (): any => {
    const { qp, addQp, delQp } = useQueryParams();

    useEffect(() => {
      console.log([`foo1=${qp.foo1}`, `foo2=${qp.foo2}`]);
    }, [qp]);

    return (
      <div>
        <div className="alert alert-primary mb-4">
          <p className="mb-0">
            <span>
              Because Storybook renders in an <code>iframe</code>, query
              parameters added will not be seen in the browser&apos;s address
              bar.
            </span>
            <br />
            <strong>Open the console to view the query parameters</strong>
          </p>
        </div>

        <div className="d-flex align-items-center mb-4">
          <button
            className="btn btn-primary btn-sm me-2"
            onClick={() => addQp("foo1", "bar1")}>
            Add query parameter &quot;foo1&quot;=&quot;bar1&quot;
          </button>

          <button
            className="btn btn-danger btn-sm me-2"
            onClick={() => delQp("foo1")}>
            Remove query parameter &quot;foo1&quot;=&quot;bar1&quot;
          </button>
        </div>

        <div className="d-flex align-items-center mb-4">
          <button
            className="btn btn-primary btn-sm me-2"
            onClick={() => addQp("foo2", "bar2")}>
            Add query parameter &quot;foo2&quot;=&quot;bar2&quot;
          </button>

          <button
            className="btn btn-danger btn-sm me-2"
            onClick={() => delQp(["foo2"])}>
            Remove query parameter &quot;foo2&quot;=&quot;bar2&quot;
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
