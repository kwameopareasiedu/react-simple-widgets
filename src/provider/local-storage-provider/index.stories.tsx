import React, { useContext } from "react";
import { LocalStorageProvider } from "./provider";
import { LocalStorageProviderContext } from "./context";

export default {
    title: "LocalStorageProvider",
    component: LocalStorageProvider
};

export const usage = (): any => {
    const ExampleApp = (): any => {
        const { store, put } = useContext(LocalStorageProviderContext);

        return (
            <div>
                <p>Change the values in the fields and observe the changes in your localStorage tab</p>

                <label>Your favourite web framework</label>
                <input
                    className="form-control"
                    value={store["favourite-web-framework"]}
                    onChange={e => put("favourite-web-framework", e.target.value)}
                />

                <label>Your favourite mobile framework</label>
                <input
                    className="form-control"
                    value={store["favourite-mobile-framework"]}
                    onChange={e => put("favourite-mobile-framework", e.target.value)}
                />

                <label>Your favourite desktop framework (Kept in memory and not stored in local storage)</label>
                <input
                    className="form-control"
                    value={store["favourite-desktop-framework"]}
                    onChange={e => put("favourite-desktop-framework", e.target.value, true)}
                />

                <br/>

                <p>Now refresh the page to see the data persistence</p>
            </div>
        );
    };

    return (
        <LocalStorageProvider initialKeys={["favourite-web-framework", "favourite-mobile-framework"]}>
            <ExampleApp />
        </LocalStorageProvider>
    );
};
