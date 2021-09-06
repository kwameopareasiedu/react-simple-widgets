import React, { useContext } from "react";
import { LocalStorageProvider } from "./local-storage-provider";
import { LocalStorageProviderContext } from "./local-storage-provider-context";

export default {
    title: "LocalStorageProvider",
    component: LocalStorageProvider
};

export const Default = (): any => {
    const ExampleApp = (): any => {
        const { getItem, setItem, removeItems, clear } = useContext(LocalStorageProviderContext);

        return (
            <div>
                <p className="text-center">
                    Change the values in the fields and observe which values changes in your localStorage tab
                </p>

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
                                    value={getItem("favourite-web-framework") || ""}
                                    onChange={e => setItem("favourite-web-framework", e.target.value)}
                                />

                                <button
                                    className="btn btn-link btn-sm"
                                    onClick={(): void => removeItems("favourite-web-framework")}>
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
                                    value={getItem("favourite-mobile-framework") || ""}
                                    onChange={e => setItem("favourite-mobile-framework", e.target.value)}
                                />

                                <button
                                    className="btn btn-link btn-sm"
                                    onClick={(): void => removeItems("favourite-mobile-framework")}>
                                    Remove key for this input
                                </button>
                            </div>
                        </div>

                        <br />

                        <label>
                            <small>
                                <i>Your favourite desktop framework</i>
                            </small>
                        </label>

                        <input
                            className="form-control"
                            value={getItem("favourite-desktop-framework") || ""}
                            onChange={e => setItem("favourite-desktop-framework", e.target.value)}
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
        <LocalStorageProvider>
            <ExampleApp />
        </LocalStorageProvider>
    );
};
