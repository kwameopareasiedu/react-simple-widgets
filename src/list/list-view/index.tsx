import "./index.scss";
import React from "react";
import { IListView, ListViewSortOrder } from "../../../types";
import SortNoneIcon from "../../assets/sort-none.svg";
import SortDownIcon from "../../assets/sort-down.svg";
import SortUpIcon from "../../assets/sort-up.svg";

interface IListViewerHeaderItem {
    label: string;
    sortEnabled: boolean;
    isActiveSortLabel: boolean;
    sortOrder: ListViewSortOrder;
    onSort: (order: ListViewSortOrder) => void;
}

export const ListView = ({ items, page, pageSize, total, props, actions, sort, onSort, skipIf, onPageChange }: IListView): any => {
    const pages = Math.ceil(total / pageSize);
    const minPage = Math.max(1, page - 4);
    const maxPage = Math.min(page + 4, pages);

    const itemPropValue = (item: any, itemIndex: number, propIndex: number): any => {
        const propResolution = props[propIndex][1];

        // If the propResolution is a function, call it with the item and itemIndex
        if (typeof propResolution === "function") return propResolution(item, itemIndex) || "---";

        // If it is a string and not a dot notation, use the property from the object
        if (typeof propResolution === "string" && propResolution.indexOf(".") === -1) return item[propResolution] || "---";

        // If it is a string with dot notation, search through the property tree of the object
        const propertyValue = { value: item };
        const keys = propResolution.trim().split(".");

        // If the object is undefined, return with empty message
        if (!propertyValue.value) return "---";

        for (const key of keys) {
            // If an intermediate key is undefined, return with empty message
            if (!propertyValue.value[key]) return "---";
            propertyValue.value = propertyValue.value[key];
        }

        return propertyValue.value || "---";
    };

    return (
        <div className="react-simple-widget list-view">
            <header>
                {props.map(([label], i) => {
                    const [sortedLabel, sortedLabelOrder] = sort || [];
                    const isActiveSortLabel = sortedLabel === label;
                    const sortOrder = !!onSort && isActiveSortLabel ? sortedLabelOrder : ListViewSortOrder.NONE;
                    const onSortLabel = (order: ListViewSortOrder) => onSort(label, order);

                    return (
                        <ListViewerHeaderItem
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

            <section className="items">
                {items
                    .filter(item => (!!skipIf ? !skipIf(item) : true))
                    .map((item, itemIndex) => {
                        return (
                            <div className="item">
                                {props.map((prop: any, propIndex: number) => (
                                    <span key={"item" + itemIndex + propIndex}>{itemPropValue(item, itemIndex, propIndex)}</span>
                                ))}
                            </div>
                        );
                    })}
            </section>

            <section className="footer">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <p>Showing {(page - 1) * pageSize + 1} - {Math.min(total, page * pageSize)} of {total} items</p>
                    </div>

                    <div className="col-12 col-md-6">
                        <button type="button" className="btn btn-link btn-sm" disabled={page === 1} onClick={(): void => onPageChange(page - 1)}>
                            Prev
                        </button>

                        {Array.from(new Array(maxPage - minPage + 1)).map((_, i) => {
                            const onClick = (): void => onPageChange(minPage + i);

                            if (i + minPage === page) {
                                return (
                                    <button className="btn btn-primary btn-sm" onClick={onClick}>
                                        {i + minPage}
                                    </button>
                                );
                            }

                            return (
                                <button className="btn btn-link btn-sm" onClick={onClick}>
                                    {i + minPage}
                                </button>
                            );
                        })}

                        <button type="button" className="btn btn-link btn-sm" disabled={page === pages} onClick={(): void => onPageChange(page + 1)}>
                            Next
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

const ListViewerHeaderItem = ({ label, sortEnabled, sortOrder, isActiveSortLabel, onSort }: IListViewerHeaderItem): any => {
    const className = (): string => {
        const classes = ["react-simple-widget", "list-view-header-item"];
        if (sortEnabled) classes.push("list-view-header-item-sort-enabled");
        return classes.join(" ");
    };

    const interceptOnSort = () => {
        if (isActiveSortLabel) {
            if (sortOrder === ListViewSortOrder.NONE) onSort(ListViewSortOrder.ASC);
            if (sortOrder === ListViewSortOrder.ASC) onSort(ListViewSortOrder.DESC);
            if (sortOrder === ListViewSortOrder.DESC) onSort(ListViewSortOrder.NONE);
        } else onSort(ListViewSortOrder.ASC);
    };

    return (
        <span className={className()} onClick={interceptOnSort}>
            <span>{label}</span>
            {sortEnabled && sortOrder === ListViewSortOrder.ASC && <img src={SortUpIcon} alt="Sort up" />}
            {sortEnabled && sortOrder === ListViewSortOrder.DESC && <img src={SortDownIcon} alt="Sort down" />}
            {sortEnabled && sortOrder === ListViewSortOrder.NONE && <img src={SortNoneIcon} alt="Sort none" />}
        </span>
    );
};
