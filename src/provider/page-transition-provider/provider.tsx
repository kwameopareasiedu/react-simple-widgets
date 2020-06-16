import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { IPageTransitionConfig, IPageTransitionOptions, IPageTransitionProvider } from "../../../types";
import { PageTransitionProviderContext } from "./context";

/**
 * The PageTransitionProvider allows you to build custom transitions between pages of your
 * application. PageTransitionProvider requires utilities from react-router-dom and requires
 * a [Router](https://reacttraining.com/react-router/web/api/Router) to be present in its
 * ancestor tree.
 */
export const PageTransitionProvider = ({ children }: IPageTransitionProvider): any => {
    const history = useHistory();
    const { pathname, search, hash } = useLocation();
    const [config, setConfig] = useState<IPageTransitionConfig>(null);
    const [pageTransitionViewCount, setPageTransitionViewCount] = useState(0);

    const beginRedirect = (to: string, options?: IPageTransitionOptions): void => {
        if (!to || pathname + search + hash === to) return;

        // If there is no PageTransitionView in scope, redirect from here...
        if (pageTransitionViewCount === 0) {
            if (options && options.replaceUrl) history.replace(to);
            else history.push(to);
        } else setConfig({ to, options });
        // ... else set the config to notify it to begin the redirect
    };

    // Called by a PageTransitionView when done with its transition animation sequence
    const endRedirect = () => {
        setConfig(null);
        if (config.options && config.options.replaceUrl) history.replace(config.to);
        else history.push(config.to);
    };

    const incrementPageTransitionViewCount = (): void => setPageTransitionViewCount(pageTransitionViewCount + 1);

    const decrementPageTransitionViewCount = (): void => setPageTransitionViewCount(pageTransitionViewCount - 1);

    return (
        <PageTransitionProviderContext.Provider
            value={{
                __internal_config: config,
                __internal_incrementPageTransitionViewCount: incrementPageTransitionViewCount,
                __internal_decrementPageTransitionViewCount: decrementPageTransitionViewCount,
                __internal_endRedirect: endRedirect,
                redirect: beginRedirect
            }}>
            {children}
        </PageTransitionProviderContext.Provider>
    );
};
