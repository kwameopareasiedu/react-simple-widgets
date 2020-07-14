import moment from "moment";
import React, { useEffect, useState } from "react";
import { DialogProvider } from "../../provider/dialog-provider";
import { ConfirmDialogTheme, ListViewSortOrder } from "../../../types";
import { ListView } from "./index";

const collection = [
    { name: "Item-01", created_at: "2019-01-01", nested_property: { current_value: "Item_01_nested_property_current_value" } },
    { name: "Item-02", created_at: "2019-01-02", nested_property: { current_value: "Item 02 nested property current value" } },
    { name: "Item-03", created_at: "2019-01-03", nested_property: { current_value: "Item 03 nested property current value" } },
    { name: "Item-04", created_at: "2019-01-04", nested_property: { current_value: "Item 04 nested property current value" } },
    { name: "Item-05", created_at: "2019-01-05", nested_property: { current_value: "Item 05 nested property current value" } },
    { name: "Item-06", created_at: "2019-01-06", nested_property: { current_value: "Item 06 nested property current value" } },
    { name: "Item-07", created_at: "2019-01-07", nested_property: { current_value: "Item_07_nested_property_current_value" } },
    { name: "Item-08", created_at: "2019-01-08", nested_property: { current_value: "Item 08 nested property current value" } },
    { name: "Item-09", created_at: "2019-01-09", nested_property: { current_value: "Item 09 nested property current value" } },
    { name: "Item-10", created_at: "2019-01-10", nested_property: { current_value: "Item 10 nested property current value" } },
    { name: "Item-11", created_at: "2019-01-11", nested_property: { current_value: "Item 11 nested property current value" } },
    { name: "Item-12", created_at: "2019-01-12", nested_property: { current_value: "Item 12 nested property current value" } },
    { name: "Item-13", created_at: "2019-01-13", nested_property: { current_value: "Item 12 nested property current value" } },
    { name: "Item-14", created_at: "2019-01-14", nested_property: { current_value: "Item 14 nested property current value" } },
    { name: "Item-15", created_at: "2019-01-15", nested_property: { current_value: "Item 15 nested property current value" } },
    { name: "Item-16", created_at: "2019-01-16", nested_property: { current_value: "Item 16 nested property current value" } },
    { name: "Item-17", created_at: "2019-01-17", nested_property: { current_value: "Item 17 nested property current value" } },
    { name: "Item-18", created_at: "2019-01-18", nested_property: { current_value: "Item 18 nested property current value" } },
    { name: "Item-19", created_at: "2019-01-19", nested_property: { current_value: "Item 19 nested property current value" } },
    { name: "Item-20", created_at: "2019-01-20", nested_property: { current_value: "Item 20 nested property current value" } }
];

export default {
    title: "ListView",
    component: ListView,
    decorators: [(storyFn: () => any) => <div style={{ padding: "30px" }}>{storyFn()}</div>]
};

export const normal = (): any => {
    return (
        <DialogProvider>
            <ListView
                items={collection}
                props={[
                    ["Name", "name"],
                    ["Created at", item => moment(item.created_at).format("Do MMMM, YYYY")],
                    ["Undefined property", "status"],
                    ["Nested property", "nested_property.current_value"],
                    ["Undefined nested property", "nested_property.ability"]
                ]}
            />
        </DialogProvider>
    );
};

export const withNoItems = (): any => {
    return (
        <DialogProvider>
            <ListView
                items={[]}
                props={[
                    ["Name", "name"],
                    ["Created at", item => moment(item.created_at).format("Do MMMM, YYYY")],
                    ["Undefined property", "status"],
                    ["Nested property", "nested_property.current_value"],
                    ["Undefined nested property", "nested_property.ability"]
                ]}
            />
        </DialogProvider>
    );
};

export const withSorting = (): any => {
    const ExampleApp = () => {
        const [sortData, setSortData] = useState(["Name", ListViewSortOrder.NONE]);
        const [items, setItems] = useState(collection);

        useEffect(() => {
            if (!sortData) return;
            setItems(
                collection.sort((first, second) => {
                    const item1 = sortData[1] !== ListViewSortOrder.ASC ? first : second;
                    const item2 = sortData[1] !== ListViewSortOrder.ASC ? second : first;

                    if (sortData[0] === "Name") return item1.name.localeCompare(item2.name);
                    if (sortData[0] === "Created at") return item1.created_at.localeCompare(item2.created_at);
                    if (sortData[0] === "Nested property")
                        return item1.nested_property.current_value.localeCompare(item2.nested_property.current_value);
                    return 0;
                })
            );
        }, [sortData]);

        return (
            <ListView
                items={items}
                sort={{
                    column: sortData[0] as string,
                    order: sortData[1] as ListViewSortOrder,
                    onSort: (column, order) => setSortData([column, order])
                }}
                props={[
                    ["Name", "name"],
                    ["Created at", item => moment(item.created_at).format("Do MMMM, YYYY")],
                    ["Undefined property", "status"],
                    ["Nested property", "nested_property.current_value"],
                    ["Undefined nested property", "nested_property.ability"]
                ]}
            />
        );
    };

    return (
        <DialogProvider>
            <ExampleApp />
        </DialogProvider>
    );
};

export const withDelayedLoading = (): any => {
    const ExampleApp = () => {
        const [loading, setLoading] = useState<any>(true);
        const [items, setItems] = useState([]);

        useEffect(() => {
            setTimeout(() => {
                setLoading(false);
                setItems(collection.slice(0, 5));
            }, 3000);
        }, []);

        return (
            <ListView
                items={items}
                busy={loading}
                props={[
                    ["Name", "name"],
                    ["Created at", item => moment(item.created_at).format("Do MMMM, YYYY")],
                    ["Undefined property", "status"],
                    ["Nested property", "nested_property.current_value"],
                    ["Undefined nested property", "nested_property.ability"]
                ]}
            />
        );
    };

    return (
        <DialogProvider>
            <p className="text-center mb-4">Data will load in 3s</p>
            <ExampleApp />
        </DialogProvider>
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
                setItems(collection.slice(5 * (page - 1), 5 * page));
            }, 1000 + Math.random() * 2000);
        }, [page]);

        return (
            <ListView
                items={items}
                busy={loading}
                pagination={{
                    page,
                    pageSize: 5,
                    total: collection.length,
                    onPageChange: (page): void => setPage(page)
                }}
                props={[
                    ["Name", "name"],
                    ["Created at", item => moment(item.created_at).format("Do MMMM, YYYY")],
                    ["Undefined property", "status"],
                    ["Nested property", "nested_property.current_value"],
                    ["Undefined nested property", "nested_property.ability"]
                ]}
            />
        );
    };

    return (
        <DialogProvider>
            <ExampleApp />
        </DialogProvider>
    );
};

export const withOptions = (): any => {
    return (
        <DialogProvider>
            <ListView
                items={collection}
                options={{
                    busy: (item, itemIndex) => itemIndex < 3,
                    builder: (item, itemIndex) => {
                        if (itemIndex < 8) return null;

                        return [
                            { label: "Option #1", onClick: () => console.log(`Option #1 of item #${itemIndex + 1} clicked`) },
                            {
                                label: "Option #2",
                                confirmation: "A confirmation question",
                                onClick: () => console.log(`Option #2 of item #${itemIndex + 1} clicked`)
                            },
                            {
                                label: "Option #3",
                                confirmation: "A confirmation question",
                                confirmationTheme: ConfirmDialogTheme.DANGER,
                                onClick: () => console.log(`Option #3 of item #${itemIndex + 1} clicked`)
                            }
                        ];
                    }
                }}
                props={[
                    ["Name", "name"],
                    ["Created at", item => moment(item.created_at).format("Do MMMM, YYYY")],
                    ["Undefined property", "status"],
                    ["Nested property", "nested_property.current_value"],
                    ["Undefined nested property", "nested_property.ability"]
                ]}
            />
        </DialogProvider>
    );
};

export const withOnClick = (): any => {
    return (
        <DialogProvider>
            <ListView
                items={collection}
                props={[
                    ["Name", "name"],
                    ["Created at", item => moment(item.created_at).format("Do MMMM, YYYY")],
                    ["Undefined property", "status"],
                    ["Nested property", "nested_property.current_value"],
                    ["Undefined nested property", "nested_property.ability"]
                ]}
                onClick={(item, index) => {
                    console.log({ item, index });
                    alert("Item clicked. Check the console for the item clicked and its index");
                }}
            />
        </DialogProvider>
    );
};
