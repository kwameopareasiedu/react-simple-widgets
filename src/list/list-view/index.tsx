import "./index.scss";
import React, { useEffect, useRef, useState } from "react";
import { ListViewDesktopHeader } from "./desktop-header";
import { ListViewMobileHeader } from "./mobile-header";
import { ListViewDesktopItem } from "./desktop-item";
import { ListViewMobileItem } from "./mobile-item";
import { IListView } from "../../../types";
import { ListViewFooter } from "./footer";

/**
 * ListView is a widget which displays a list of items with pagination and sorting features. For each item, it can also
 * display a dialog popup of actions on that item. Since it uses dialogs, it needs a DialogProvider as an ancestor widget
 */
export const ListView = ({ busy, sort, items, options, pagination, props, breakpoint = 768, onClick, skipIf }: IListView): any => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [overflowing, setOverflowing] = useState(false);
    const itemsRef = useRef();

    useEffect(() => {
        const l = (): void => {
            updateOverflowStatus();
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", l);
        return () => window.removeEventListener("resize", l);
    }, []);

    useEffect(() => {
        if (pagination && pagination.page) scrollNearestScrollableElementToTop();
        updateOverflowStatus();
    }, [items]);

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

    const updateOverflowStatus = (): void => {
        const sectionDOMElement: Element = itemsRef.current;
        // Check if the items section is overflowing and apply the appropriate overflow class to
        // the header to keep it aligned with the items section which would now have a scrollbar
        if (sectionDOMElement) setOverflowing(sectionDOMElement.scrollHeight > sectionDOMElement.clientHeight);
    };

    const scrollNearestScrollableElementToTop = (): void => {
        const sectionDOMElement: Element = itemsRef.current;

        if (sectionDOMElement) {
            if (overflowing) {
                sectionDOMElement.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                return;
            }

            let el = sectionDOMElement;

            while (true) {
                if (!el.parentElement) break;
                else if (el.parentElement.scrollHeight > el.parentElement.clientHeight) {
                    el.parentElement.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    break;
                } else el = el.parentElement;
            }
        }
    };

    return (
        <div className="react-simple-widget list-view">
            {windowWidth < breakpoint && <ListViewMobileHeader props={props} sort={sort} />}
            {windowWidth >= breakpoint && <ListViewDesktopHeader props={props} sort={sort} overflowing={overflowing} optionsEnabled={!!options} />}

            <div className={busy ? "busy-indicator busy" : "busy-indicator"} />

            {items.length === 0 && <p className="no-items mb-0 text-center">No items to display</p>}

            <section ref={itemsRef} className="items">
                {items
                    .filter(item => (!!skipIf ? !skipIf(item) : true))
                    .map((item, i) => {
                        const itemProps = { key: i, item, index: i, options, props, propValueEvaluator: itemPropValue, onClick };
                        if (windowWidth < breakpoint) return <ListViewMobileItem {...itemProps} />;
                        else return <ListViewDesktopItem {...itemProps} />;
                    })}
            </section>

            <div className={busy ? "busy-indicator busy" : "busy-indicator"} />

            {pagination && <ListViewFooter {...pagination} />}
        </div>
    );
};
