import React, { useEffect, useState } from "react";
import { BusyButton } from "../../../src/widgets/busy-button/busy-button";
import { useLoadMore } from "./index";

export default { title: "UseLoadMore" };

const collection = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
    "Item 11",
    "Item 12"
];

export const usage = (): any => {
    const ExampleApp = (): any => {
        const [loading, setLoading] = useState(false);
        const { page, items, endOfItems, loadTriggered, loadMore, onLoadMoreSuccess, onLoadMoreFailed } = useLoadMore();

        useEffect(() => {
            setTimeout(() => {
                const probabilityOfSuccess = Math.random();

                if (probabilityOfSuccess > 0.2) onLoadMoreSuccess(collection.slice(3 * (page - 1), 3 * page), 12);
                else onLoadMoreFailed();
                setLoading(false);
            }, 1500);

            setLoading(true);
        }, [loadTriggered]);

        return (
            <div>
                <ul className="list-group">
                    {items.map(item => (
                        <li key={item} className="list-group-item">
                            {item}
                        </li>
                    ))}
                </ul>

                <br />

                <div className="text-center">
                    <p>{items.length} of 12 items loaded</p>

                    {!endOfItems && (
                        <BusyButton
                            busy={loading}
                            className="btn btn-primary btn-sm mb-4 mr-2"
                            onClick={(): void => loadMore()}>
                            More
                        </BusyButton>
                    )}

                    <BusyButton
                        busy={loading}
                        className="btn btn-secondary btn-sm mb-4"
                        onClick={(): void => loadMore(true)}>
                        Reset page and load more
                    </BusyButton>

                    <p>
                        <i>
                            Each &quot;request&quot; has a 1500ms TTL and a a 20% chance of failure (To simulate
                            network/API lag and failure respectively)
                        </i>
                    </p>
                </div>
            </div>
        );
    };

    return <ExampleApp />;
};
