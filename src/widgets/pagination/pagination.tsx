import "./pagination.scss";
import React from "react";
import { Pagination as IPagination } from "../../../types";

export const Pagination = ({
    page,
    total,
    pageSize,
    onChange,
    className: _className,
    ...rest
}: IPagination): JSX.Element => {
    if (!page || !total || !pageSize) return null;

    const pages = Math.ceil(parseInt(String(total)) / parseInt(String(pageSize)));
    const minPage = Math.max(1, parseInt(String(page)) - 4);
    const maxPage = Math.min(parseInt(String(page)) + 4, pages);

    const className = (): string => {
        const classes = ["react-simple-widget", "pagination"];
        if (_className) classes.push(_className);
        return classes.join(" ");
    };

    return (
        <div className={className()} {...rest}>
            <div className="pagination-info">
                Showing <span>{(page - 1) * pageSize + 1}</span> - <span>{Math.min(total, page * pageSize)}</span> of{" "}
                <span>{total}</span> items
            </div>

            <div className="pagination-actions">
                <button
                    type="button"
                    disabled={page === 1}
                    className="btn btn-link btn-sm"
                    onClick={(): void => onChange(page - 1)}>
                    Prev
                </button>

                {minPage > 1 && (
                    <React.Fragment>
                        <button type="button" className="btn btn-link btn-sm" onClick={(): void => onChange(1)}>
                            1
                        </button>

                        {minPage > 2 && (
                            <button type="button" className="btn btn-link btn-sm" onClick={(): void => onChange(2)}>
                                2
                            </button>
                        )}

                        {minPage > 3 && (
                            <button type="button" className="btn btn-link btn-sm" onClick={(): void => onChange(3)}>
                                3
                            </button>
                        )}

                        <span>...</span>
                    </React.Fragment>
                )}

                {Array.from(new Array(maxPage - minPage + 1)).map((_, i) => {
                    const isPrimary = i + minPage === page;
                    const onClick = (): void => onChange(minPage + i);
                    const className = isPrimary ? "btn btn-primary btn-sm" : "btn btn-link btn-sm";
                    const props: any = { type: "button", className, onClick };
                    return (
                        <button key={i} {...props}>
                            {i + minPage}
                        </button>
                    );
                })}

                {maxPage < pages && (
                    <React.Fragment>
                        <span>...</span>

                        {maxPage < pages - 2 && (
                            <button
                                type="button"
                                className="btn btn-link btn-sm"
                                onClick={(): void => onChange(pages - 2)}>
                                {pages - 2}
                            </button>
                        )}

                        {maxPage < pages - 1 && (
                            <button
                                type="button"
                                className="btn btn-link btn-sm"
                                onClick={(): void => onChange(pages - 1)}>
                                {pages - 1}
                            </button>
                        )}

                        <button type="button" className="btn btn-link btn-sm" onClick={(): void => onChange(pages)}>
                            {pages}
                        </button>
                    </React.Fragment>
                )}

                <button
                    type="button"
                    className="btn btn-link btn-sm"
                    disabled={page === pages}
                    onClick={(): void => onChange(page + 1)}>
                    Next
                </button>
            </div>
        </div>
    );
};
