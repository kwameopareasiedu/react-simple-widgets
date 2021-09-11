import "./growable-items-container.scss";
import React, { MutableRefObject, useEffect, useRef } from "react";
import { GrowableItemsContainer as IGrowableItemsContainer } from "../../../types";
import { BusyButton } from "../busy-button/busy-button";

export const GrowableItemsContainer = ({
    busy,
    itemCount,
    total,
    error,
    onLoadMore,
    className: _className,
    children,
    ...rest
}: IGrowableItemsContainer): JSX.Element => {
    const loadMoreButtonContainerRef: MutableRefObject<HTMLDivElement> = useRef();

    const className = (): string => {
        const classes = ["react-simple-widget", "growable-items-container"];
        if (_className) classes.push(_className);
        return classes.join(" ");
    };

    useEffect(() => {
        const onWindowScroll = () => {
            const loadMoreButtonContainer = loadMoreButtonContainerRef.current;

            if (loadMoreButtonContainer) {
                const containerBottom = loadMoreButtonContainer.getBoundingClientRect().bottom;
                if (!busy && itemCount < total && containerBottom < window.innerHeight) {
                    onLoadMore();
                }
            }
        };

        window.addEventListener("scroll", onWindowScroll);
        return () => window.removeEventListener("scroll", onWindowScroll);
    }, [busy, itemCount, total]);

    return (
        <div {...rest} className={className()}>
            {children}

            <div ref={loadMoreButtonContainerRef} className="text-center mt-2">
                {(busy || error || itemCount < total) && (
                    <BusyButton
                        type="button"
                        busy={busy}
                        className="load-more-btn btn btn-secondary btn-sm"
                        onClick={onLoadMore}
                        invert>
                        Load More
                    </BusyButton>
                )}
            </div>
        </div>
    );
};
