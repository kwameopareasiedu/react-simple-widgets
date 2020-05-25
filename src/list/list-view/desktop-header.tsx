import "./desktop-header.scss";
import React from "react";
import { ListViewSortOrder } from "../../../types";
import SortUpIcon from "../../assets/sort-up.svg";
import SortDownIcon from "../../assets/sort-down.svg";
import SortNoneIcon from "../../assets/sort-none.svg";

interface IListViewDesktopHeader {
    overflowing: boolean;
    showOptions: boolean;
    sort: [string, ListViewSortOrder];
    props: Array<[string, string | ((item: any, itemIndex: number) => any)]>;
    onSort: (prop: string, order: ListViewSortOrder) => void;
}

export const ListViewDesktopHeader = ({ props, sort, overflowing, showOptions, onSort }: IListViewDesktopHeader): any => {
    const className = (): string => {
        const classes = ["react-simple-widget", "list-view-desktop-header"];
        if (showOptions) classes.push("with-actions");
        if (overflowing) classes.push("with-overflow");
        return classes.join(" ");
    };

    return (
        <header className={className()}>
            {props.map(([label], i) => {
                const [sortedColumn, sortedOrder] = sort || [];
                const isActiveSortLabel = sortedColumn === label;
                const sortOrder = !!onSort && isActiveSortLabel ? sortedOrder : ListViewSortOrder.NONE;
                const onSortLabel = (order: ListViewSortOrder) => onSort(label, order);

                return (
                    <ListViewDesktopHeaderItem
                        key={label + i}
                        label={label}
                        sortEnabled={!!onSort}
                        sortOrder={sortOrder}
                        isActiveSortLabel={isActiveSortLabel}
                        onSort={onSortLabel}
                    />
                );
            })}
        </header>
    );
};

interface IListViewDesktopHeaderItem {
    label: string;
    sortEnabled: boolean;
    isActiveSortLabel: boolean;
    sortOrder: ListViewSortOrder;
    onSort: (order: ListViewSortOrder) => void;
}

const ListViewDesktopHeaderItem = ({ label, sortEnabled, sortOrder, isActiveSortLabel, onSort }: IListViewDesktopHeaderItem): any => {
    const interceptOnSort = () => {
        if (isActiveSortLabel) {
            if (sortOrder === ListViewSortOrder.NONE) onSort(ListViewSortOrder.ASC);
            if (sortOrder === ListViewSortOrder.ASC) onSort(ListViewSortOrder.DESC);
            if (sortOrder === ListViewSortOrder.DESC) onSort(ListViewSortOrder.NONE);
        } else onSort(ListViewSortOrder.ASC);
    };

    return (
        <span className={`react-simple-widget list-view-desktop-header-item ${sortEnabled ? "sort-enabled" : ""}`} onClick={interceptOnSort}>
            <span>{label}</span>
            {sortEnabled && sortOrder === ListViewSortOrder.ASC && <img src={SortUpIcon} alt="Sort up" />}
            {sortEnabled && sortOrder === ListViewSortOrder.DESC && <img src={SortDownIcon} alt="Sort down" />}
            {sortEnabled && sortOrder === ListViewSortOrder.NONE && <img src={SortNoneIcon} alt="Sort none" />}
        </span>
    );
};
