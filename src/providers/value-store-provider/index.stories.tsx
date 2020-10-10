import React, { useContext } from "react";
import { ValueStoreProvider } from "./value-store-provider";
import { ValueStoreProviderContext } from "./value-store-provider-context";

export default {
    title: "ValueStoreProvider",
    component: ValueStoreProvider
};

export const normal = (): any => {
    const ExampleApp = (): any => {
        const { get, set, del, clear } = useContext(ValueStoreProviderContext);

        return (
            <div>
                <p className="text-center">Change the values in the fields and observe which values changes in your localStorage tab</p>

                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <label>
                                    <small>
                                        <i>Your favourite web framework</i>
                                    </small>
                                </label>

                                <input
                                    className="form-control"
                                    value={get("favourite-web-framework") || ""}
                                    onChange={e => set("favourite-web-framework", e.target.value, true)}
                                />

                                <button className="btn btn-link btn-sm" onClick={(): void => del("favourite-web-framework")}>
                                    Remove key for this input
                                </button>
                            </div>

                            <div className="col-6">
                                <label>
                                    <small>
                                        <i>Your favourite mobile framework</i>
                                    </small>
                                </label>

                                <input
                                    className="form-control"
                                    value={get("favourite-mobile-framework") || ""}
                                    onChange={e => set("favourite-mobile-framework", e.target.value, true)}
                                />

                                <button className="btn btn-link btn-sm" onClick={(): void => del("favourite-mobile-framework")}>
                                    Remove key for this input
                                </button>
                            </div>
                        </div>

                        <br />

                        <label>
                            <small>
                                <i>
                                    Your favourite desktop framework (<strong>Not persisted in local storage</strong>)
                                </i>
                            </small>
                        </label>

                        <input
                            className="form-control"
                            value={get("favourite-desktop-framework") || ""}
                            onChange={e => set("favourite-desktop-framework", e.target.value)}
                        />

                        <br />

                        <input
                            className="form-control"
                            value={get("test-key") || ""}
                            placeholder="Test input"
                            onChange={e => set("test-key", e.target.value)}
                        />

                        <br />

                        <p className="text-center">Now refresh the page to see the data persistence</p>
                    </div>
                </div>

                <br />
                <br />

                <div className="text-center">
                    <button className="btn btn-danger" onClick={clear}>
                        Clear all values from store
                    </button>
                </div>
            </div>
        );
    };

    return (
        <ValueStoreProvider initialKeys={["test-key"]}>
            <ExampleApp />
        </ValueStoreProvider>
    );
};
