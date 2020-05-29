import "./desktop-header.scss";
import React from "react";
import { IListViewSort, ListViewSortOrder } from "../../../types";
import SortDownIcon from "../../assets/sort-down.svg";
import SortNoneIcon from "../../assets/sort-none.svg";
import SortUpIcon from "../../assets/sort-up.svg";

interface IListViewDesktopHeader {
    sort: IListViewSort;
    overflowing: boolean;
    optionsEnabled: boolean;
    props: Array<[string, string | ((item: any, itemIndex: number) => any)]>;
}

export const ListViewDesktopHeader = ({ props, sort, overflowing, optionsEnabled }: IListViewDesktopHeader): any => {
    const className = (): string => {
        const classes = ["react-simple-widget", "list-view-desktop-header"];
        if (optionsEnabled) classes.push("options-enabled");
        if (overflowing) classes.push("overflowing");
        return classes.join(" ");
    };

    return (
        <header className={className()}>
            {props.map(([label], i) => {
                const sortingEnabled = !!sort;

                return (
                    <ListViewDesktopHeaderItem
                        key={label + i}
                        label={label}
                        sortEnabled={sortingEnabled}
                        isActiveSortLabel={sortingEnabled && sort.column === label}
                        sortOrder={sortingEnabled && sort.column === label ? sort.order : ListViewSortOrder.NONE}
                        onSort={sortingEnabled ? (order: ListViewSortOrder) => sort.onSort(label, order) : null}
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
