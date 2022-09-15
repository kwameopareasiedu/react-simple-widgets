import {
  InfiniteListLoadMoreTrigger,
  InfiniteListOnLoadFailed,
  InfiniteListOnLoadMore,
  UseInfiniteList,
  UseInfiniteListState
} from "../../../types";
import { useState } from "react";

export const useInfiniteList: UseInfiniteList = (): UseInfiniteListState => {
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const [items, setItems] = useState([]);
  const [resetPage, setResetPage] = useState(false);

  const loadMore: InfiniteListLoadMoreTrigger = (resetPage?: boolean): void => {
    setResetPage(resetPage);
    setPage(resetPage ? 1 : page + 1);
    setTriggered(!triggered);
  };

  const onLoadMoreSuccess: InfiniteListOnLoadMore = (
    newItems,
    totalCount
  ): void => {
    if (resetPage) {
      setItems([...newItems]);
    } else setItems([...items, ...newItems]);
    setTotal(totalCount);
  };

  const onLoadMoreFailed: InfiniteListOnLoadFailed = (): void => {
    setPage(page - 1);
  };

  return [
    items,
    page,
    total,
    triggered,
    loadMore,
    onLoadMoreSuccess,
    onLoadMoreFailed
  ];
};
