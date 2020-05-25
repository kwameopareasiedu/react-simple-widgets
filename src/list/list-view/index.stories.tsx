import moment from "moment";
import React, { useEffect, useState } from "react";
import { ListView } from "./index";

const collection = [
    { name: "Item 1", created_at: "2019-01-01", nested_property: { current_value: "Item 1 nested property current value" } },
    { name: "Item 2", created_at: "2019-01-01", nested_property: { current_value: "Item 2 nested property current value" } },
    { name: "Item 3", created_at: "2018-11-01", nested_property: { current_value: "Item 3 nested property current value" } },
    { name: "Item 4", created_at: "2019-01-01", nested_property: { current_value: "Item 1 nested property current value" } },
    { name: "Item 5", created_at: "2019-01-01", nested_property: { current_value: "Item 2 nested property current value" } },
    { name: "Item 6", created_at: "2018-11-01", nested_property: { current_value: "Item 3 nested property current value" } },
    { name: "Item 7", created_at: "2019-01-01", nested_property: { current_value: "Item 1 nested property current value" } },
    { name: "Item 8", created_at: "2019-01-01", nested_property: { current_value: "Item 2 nested property current value" } },
    { name: "Item 9", created_at: "2018-11-01", nested_property: { current_value: "Item 3 nested property current value" } },
    { name: "Item 10", created_at: "2019-01-01", nested_property: { current_value: "Item 1 nested property current value" } },
    { name: "Item 11", created_at: "2019-01-01", nested_property: { current_value: "Item 2 nested property current value" } },
    { name: "Item 12", created_at: "2018-11-01", nested_property: { current_value: "Item 3 nested property current value" } },
    { name: "Item 13", created_at: "2018-11-01", nested_property: { current_value: "Item 3 nested property current value" } },
    { name: "Item 14", created_at: "2018-11-01", nested_property: { current_value: "Item 3 nested property current value" } },
    { name: "Item 15", created_at: "2018-11-01", nested_property: { current_value: "Item 3 nested property current value" } },
    { name: "Item 16", created_at: "2018-11-01", nested_property: { current_value: "Item 3 nested property current value" } },
    { name: "Item 17", created_at: "2018-11-01", nested_property: { current_value: "Item 3 nested property current value" } },
    { name: "Item 18", created_at: "2018-11-01", nested_property: { current_value: "Item 3 nested property current value" } },
    { name: "Item 19", created_at: "2018-11-01", nested_property: { current_value: "Item 3 nested property current value" } },
    { name: "Item 20", created_at: "2018-11-01", nested_property: { current_value: "Item 3 nested property current value" } }
];

export default {
    title: "ListView",
    component: ListView,
    decorators: [(storyFn: any) => <div style={{ padding: "30px" }}>{storyFn()}</div>]
};

export const normal = () => {
    const ExampleApp = () => {
        const [sortInfo, setSortInfo] = useState<any>();
        const [page, setPage] = useState<any>(1);
        const [loading, setLoading] = useState<any>(false);
        const [items, setItems] = useState(collection.slice(0, 5));

        useEffect(() => {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setItems(collection.slice(5 * (page - 1), 5 * page));
            }, 4000 + Math.random() * 3000);
        }, [page]);

        return (
            <ListView
                total={20}
                page={page}
                pageSize={5}
                items={items}
                loading={loading}
                props={[
                    ["Name", "name"],
                    ["Created at", item => moment(item.created_at).format("Do MMMM, YYYY")],
                    ["Nested property", "nested_property.current_value"],
                    ["Undefined property", "nested_property.current_value"],
                    ["Undefined nested property", "nested_property.current_value"]
                ]}
                onPageChange={setPage}
            />
        );
    };

    return <ExampleApp />;
};

export const withSorting = () => {
    const ExampleApp = () => {
        const [sortInfo, setSortInfo] = useState<any>();
        const [page, setPage] = useState<any>(1);
        const [loading, setLoading] = useState<any>(false);
        const [items, setItems] = useState(collection.slice(0, 5));

        useEffect(() => {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setItems(collection.slice(5 * (page - 1), 5 * page));
            }, 4000 + Math.random() * 3000);
        }, [page]);

        return (
            <ListView
                total={20}
                page={page}
                pageSize={5}
                items={items}
                sort={sortInfo}
                loading={loading}
                props={[
                    ["Name", "name"],
                    ["Created at", item => moment(item.created_at).format("Do MMMM, YYYY")],
                    ["Nested property", "nested_property.current_value"],
                    ["Undefined property", "nested_property.current_value"],
                    ["Undefined nested property", "nested_property.current_value"]
                ]}
                onSort={(label, order) => setSortInfo([label, order])}
                onPageChange={setPage}
            />
        );
    };

    return <ExampleApp />;
};
