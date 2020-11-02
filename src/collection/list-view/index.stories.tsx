import moment from "moment";
import React, { useEffect, useState } from "react";
import { Confirmation } from "../../widgets/confirm-dialog/types";
import { DialogProvider } from "../../providers/dialog-provider";
import { ListView } from "./index";
import { ListViewSortOrder } from "./types";

const collection = [
    { name: "Item-01", created_at: "2019-01-01", nested: { value: "Item_01 nested property current value" } },
    { name: "Item-02", created_at: "2019-01-02", nested: { value: "Item 02 nested property current value" } },
    { name: "Item-03", created_at: "2019-01-03", nested: { value: "Item 03 nested property current value" } },
    { name: "Item-04", created_at: "2019-01-04", nested: { value: "Item 04 nested property current value" } },
    { name: "Item-05", created_at: "2019-01-05", nested: { value: "Item 05 nested property current value" } },
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
    { name: "Item-20", created_at: "2019-01-20", nested: { value: "Item 20 nested property current value" } },
    { name: "Item-21", created_at: "2019-01-01", nested: { value: "Item 21 nested property current value" } },
    { name: "Item-22", created_at: "2019-01-02", nested: { value: "Item 22 nested property current value" } },
    { name: "Item-23", created_at: "2019-01-03", nested: { value: "Item 23 nested property current value" } },
    { name: "Item-24", created_at: "2019-01-04", nested: { value: "Item 24 nested property current value" } },
    { name: "Item-25", created_at: "2019-01-05", nested: { value: "Item 25 nested property current value" } },
    { name: "Item-26", created_at: "2019-01-06", nested: { value: "Item 26 nested property current value" } },
    { name: "Item-27", created_at: "2019-01-07", nested: { value: "Item 27 nested property current value" } },
    { name: "Item-28", created_at: "2019-01-08", nested: { value: "Item 28 nested property current value" } },
    { name: "Item-29", created_at: "2019-01-09", nested: { value: "Item 29 nested property current value" } },
    { name: "Item-30", created_at: "2019-01-10", nested: { value: "Item 30 nested property current value" } },
    { name: "Item-31", created_at: "2019-01-11", nested: { value: "Item 31 nested property current value" } },
    { name: "Item-32", created_at: "2019-01-12", nested: { value: "Item 32 nested property current value" } },
    { name: "Item-33", created_at: "2019-01-13", nested: { value: "Item 33 nested property current value" } },
    { name: "Item-34", created_at: "2019-01-14", nested: { value: "Item 34 nested property current value" } },
    { name: "Item-35", created_at: "2019-01-15", nested: { value: "Item 35 nested property current value" } },
    { name: "Item-36", created_at: "2019-01-16", nested: { value: "Item 36 nested property current value" } },
    { name: "Item-37", created_at: "2019-01-17", nested: { value: "Item 37 nested property current value" } },
    { name: "Item-38", created_at: "2019-01-18", nested: { value: "Item 38 nested property current value" } },
    { name: "Item-39", created_at: "2019-01-19", nested: { value: "Item 39 nested property current value" } },
    { name: "Item-40", created_at: "2019-01-20", nested: { value: "Item 40 nested property current value" } }
];

export default {
    title: "ListView",
    component: ListView,
    decorators: [
        (storyFn: () => any) => <div style={{ padding: "30px" }}>{<DialogProvider>{storyFn()}</DialogProvider>}</div>
    ]
};

export const normal = (): any => {
    return (
        <ListView
            items={collection}
            props={[
                ["Name", "name"],
                ["Created at", item => moment(item.created_at).format("Do MMMM, YYYY")],
                ["Unknown", "status"],
                ["Nested", "nested.value"],
                ["Unknown nested", "nested.other_value"]
            ]}
            keyFn={item => item.name}
        />
    );
};

export const withNoItems = (): any => {
    return (
        <ListView
            items={[]}
            props={[
                ["Name", "name"],
                ["Created at", item => moment(item.created_at).format("Do MMMM, YYYY")],
                ["Unknown", "status"],
                ["Nested", "nested.value"],
                ["Unknown nested", "nested.other_value"]
            ]}
            keyFn={item => item.name}
            condensed
        />
    );
};

export const condensed = (): any => {
    return (
        <ListView
            items={collection}
            props={[
                ["Name", "name"],
                ["Created at", item => moment(item.created_at).format("Do MMMM, YYYY")],
                ["Unknown", "status"],
                ["Nested", "nested.value"],
                ["Unknown nested", "nested.other_value"]
            ]}
            keyFn={item => item.name}
            condensed
        />
    );
};

export const withOptions = (): any => {
    return (
        <ListView
            items={collection}
            props={[
                ["Name", "name"],
                ["Created at", item => moment(item.created_at).format("Do MMMM, YYYY")],
                ["Unknown", "status"],
                ["Nested", "nested.value"],
                ["Unknown nested", "nested.other_value"]
            ]}
            keyFn={item => item.name}
            options={{
                busy: (item, itemIndex) => itemIndex < 3,
                builder: (item, itemIndex) => {
                    if (itemIndex < 8) return null;

                    return [
                        {
                            label: "Option #1",
                            onClick: () => console.log(`Option #1 of item #${itemIndex + 1} clicked`)
                        },
                        {
                            label: "Option #2",
                            confirmation: [Confirmation.PRIMARY, "A confirmation question"],
                            onClick: () => console.log(`Option #2 of item #${itemIndex + 1} clicked`)
                        },
                        {
                            label: "Option #3",
                            confirmation: [Confirmation.DANGER, "A confirmation question"],
                            onClick: () => console.log(`Option #3 of item #${itemIndex + 1} clicked`)
                        }
                    ];
                }
            }}
            condensed
        />
    );
};

export const busy = (): any => {
    return (
        <ListView
            busy={true}
            items={collection}
            props={[
                ["Name", "name"],
                ["Created at", item => moment(item.created_at).format("Do MMMM, YYYY")],
                ["Unknown", "status"],
                ["Nested", "nested.value"],
                ["Unknown nested", "nested.other_value"]
            ]}
            keyFn={item => item.name}
            condensed
        />
    );
};

export const withPagination = (): any => {
    const ExampleApp = () => {
        const [page, setPage] = useState<any>(1);
        const [loading, setLoading] = useState<any>(true);
        const [items, setItems] = useState([]);

        useEffect(() => {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setItems(collection.slice(8 * (page - 1), 8 * page));
            }, 1000 + Math.random() * 500);
        }, [page]);

        return (
            <ListView
                items={items}
                busy={loading}
                pagination={{
                    page,
                    pageSize: 8,
                    total: collection.length,
                    onPageChange: (page): void => setPage(page)
                }}
                props={[
                    ["Name", "name"],
                    ["Created at", item => moment(item.created_at).format("Do MMMM, YYYY")],
                    ["Unknown", "status"],
                    ["Nested", "nested.value"],
                    ["Unknown nested", "nested.other_value"]
                ]}
                keyFn={item => item.name}
            />
        );
    };

    return <ExampleApp />;
};

export const withSorting = (): any => {
    const ExampleApp = () => {
        const [sortColumn, setSortColumn] = useState(0);
        const [sortOrder, setSortOrder] = useState(ListViewSortOrder.NONE);
        const [items, setItems] = useState(collection);

        useEffect(() => {
            setItems(
                collection.sort((first, second) => {
                    const item1 = sortOrder !== ListViewSortOrder.ASC ? first : second;
                    const item2 = sortOrder !== ListViewSortOrder.ASC ? second : first;

                    if (sortColumn === 0) return item1.name.localeCompare(item2.name);
                    if (sortColumn === 1) return item1.created_at.localeCompare(item2.created_at);
                    if (sortColumn === 2) return item1.nested.value.localeCompare(item2.nested.value);
                    return 0;
                })
            );
        }, [sortColumn, sortOrder]);

        return (
            <ListView
                items={items}
                sort={{
                    order: sortOrder,
                    columnIndex: sortColumn,
                    columns: ["Name", "Created at", "Nested"],
                    onSort: (column, order) => {
                        setSortColumn(column as any);
                        setSortOrder(order as any);
                    }
                }}
                props={[
                    ["Name", "name"],
                    ["Created at", item => moment(item.created_at).format("Do MMMM, YYYY")],
                    ["Unknown", "status"],
                    ["Nested", "nested.value"],
                    ["Unknown nested", "nested.other_value"]
                ]}
                keyFn={item => item.name}
            />
        );
    };

    return (
        <DialogProvider>
            <ExampleApp />
        </DialogProvider>
    );
};
