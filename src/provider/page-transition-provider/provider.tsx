import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { IPageTransitionOptions, IPageTransitionProvider, IPageTransitionProviderConfig } from "../../../types";
import { PageTransitionProviderContext } from "./context";

/**
 * The PageTransitionProvider allows you to build custom transitions between pages of your
 * application. PageTransitionProvider requires utilities from react-router-dom and requires
 * a [Router](https://reacttraining.com/react-router/web/api/Router) to be present in its
 * ancestor tree.
 *
 * The following steps are taken to perform a transition:
 * 1. A descendant widget calls `redirect` in the context. This is mapped to the `startRedirect`
 *    function in the provider.
 * 2. The provider updates the config with the parameters passed to `redirect`
 * 3. If any PageTransition exists, they will animate themselves out of view and call
 *    `__finishRedirect` in the context, which is mapped to `finishRedirect` in the provider
 * 4. The provider then triggers the actual page redirect.
 */
export const PageTransitionProvider = ({ children }: IPageTransitionProvider): any => {
    const history = useHistory();
    const [pageTransitionsInScope, setPageTransitionsInScope] = useState(0);
    const [config, setConfig] = useState<IPageTransitionProviderConfig>();

    useEffect(() => {
        if (config && pageTransitionsInScope == 0) finishRedirect();
    }, [config]);

    const startRedirect = (to: string, config?: IPageTransitionOptions): void => {
        const animate = config ? !config.dontAnimate : false;
        const replace = config ? config.replaceUrl : false;
        setConfig({ path: to, animate, replace });
    };

    const finishRedirect = (): void => {
        if (!config || !config.path) return;
        if (!config.replace) history.push(config.path);
        if (config.replace) history.replace(config.path);
        setConfig(null);
    };

    const incrementPageTransitionsInScope = () => setPageTransitionsInScope(num => num + 1);

    const decrementPageTransitionsInScope = () => setPageTransitionsInScope(num => num - 1);

    return (
        <PageTransitionProviderContext.Provider
            value={{
                __config: config,
                __incrementPageTransitionsInScope: incrementPageTransitionsInScope,
                __decrementPageTransitionsInScope: decrementPageTransitionsInScope,
                __finishRedirect: finishRedirect,
                redirect: startRedirect
            }}>
            {children}
        </PageTransitionProviderContext.Provider>
    );
};
