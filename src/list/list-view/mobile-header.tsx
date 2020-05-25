import "./mobile-header.scss";
import React from "react";
import { ListViewSortOrder } from "../../../types";

interface IListViewMobileHeader {
    sort?: [string, ListViewSortOrder];
    props: Array<[string, string | ((item: any, itemIndex: number) => any)]>;
    onSort?: (prop: string, order: ListViewSortOrder) => void;
}

export const ListViewMobileHeader = ({ props, sort, onSort }: IListViewMobileHeader): any => {
    if (!onSort) return null;

    const interceptOnSort = (value: string): void => {
        if (value) {
            const [label, order] = value.split("-");
            // If the incoming sort config is the same as the current config, do nothing
            if (sort && label === sort[0] && parseInt(order) === sort[1]) return;
            onSort(label, parseInt(order));
        } else onSort(null, ListViewSortOrder.NONE);
    };

    return (
        <header className="react-simple-widget list-view-mobile-header">
            <span>Sort by</span>

            <select
                className="form-control"
                value={sort && sort[1] > ListViewSortOrder.NONE ? `${sort[0]}-${sort[1]}` : ""}
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
