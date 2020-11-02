import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { TransitionConfig, TransitionOptions, TransitionProvider as Props } from "./types";
import { TransitionProviderContext } from "./transition-provider-context";

// TransitionProvider gives a nice scale-out fade-out transition when transitioning between pages
// using the react-router-dom
export const TransitionProvider = ({ children }: Props): any => {
    const history = useHistory();
    const { pathname, search, hash } = useLocation();
    const [config, setConfig] = useState<TransitionConfig>(null);
    const [pageTransitionViewCount, setPageTransitionViewCount] = useState(0);

    const beginRedirect = (to: string, options?: TransitionOptions): void => {
        if (!to || pathname + search + hash === to) return;

        // If there is no PageTransitionView in scope, redirect from here...
        if (pageTransitionViewCount <= 0) {
            setPageTransitionViewCount(0);
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

    const incrementViewCount = (): void => setPageTransitionViewCount(count => count + 1);

    const decrementViewCount = (): void => setPageTransitionViewCount(count => Math.max(0, count - 1));

    return (
        <TransitionProviderContext.Provider
            value={{
                __config__: config,
                __incrementViewCount__: incrementViewCount,
                __decrementViewCount__: decrementViewCount,
                __endRedirect__: endRedirect,
                redirect: beginRedirect
            }}>
            {children}
        </TransitionProviderContext.Provider>
    );
};
