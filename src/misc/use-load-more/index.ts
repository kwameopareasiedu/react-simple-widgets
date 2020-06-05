import { useState } from "react";
import { IUseLoadMore } from "../../../types";

/**
 * A hook that provides methods and state variables to implement a load-more-items feature for a
 * list of items that cannot be displayed in a ListView
 */
export const useLoadMore = (): IUseLoadMore => {
    const [page, setPage] = useState(1);
    const [items, setItems] = useState([]);
    const [canLoadMore, setCanLoadMore] = useState(true);
    const [shouldLoadMore, setShouldLoadMore] = useState(1);
    const [resetBeforeLoad, setResetBeforeLoad] = useState(false);

    const onLoadMore = (resetBeforeLoad?: boolean): void => {
        setResetBeforeLoad(!!resetBeforeLoad);
        setPage(resetBeforeLoad ? 1 : page + 1);
        setShouldLoadMore(shouldLoadMore + 1);
    };

    const onLoadMoreSuccess = (newItems: Array<any>, total: number): void => {
        if (resetBeforeLoad) {
            setCanLoadMore(newItems.length < total);
            setItems(newItems);
        } else {
            setCanLoadMore(items.length + newItems.length < total);
            setItems([...items, ...newItems]);
        }
    };

    const onLoadMoreFailed = (): void => setPage(page - 1);

    return { page, items, canLoadMore, shouldLoadMore, onLoadMore, onLoadMoreSuccess, onLoadMoreFailed };
};
