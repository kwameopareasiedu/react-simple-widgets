/* TransitionProvider interfaces */
import { AnchorHTMLAttributes } from "react";

export interface TransitionOptions {
    dontAnimate?: boolean;
    replaceUrl?: boolean;
}

export interface TransitionConfig {
    to: string;
    options: TransitionOptions;
}

export interface TransitionProviderContext {
    __config__: TransitionConfig;
    __incrementViewCount__: () => void;
    __decrementViewCount__: () => void;
    __endRedirect__: () => void;
    redirect: (to: string, config?: TransitionOptions) => void;
}

export interface TransitionProvider {
    children: any;
}

export interface TransitionView {
    children: any;
}

export interface TransitionLink extends TransitionOptions, AnchorHTMLAttributes<HTMLAnchorElement> {
    to: string;
    children?: any;
}
