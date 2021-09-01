import "./footer.scss";
import React from "react";

interface ListViewPagination {
    page: number;
    total: number;
    pageSize: number;
    onPageChange: (page: number) => void;
}

export const ListViewFooter = ({ page, total, pageSize, onPageChange }: ListViewPagination): any => {
    if (!page || !total || !pageSize) return null;

    const pages = Math.ceil(parseInt(String(total)) / parseInt(String(pageSize)));
    const minPage = Math.max(1, parseInt(String(page)) - 4);
    const maxPage = Math.min(parseInt(String(page)) + 4, pages);

    return (
        <div className="react-simple-widget list-view-footer">
            <div className="row">
                <div className="col-12 col-md-6">
                    <p>
                        Showing {(page - 1) * pageSize + 1} - {Math.min(total, page * pageSize)} of {total} items
                    </p>
                </div>

                <div className="col-12 col-md-6">
                    <button
                        type="button"
                        className="btn btn-link btn-sm"
                        disabled={page === 1}
                        onClick={(): void => onPageChange(page - 1)}>
                        Prev
                    </button>

                    {minPage > 1 && (
                        <React.Fragment>
                            <button type="button" className="btn btn-link btn-sm" onClick={(): void => onPageChange(1)}>
                                1
                            </button>

                            {minPage > 2 && (
                                <button
                                    type="button"
                                    className="btn btn-link btn-sm"
                                    onClick={(): void => onPageChange(2)}>
                                    2
                                </button>
                            )}

                            {minPage > 3 && (
                                <button
                                    type="button"
                                    className="btn btn-link btn-sm"
                                    onClick={(): void => onPageChange(3)}>
                                    3
                                </button>
                            )}

                            <span>...</span>
                        </React.Fragment>
                    )}

                    {Array.from(new Array(maxPage - minPage + 1)).map((_, i) => {
                        const isPrimary = i + minPage === page;
                        const onClick = (): void => onPageChange(minPage + i);
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
                                    onClick={(): void => onPageChange(pages - 2)}>
                                    {pages - 2}
                                </button>
                            )}

                            {maxPage < pages - 1 && (
                                <button
                                    type="button"
                                    className="btn btn-link btn-sm"
                                    onClick={(): void => onPageChange(pages - 1)}>
                                    {pages - 1}
                                </button>
                            )}

                            <button
                                type="button"
                                className="btn btn-link btn-sm"
                                onClick={(): void => onPageChange(pages)}>
                                {pages}
                            </button>
                        </React.Fragment>
                    )}

                    <button
                        type="button"
                        className="btn btn-link btn-sm"
                        disabled={page === pages}
                        onClick={(): void => onPageChange(page + 1)}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};
