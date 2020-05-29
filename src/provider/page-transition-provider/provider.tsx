import React from "react";
import { useHistory } from "react-router-dom";
import { IPageTransitionOptions, IPageTransitionProvider } from "../../../types";
import { PageTransitionProviderContext } from "./context";

/**
 * The PageTransitionProvider allows you to build custom transitions between pages of your
 * application. PageTransitionProvider requires utilities from react-router-dom and requires
 * a [Router](https://reacttraining.com/react-router/web/api/Router) to be present in its
 * ancestor tree.
 */
export const PageTransitionProvider = ({ children }: IPageTransitionProvider): any => {
    const history = useHistory();

    const redirect = (to: string, options?: IPageTransitionOptions): void => {
        if (options && options.replaceUrl) history.replace(to);
        else history.push(to);
    };

    return <PageTransitionProviderContext.Provider value={{ redirect }}>{children}</PageTransitionProviderContext.Provider>;
};
