import { AllHTMLAttributes } from "react";

/* Breadcrumbs */
export interface IBreadcrumbs extends AllHTMLAttributes<HTMLDivElement> {}

/* UseLoadMore */
export interface IUseLoadMore {
    page: number;
    items: Array<any>;
    canLoadMore: boolean;
    shouldLoadMore: number;
    onLoadMore: (resetBeforeLoad?: boolean) => void;
    onLoadMoreSuccess: (newItems: Array<any>, total: number) => void;
    onLoadMoreFailed: () => void;
}

/* PageActions */
export interface IPageActions extends AllHTMLAttributes<HTMLDivElement> {}

/* UseTimeout */
export interface IUseCountdown {
    running: boolean;
    countdown: number;
    resetCountdown: () => void;
}

/* UseWindowBreakpoints */
export interface IUseWindowBreakpoints {
    width: number;
    xs: boolean;
    sm: boolean;
    md: boolean;
    lg: boolean;
    xl: boolean;
}
