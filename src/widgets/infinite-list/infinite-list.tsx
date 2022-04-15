import React, { MutableRefObject, useEffect, useRef } from "react";
import { InfiniteListProps } from "../../../types";
import { BusyButton } from "../busy-button/busy-button";

export const InfiniteList = ({
  busy,
  count,
  total,
  error,
  onLoadMore,
  className: _className,
  children,
  ...rest
}: InfiniteListProps): JSX.Element => {
  const loadMoreButtonContainerRef: MutableRefObject<HTMLDivElement> = useRef();

  const className = (): string => {
    const classes = ["react-simple-widget", "infinite-list"];
    if (_className) classes.push(_className);
    return classes.join(" ");
  };

  useEffect(() => {
    const onWindowScroll = () => {
      const loadMoreButtonContainer = loadMoreButtonContainerRef.current;

      if (loadMoreButtonContainer) {
        const containerBottom = loadMoreButtonContainer.getBoundingClientRect().bottom;
        if (!busy && count < total && containerBottom < window.innerHeight) {
          onLoadMore();
        }
      }
    };

    window.addEventListener("scroll", onWindowScroll);
    return () => window.removeEventListener("scroll", onWindowScroll);
  }, [busy, count, total]);

  return (
    <div {...rest} className={className()}>
      {children}

      <div ref={loadMoreButtonContainerRef} className="text-center mt-2">
        {(busy || error || count < total) && (
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
