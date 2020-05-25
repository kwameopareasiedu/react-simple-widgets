import "./index.scss";
import React, { useContext, useEffect, useRef, useState } from "react";
import { DialogProviderContext } from "../../provider/dialog-provider";
import { ListViewItemOptionsDialog } from "./options-dialog";
import { ListViewDesktopHeader } from "./desktop-header";
import { ListViewMobileHeader } from "./mobile-header";
import MoreIcon from "../../assets/more.svg";
import { IListView } from "../../../types";
import { ListViewFooter } from "./footer";

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
    breakpoint = 768,
    sort,
    onSort,
    onPageChange,
    onOptionsClick,
    skipIf
}: IListView): any => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [itemOverflow, setItemOverflow] = useState(false);
    const { showDialog } = useContext(DialogProviderContext);
    const itemsRef = useRef();

    useEffect(() => {
        const l = (): void => {
            updateDesktopItemsOverflowStatus();
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", l);
        return () => window.removeEventListener("resize", l);
    }, []);

    useEffect(() => updateDesktopItemsOverflowStatus(), [items]);

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

    const updateDesktopItemsOverflowStatus = (): void => {
        // Check if the items section is overflowing and apply the appropriate overflow class to
        // the header to keep it aligned with the items section which would now have a scrollbar
        const sectionDOMElement: Element = itemsRef.current;

        if (!sectionDOMElement) return;

        setItemOverflow(sectionDOMElement.scrollHeight > sectionDOMElement.clientHeight);
    };

    const showItemDialog = (item: any): void => {
        if (!!onOptionsClick) return onOptionsClick(item);
        showDialog(helper => <ListViewItemOptionsDialog helper={helper} item={item} options={options} />);
    };

    return (
        <div className="react-simple-widget list-view">
            {windowWidth < breakpoint ? (
                <React.Fragment>
                    <ListViewMobileHeader props={props} sort={sort} onSort={onSort} />
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <ListViewDesktopHeader
                        props={props}
                        sort={sort}
                        overflow={itemOverflow}
                        showOptions={!!options || !!onOptionsClick}
                        onSort={onSort}
                    />

                    <section ref={itemsRef} className={busy ? "desktop-items items-loading" : "desktop-items"}>
                        {items
                            .filter(item => (!!skipIf ? !skipIf(item) : true))
                            .map((item, itemIndex) => {
                                return (
                                    <div key={itemIndex} className="item">
                                        {props.map((prop: any, propIndex: number) => (
                                            <span key={"item" + itemIndex + propIndex}>{itemPropValue(item, itemIndex, propIndex)}</span>
                                        ))}

                                        {(!!options || !!onOptionsClick) && (
                                            <span className="item-options" onClick={(): void => showItemDialog(item)}>
                                                <img src={MoreIcon} alt="More" />
                                            </span>
                                        )}
                                    </div>
                                );
                            })}
                    </section>
                </React.Fragment>
            )}

            <ListViewFooter page={page} total={total} pageSize={pageSize} onPageChange={onPageChange} />
        </div>
    );
};
