export interface UseLoadMore {
    page: number;
    items: Array<any>;
    endOfItems: boolean;
    loadTriggered: number;
    loadMore: (resetBeforeLoad?: boolean) => void;
    onLoadMoreSuccess: (newItems: Array<any>, total: number) => void;
    onLoadMoreFailed: () => void;
}
