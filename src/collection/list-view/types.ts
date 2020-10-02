import { Confirmation } from "../../widgets/confirm-dialog/types";

export interface ListViewOption {
    label: any;
    confirmation?: [Confirmation, any];
    onClick: (item: any, itemIndex?: number) => void;
}

export interface ListViewOptions {
    busy?: (item: any, itemIndex?: number) => boolean;
    builder: (item: any, itemIndex?: number) => Array<ListViewOption>;
}

export interface ListViewPagination {
    page: number;
    total: number;
    pageSize: number;
    onPageChange: (page: number) => void;
}

export interface ListView {
    busy?: boolean;
    items: Array<any>;
    condensed?: boolean;
    breakpoint?: number;
    options?: ListViewOptions;
    pagination?: ListViewPagination;
    props: Array<[string, string | ((item: any, itemIndex?: number) => any)]>;
    keyFn: (item: any, itemIndex?: number) => string;
}
