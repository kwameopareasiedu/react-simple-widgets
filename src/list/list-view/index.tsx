import "./index.scss";
import React, { useContext, useEffect, useRef, useState } from "react";
import { IDialogHelper, IListView, ListViewSortOrder } from "../../../types";
import SortNoneIcon from "../../assets/sort-none.svg";
import SortDownIcon from "../../assets/sort-down.svg";
import SortUpIcon from "../../assets/sort-up.svg";
import MoreIcon from "../../assets/more.svg";
import { DialogProviderContext } from "../../provider/dialog-provider";

/**
 * ListView is a widget which displays a list of items with pagination and sorting features. For each item, it can also
 * display a dialog popup of actions on that item. Since it uses dialogs, it needs a DialogProvider as an ancestor widget
 */
export const ListView = ({
    busy,
    page,
    total,
    pageSize,
    items,
    props,
    options,
    sort,
    onSort,
    onPageChange,
    onOptionsClick,
    skipIf
}: IListView): any => {
    const pages = Math.ceil(total / pageSize);
    const minPage = Math.max(1, page - 4);
    const maxPage = Math.min(page + 4, pages);
    const [maxHeightOverflow, setMaxHeightOverflow] = useState(false);
    const { showDialog } = useContext(DialogProviderContext);
    const sectionRef = useRef();

    useEffect(() => {
        const l = (): void => updateOverflowStatus();
        window.addEventListener("resize", l);
        return () => window.removeEventListener("resize", l);
    }, []);

    useEffect(() => updateOverflowStatus(), [items]);

    const updateOverflowStatus = (): void => {
        // Check if the items section is overflowing and apply the appropriate overflow class to
        // the header to keep it aligned with the items section which would now have a scrollbar
        const sectionDOMElement: Element = sectionRef.current;
        setMaxHeightOverflow(sectionDOMElement.scrollHeight > sectionDOMElement.clientHeight);
    };

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

    const showItemDialog = (item: any): void => {
        if (!!onOptionsClick) return onOptionsClick(item);
        showDialog(helper => <ListViewItemOptionsDialog helper={helper} item={item} options={options} />);
    };

    const headerClassName = (): string => {
        const classes = [];
        if (maxHeightOverflow) classes.push("items-overflow");
        if (!!options) classes.push("items-options");
        return classes.join(" ");
    };

    return (
        <div className="react-simple-widget list-view">
            <header className={headerClassName()}>
                {props.map(([label], i) => {
                    const [sortedLabel, sortedLabelOrder] = sort || [];
                    const isActiveSortLabel = sortedLabel === label;
                    const sortOrder = !!onSort && isActiveSortLabel ? sortedLabelOrder : ListViewSortOrder.NONE;
                    const onSortLabel = (order: ListViewSortOrder) => onSort(label, order);

                    return (
                        <ListViewHeaderItem
                            key={label + i}
                            label={label}
                            sortEnabled={!!onSort}
                            actionHeader={false}
                            sortOrder={sortOrder}
                            isActiveSortLabel={isActiveSortLabel}
                            onSort={onSortLabel}
                        />
                    );
                })}
            </header>

            <section ref={sectionRef} className={busy ? "items items-loading" : "items"}>
                {items
                    .filter(item => (!!skipIf ? !skipIf(item) : true))
                    .map((item, itemIndex) => {
                        return (
                            <div key={itemIndex} className="item">
                                {props.map((prop: any, propIndex: number) => (
                                    <span key={"item" + itemIndex + propIndex}>{itemPropValue(item, itemIndex, propIndex)}</span>
                                ))}

                                {!!options && (
                                    <span className="item-options" onClick={(): void => showItemDialog(item)}>
                                        <img src={MoreIcon} alt="More" />
                                    </span>
                                )}
                            </div>
                        );
                    })}
            </section>

            <section className="footer">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <p>
                            Showing {(page - 1) * pageSize + 1} - {Math.min(total, page * pageSize)} of {total} items
                        </p>
                    </div>

                    <div className="col-12 col-md-6">
                        <button type="button" className="btn btn-link btn-sm" disabled={page === 1} onClick={(): void => onPageChange(page - 1)}>
                            Prev
                        </button>

                        {Array.from(new Array(maxPage - minPage + 1)).map((_, i) => {
                            const isPrimary = i + minPage === page;
                            const onClick = (): void => onPageChange(minPage + i);
                            const className = isPrimary ? "btn btn-primary btn-sm" : "btn btn-link btn-sm";
                            const props: any = { key: i, type: "button", className, onClick };
                            return <button {...props}>{i + minPage}</button>;
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

interface IListViewHeaderItem {
    label: string;
    sortEnabled: boolean;
    actionHeader: boolean;
    isActiveSortLabel: boolean;
    sortOrder: ListViewSortOrder;
    onSort: (order: ListViewSortOrder) => void;
}

const ListViewHeaderItem = ({ label, sortEnabled, actionHeader, sortOrder, isActiveSortLabel, onSort }: IListViewHeaderItem): any => {
    const className = (): string => {
        const classes = ["react-simple-widget", "list-view-header-item"];
        if (sortEnabled) classes.push("list-view-header-item-sort-enabled");
        if (actionHeader) classes.push("list-view-header-item-action");
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

interface IListViewItemOptionsDialog {
    item: any;
    helper: IDialogHelper;
    options?: Array<[string, (item: any, optionIndex: number) => void]>;
}

const ListViewItemOptionsDialog = ({ helper, item, options }: IListViewItemOptionsDialog): any => {
    const interceptOnClick = (optionIndex: number, callback: Function): void => {
        callback(item, optionIndex);
        helper.dismiss();
    };

    return (
        <div className="react-simple-widget list-view-item-options-dialog card">
            <div className="card-body">
                <p className="text-center">Select an option</p>

                <div className="list-group list-group-flush">
                    {options.map(([label, callback], i) => (
                        <button
                            type="button"
                            key={label + i}
                            className="list-group-item list-group-item-action"
                            onClick={(): void => interceptOnClick(i, callback)}>
                            {label}
                        </button>
                    ))}
                </div>

                <button type="button" className="btn btn-link btn-sm btn-block" onClick={helper.dismiss}>
                    Close
                </button>
            </div>
        </div>
    );
};
