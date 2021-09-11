import React, { useEffect, useState } from "react";
import { GrowableItemsContainer } from "../../widgets/growable-items-container/growable-items-container";
import { TableView } from "../../widgets/table-view/table-view";
import { PopupMenu } from "../../widgets/popup-menu/popup-menu";
import { useGrowableList } from "./use-growable-list";
import advancedFormat from "dayjs/plugin/advancedFormat";
import djs from "dayjs";

djs.extend(advancedFormat);

export default { title: "UseGrowableList" };

const collection = [
    { name: "Item-01", created_at: "2019-01-01", nested: { value: "Item_01 nested property current value" } },
    { name: "Item-02", created_at: "2019-01-02", nested: { value: "Item 02 nested property current value" } },
    { name: "Item-03", created_at: "2019-01-03", nested: { value: "Item 03 nested property current value" } },
    { name: "Item-04", created_at: "2019-01-04", nested: { value: "Item 04 nested property current value" } },
    { name: "Item-05", created_at: "2019-01-05", nested: { value: "Item 05 nested property current value" } },
    null,
    { name: "Item-06", created_at: "2019-01-06", nested: { value: "Item 06 nested property current value" } },
    { name: "Item-07", created_at: "2019-01-07", nested: { value: "Item_07 nested property current value" } },
    { name: "Item-08", created_at: "2019-01-08", nested: { value: "Item 08 nested property current value" } },
    { name: "Item-09", created_at: "2019-01-09", nested: { value: "Item 09 nested property current value" } },
    { name: "Item-10", created_at: "2019-01-10", nested: { value: "Item 10 nested property current value" } },
    { name: "Item-11", created_at: "2019-01-11", nested: { value: "Item 11 nested property current value" } },
    { name: "Item-12", created_at: "2019-01-12", nested: { value: "Item 12 nested property current value" } },
    { name: "Item-13", created_at: "2019-01-13", nested: { value: "Item 12 nested property current value" } },
    { name: "Item-14", created_at: "2019-01-14", nested: { value: "Item 14 nested property current value" } },
    { name: "Item-15", created_at: "2019-01-15", nested: { value: "Item 15 nested property current value" } },
    { name: "Item-16", created_at: "2019-01-16", nested: { value: "Item 16 nested property current value" } },
    { name: "Item-17", created_at: "2019-01-17", nested: { value: "Item 17 nested property current value" } },
    { name: "Item-18", created_at: "2019-01-18", nested: { value: "Item 18 nested property current value" } },
    { name: "Item-19", created_at: "2019-01-19", nested: { value: "Item 19 nested property current value" } },
    { name: "Item-20", created_at: "2019-01-20", nested: { value: "Item 20 nested property current value" } }
];

export const Default = (): any => {
    const [items, page, total, triggered, loadMore, onLoadSuccess, onLoadFailed] = useGrowableList();
    const [fetching, setFetching] = useState(true);
    const [error, setError] = useState(false);

    const fetchItems = (): void => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                const newItems = collection.slice(3 * (page - 1), 3 * page);
                onLoadSuccess(newItems, collection.length);
                setError(false);
            } else {
                setError(true);
                onLoadFailed();
            }

            setFetching(false);
        }, 1500);

        setFetching(true);
    };

    useEffect(fetchItems, [triggered]);

    return (
        <GrowableItemsContainer
            error={error}
            busy={fetching}
            total={total}
            itemCount={items.length}
            onLoadMore={() => loadMore()}>
            <TableView
                items={items}
                props={[
                    ["Name", "name", "name"],
                    ["Created at", item => djs(item.created_at).format("Do MMMM, YYYY"), "date"],
                    ["Unknown", "status", "status"],
                    ["Nested", "nested.value", "nested"],
                    ["Unknown nested", "nested.other_value", "other"]
                ]}
                optionsBuilder={() => (
                    <PopupMenu>
                        <button className="btn btn-primary btn-sm">Options</button>

                        <div className="card">
                            <ul className="list-group list-group-flush">
                                <button className="list-group-item">Option 1</button>
                                <button className="list-group-item">Option 2</button>
                            </ul>
                        </div>
                    </PopupMenu>
                )}
            />

            <div className="text-center">
                <button type="button" className="btn btn-danger btn-sm" onClick={() => loadMore(true)}>
                    Reset list
                </button>
            </div>
        </GrowableItemsContainer>
    );
};
