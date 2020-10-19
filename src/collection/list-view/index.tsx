import "./index.scss";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { DialogProviderContext } from "../../providers/dialog-provider";
import { ListViewItemOptionsDialog } from "./options-dialog";
import { ListView as Props, ListViewOption } from "./types";
import Loader from "../../assets/loading.svg";
import MoreIcon from "../../assets/more.svg";
import { ListViewFooter } from "./footer";
import { ListViewSorter } from "./sorter";

export const ListView = ({
    items,
    busy,
    props,
    condensed,
    options,
    sort,
    breakpoint = 768,
    emptyMessage = "No items to display",
    pagination,
    keyFn
}: Props): any => {
    const EMPTY_STRING = "---";

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const { showDialog } = useContext(DialogProviderContext);

    useEffect(() => {
        const l = (): void => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", l);
        return () => window.removeEventListener("resize", l);
    }, []);

    const resolveItemValue = (itemIndex: number, propIndex: number): any => {
        const item = items[itemIndex];
        const resolver = props[propIndex][1];

        if (!item) return EMPTY_STRING;

        // If the resolver is a function, call it with the item and itemIndex
        if (typeof resolver === "function") return resolver(item, itemIndex) || EMPTY_STRING;

        // If the resolver is a string and not a dot notation, use the property from the object
        if (typeof resolver === "string" && resolver.indexOf(".") === -1) return item[resolver] || EMPTY_STRING;

        // If the resolver is a string with dot notation, search through the property tree of the object
        const propertyKeys = resolver.split(".");

        let iterator = item;

        for (const propertyKey of propertyKeys) {
            // If an intermediate key is undefined, return with empty message
            if (!iterator[propertyKey]) return EMPTY_STRING;
            // Assign the target property to the iterator to search through during the next iteration
            iterator = iterator[propertyKey];
        }

        return iterator || EMPTY_STRING;
    };

    const showItemDialog = (item: any, itemIndex: number, optionsList: Array<ListViewOption>): void => {
        if (optionsList.length > 0)
            showDialog(helper => <ListViewItemOptionsDialog helper={helper} item={item} index={itemIndex} options={optionsList} />);
    };

    const renderEmptyMessageItem = (): any => (
        <tr>
            <td className="empty-message-item" colSpan={100}>
                <p>{emptyMessage}</p>
            </td>
        </tr>
    );

    const renderLoaderItem = (): any => (
        <tr>
            <td className="loader-item" colSpan={100}>
                <img src={Loader} alt="Loader" />
            </td>
        </tr>
    );

    const renderDesktopItem = (item: any, itemIndex: number): any => {
        const optionsList = options && options.builder ? options.builder(item, itemIndex) || [] : [];

        return (
            <tr className="desktop-item" key={keyFn(item, itemIndex)}>
                {props.map(([propLabel], propIndex) => (
                    <td key={keyFn(item, itemIndex) + propLabel}>{resolveItemValue(itemIndex, propIndex)}</td>
                ))}

                {options && (
                    <td>
                        {options.busy && options.busy(item, itemIndex) && <Loader />}
                        {(!options.busy || !options.busy(item, itemIndex)) && (
                            <span
                                className={`item-options-trigger ${!optionsList.length ? "none" : ""}`}
                                onClick={() => showItemDialog(item, itemIndex, optionsList)}>
                                <img src={MoreIcon} alt="More" />
                            </span>
                        )}
                    </td>
                )}
            </tr>
        );
    };

    const renderMobileItem = (item: any, itemIndex: number): any => {
        const optionsList = options && options.builder ? options.builder(item, itemIndex) || [] : [];

        return (
            <tr className="mobile-item" key={keyFn(item, itemIndex)}>
                <td colSpan={100}>
                    <div className="content">
                        <div className="data">
                            {props.map(([propLabel], propIndex) => (
                                <Fragment key={keyFn(item, itemIndex) + propLabel}>
                                    <span className="data-key">{propLabel}</span>
                                    <span className="data-value">{resolveItemValue(itemIndex, propIndex)}</span>
                                </Fragment>
                            ))}
                        </div>

                        {options && (
                            <div className="options">
                                {options.busy && options.busy(item, itemIndex) && <Loader />}
                                {(!options.busy || !options.busy(item, itemIndex)) && (
                                    <span
                                        className={`item-options-trigger ${!optionsList.length ? "none" : ""}`}
                                        onClick={() => showItemDialog(item, itemIndex, optionsList)}>
                                        <img src={MoreIcon} alt="More" />
                                    </span>
                                )}
                            </div>
                        )}
                    </div>
                </td>
            </tr>
        );
    };

    return (
        <div className="react-simple-widget list-view">
            {sort && <ListViewSorter columns={sort.columns} columnIndex={sort.columnIndex} order={sort.order} onSort={sort.onSort} />}

            <table className={`table table-striped ${condensed ? " table-sm" : ""}`}>
                {windowWidth > breakpoint && (
                    <thead>
                        <tr>
                            {props.map(([propLabel]) => (
                                <th key={propLabel}>{propLabel}</th>
                            ))}

                            {options && <th />}
                        </tr>
                    </thead>
                )}

                <tbody>
                    {busy && renderLoaderItem()}
                    {items.map(windowWidth > breakpoint ? renderDesktopItem : renderMobileItem)}
                    {items.length === 0 ? renderEmptyMessageItem() : null}
                    {busy && renderLoaderItem()}
                </tbody>
            </table>

            {pagination && <ListViewFooter {...pagination} />}
        </div>
    );
};
