import "./mobile-header.scss";
import React from "react";
import { IListViewSort, ListViewSortOrder } from "../../../types";

interface IListViewMobileHeader {
    sort?: IListViewSort;
    props: Array<[string, string | ((item: any, itemIndex: number) => any)]>;
}

export const ListViewMobileHeader = ({ props, sort }: IListViewMobileHeader): any => {
    if (!sort) return null;

    const { column: currentColumn, order: currentOrder, onSort } = sort;

    const interceptOnSort = (value: string): void => {
        if (value) {
            const [selectedColumn, selectedOrder] = value.split("-");
            // If the selected sort is the same as the current sort, do nothing
            if (selectedColumn === currentColumn && parseInt(selectedOrder) === currentOrder) return;
            else onSort(selectedColumn, parseInt(selectedOrder));
        } else onSort(null, ListViewSortOrder.NONE);
    };

    return (
        <header className="react-simple-widget list-view-mobile-header">
            <span>Sort by</span>

            <select
                className="form-control"
                value={currentOrder > ListViewSortOrder.NONE ? `${currentColumn}-${currentOrder}` : ""}
                onChange={e => interceptOnSort(e.target.value)}>
                <option value="">None</option>

                {props.reduce((items, [label]) => {
                    const ascOptionProps: any = { key: `${label}-1`, value: `${label}-1`, children: `${label} - ASC` };
                    const descOptionProps: any = { key: `${label}-2`, value: `${label}-2`, children: `${label} - DESC` };
                    return [...items, <option {...ascOptionProps} />, <option {...descOptionProps} />];
                }, [])}
            </select>
        </header>
    );
};
