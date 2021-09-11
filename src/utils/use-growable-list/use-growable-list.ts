import {
    GrowableListLoadMoreTrigger,
    GrowableListOnLoadFailed,
    GrowableListOnLoadMore,
    UseGrowableList,
    UseGrowableListState
} from "../../../types";
import { useState } from "react";

export const useGrowableList: UseGrowableList = (): UseGrowableListState => {
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [triggered, setTriggered] = useState(false);
    const [items, setItems] = useState([]);
    const [resetPage, setResetPage] = useState(false);

    const loadMore: GrowableListLoadMoreTrigger = (resetPage?: boolean): void => {
        setResetPage(resetPage);
        setPage(resetPage ? 1 : page + 1);
        setTriggered(!triggered);
    };

    const onLoadMoreSuccess: GrowableListOnLoadMore = (newItems, totalItems): void => {
        if (resetPage) {
            setItems([...newItems]);
        } else setItems([...items, ...newItems]);
        setTotal(totalItems);
    };

    const onLoadMoreFailed: GrowableListOnLoadFailed = (): void => {
        setPage(page - 1);
    };

    return [items, page, total, triggered, loadMore, onLoadMoreSuccess, onLoadMoreFailed];
};
