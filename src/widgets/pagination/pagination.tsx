import React from "react";
import { PaginationProps } from "../../../types";
import styled from "styled-components";

const PaginationRoot = styled.table.attrs(props => ({
  className: "react-simple-widget pagination " + props.className
}))`
  display: block;
  padding: 15px 8px;

  .pagination-info {
    margin-bottom: 12px;
    color: #767676;

    span {
      color: var(--rsw-primary-color);
      font-weight: 600;
    }
  }

  button {
    padding-top: 0;
    padding-bottom: 0;
  }

  button:focus,
  button:hover,
  button:active {
    box-shadow: none;
  }

  button:first-child,
  button:last-child {
    padding: 0;
  }

  button:first-child {
    margin-right: 8px;
  }

  button:last-child {
    margin-left: 8px;
  }

  p,
  button {
    font-size: 85%;
    font-style: italic;
  }
`;

export const Pagination = ({
  page,
  total,
  pageSize,
  onChange,
  ...rest
}: PaginationProps): JSX.Element => {
  if (!page || !total || !pageSize) return null;

  const pages = Math.ceil(parseInt(String(total)) / parseInt(String(pageSize)));
  const minPage = Math.max(1, parseInt(String(page)) - 4);
  const maxPage = Math.min(parseInt(String(page)) + 4, pages);

  return (
    <PaginationRoot {...rest}>
      <div className="pagination-info">
        Showing <span>{(page - 1) * pageSize + 1}</span> -{" "}
        <span>{Math.min(total, page * pageSize)}</span> of <span>{total}</span>{" "}
        items
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
            <button
              type="button"
              className="btn btn-link btn-sm"
              onClick={(): void => onChange(1)}>
              1
            </button>

            {minPage > 2 && (
              <button
                type="button"
                className="btn btn-link btn-sm"
                onClick={(): void => onChange(2)}>
                2
              </button>
            )}

            {minPage > 3 && (
              <button
                type="button"
                className="btn btn-link btn-sm"
                onClick={(): void => onChange(3)}>
                3
              </button>
            )}

            <span>...</span>
          </React.Fragment>
        )}

        {Array.from(new Array(maxPage - minPage + 1)).map((_, i) => {
          const isPrimary = i + minPage === page;
          const onClick = (): void => onChange(minPage + i);
          const className = isPrimary
            ? "btn btn-primary btn-sm"
            : "btn btn-link btn-sm";
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

            <button
              type="button"
              className="btn btn-link btn-sm"
              onClick={(): void => onChange(pages)}>
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
    </PaginationRoot>
  );
};
