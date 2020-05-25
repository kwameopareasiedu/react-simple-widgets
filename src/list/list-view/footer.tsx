import "./footer.scss";
import React from "react";

interface IListViewFooter {
    page: number;
    total: number;
    pageSize: number;
    onPageChange: (page: number) => void;
}

export const ListViewFooter = ({ page, total, pageSize, onPageChange }: IListViewFooter): any => {
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
                    <button type="button" className="btn btn-link btn-sm" disabled={page === 1} onClick={(): void => onPageChange(page - 1)}>
                        Prev
                    </button>

                    {Array.from(new Array(maxPage - minPage + 1)).map((_, i) => {
                        const isPrimary = i + minPage === page;
                        const onClick = (): void => onPageChange(minPage + i);
                        const className = isPrimary ? "btn btn-primary btn-sm" : "btn btn-link btn-sm";
                        const props: any = { key: i, type: "button", className, onClick };
                        return <button {...props}>{i + minPage}</button>;
                    })}

                    <button type="button" className="btn btn-link btn-sm" disabled={page === pages} onClick={(): void => onPageChange(page + 1)}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};
