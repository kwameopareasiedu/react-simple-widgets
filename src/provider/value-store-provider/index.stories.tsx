import React, { useContext } from "react";
import { ValueStoreProvider } from "./provider";
import { ValueStoreProviderContext } from "./context";

export default {
    title: "ValueStoreProvider",
    component: ValueStoreProvider
};

export const usage = (): any => {
    const ExampleApp = (): any => {
        const { get, put, del } = useContext(ValueStoreProviderContext);

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
                                    onChange={e => put("favourite-web-framework", e.target.value, true)}
                                />
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
                                    onChange={e => put("favourite-mobile-framework", e.target.value, true)}
                                />
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
                            value={get("favourite-desktop-framework")}
                            onChange={e => put("favourite-desktop-framework", e.target.value)}
                        />

                        <br />

                        <p className="text-center">Now refresh the page to see the data persistence</p>
                    </div>
                </div>

                <br />
                <br />

                <div className="text-center">
                    <button className="btn btn-danger" onClick={(): void => del("favourite-web-framework", "favourite-mobile-framework")}>
                        Clear all values from store
                    </button>
                </div>
            </div>
        );
    };

    return (
        <ValueStoreProvider initialLocalStorageKeys={["favourite-web-framework", "favourite-mobile-framework"]}>
            <ExampleApp />
        </ValueStoreProvider>
    );
};
