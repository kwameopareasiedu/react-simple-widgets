import { useState } from "react";
import { UseLoadMore as Props } from "./types";

/**
 * A hook that provides methods and state variables to implement a load-more-items feature for a
 * list of items that cannot be displayed in a ListView
 */
export const useLoadMore = (): Props => {
    const [page, setPage] = useState(1);
    const [items, setItems] = useState([]);
    const [endOfItems, setEndOfItems] = useState(false);
    const [loadTriggered, setLoadTriggered] = useState(1);
    const [resetBeforeLoad, setResetBeforeLoad] = useState(false);

    const loadMore = (resetBeforeLoad?: boolean): void => {
        setResetBeforeLoad(!!resetBeforeLoad);
        setPage(resetBeforeLoad ? 1 : page + 1);
        setLoadTriggered(loadTriggered + 1);
    };

    const onLoadMoreSuccess = (newItems: Array<any>, total: number): void => {
        if (resetBeforeLoad) {
            setEndOfItems(newItems.length === total);
            setItems(newItems);
        } else {
            setEndOfItems(items.length + newItems.length === total);
            setItems([...items, ...newItems]);
        }
    };

    const onLoadMoreFailed = (): void => setPage(page - 1);

    return { page, items, endOfItems, loadTriggered, loadMore, onLoadMoreSuccess, onLoadMoreFailed };
};
