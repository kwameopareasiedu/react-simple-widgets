import "./sorter.scss";
import React from "react";
import { ListViewSort, ListViewSortOrder } from "./types";
import { FieldDecoration } from "../../form/field-decoration";
import { FieldDecorationType } from "../../form/field-decoration/types";
import SortDownIcon from "../../assets/sort-down.svg";
import SortUpIcon from "../../assets/sort-up.svg";
import SortIcon from "../../assets/sort-none.svg";

export const ListViewSorter = ({ columns, columnIndex, order, onSort }: ListViewSort): any => {
    return (
        <div className="react-simple-widget sorter">
            <div className="sorter-content">
                <FieldDecoration label="Sort column" decoration={FieldDecorationType.FLOATING_LABEL} stickyFloatingLabel>
                    {({ onFieldFocus, onFieldBlur }) => (
                        <select
                            value={columnIndex}
                            onBlur={onFieldBlur}
                            onFocus={onFieldFocus}
                            onChange={(e: any) => onSort(parseInt(e.target.value), order)}>
                            {columns.map((column, cI) => (
                                <option key={column} value={cI}>
                                    {column}
                                </option>
                            ))}
                        </select>
                    )}
                </FieldDecoration>

                <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => {
                        if (order === ListViewSortOrder.NONE) onSort(columnIndex, ListViewSortOrder.ASC);
                        if (order === ListViewSortOrder.ASC) onSort(columnIndex, ListViewSortOrder.DESC);
                        if (order === ListViewSortOrder.DESC) onSort(columnIndex, ListViewSortOrder.NONE);
                    }}>
                    {(order === ListViewSortOrder.NONE || !order) && <img src={SortIcon} alt="No sort" />}
                    {order === ListViewSortOrder.ASC && <img src={SortUpIcon} alt="Sort up" />}
                    {order === ListViewSortOrder.DESC && <img src={SortDownIcon} alt="Sort down" />}
                </button>
            </div>
        </div>
    );
};
