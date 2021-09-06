import "./table-view.scss";
import React, { useEffect, useMemo, useState } from "react";
import {
    SortDirection,
    TableView as ITableView,
    TableViewCellResolver,
    TableViewCellResolverFunction,
    TableViewSortData
} from "../../../types";
import SortNoneImg from "../../assets/sort-none.svg";
import SortUpImg from "../../assets/sort-up.svg";
import SortDownImg from "../../assets/sort-down.svg";

const EMPTY_STRING = "---";

export const TableView = ({
    items,
    props,
    className: _className,
    headerRowBuilder: _headerRowBuilder,
    bodyRowBuilder: _bodyRowBuilder,
    footerRowBuilder,
    captionBuilder,
    optionsBuilder,
    onSort: _onSort,
    ...rest
}: ITableView): JSX.Element => {
    const headerCellValues = useMemo(() => props.map(p => p[0]), [props]);
    const bodyCellResolvers = useMemo(() => props.map(p => p[1]), [props]);
    const headerSortKeys = useMemo(() => (props[0][2] ? props.map(p => p[2]) : null), [props]);
    const [sort, setSort] = useState<TableViewSortData>({ direction: SortDirection.NONE, prop: null });

    const className = (): string => {
        const classes = ["react-simple-widget ", "table-view", "table"];
        if (_className) classes.push(_className);
        return classes.join(" ");
    };

    const sortIndicatorBuilder = (sortProp: string): JSX.Element => {
        if (sortProp === sort.prop) {
            if (sort.direction === SortDirection.NONE) return <img src={SortNoneImg} alt="Sort none icon" />;
            if (sort.direction === SortDirection.ASC) return <img src={SortUpImg} alt="Sort up icon" />;
            if (sort.direction === SortDirection.DESC) return <img src={SortDownImg} alt="Sort down icon" />;
        } else {
            return <img src={SortNoneImg} alt="Sort none icon" />;
        }
    };

    const onSort = (sortProp: string): void => {
        if (sortProp === sort.prop) {
            // Sort property is same as state value, cycle through sort directions
            if (sort.direction === SortDirection.NONE) setSort({ ...sort, direction: SortDirection.ASC });
            else if (sort.direction === SortDirection.ASC) setSort({ ...sort, direction: SortDirection.DESC });
            else if (sort.direction === SortDirection.DESC) setSort({ ...sort, direction: SortDirection.NONE });
        } else setSort({ prop: sortProp, direction: SortDirection.ASC });
    };

    const headerRowBuilder = (): JSX.Element => {
        if (_headerRowBuilder) return _headerRowBuilder(headerCellValues, sort);

        return (
            <tr>
                {headerCellValues.map((value, valueIndex) => {
                    const sortProp = headerSortKeys && headerSortKeys[valueIndex];
                    const canSort = _onSort && sortProp;

                    return (
                        <th
                            key={value}
                            className={canSort ? "sortable" : ""}
                            onClick={canSort ? () => onSort(sortProp) : null}>
                            {value}
                            {canSort && sortIndicatorBuilder(sortProp)}
                        </th>
                    );
                })}
            </tr>
        );
    };

    const bodyRowBuilder = (item: any, itemIndex: number): JSX.Element => {
        if (_bodyRowBuilder) return _bodyRowBuilder(item, bodyCellResolvers, itemIndex);

        return (
            <tr key={itemIndex}>
                <td className="table-view-td-sm">
                    <div className="table-view-row-content">
                        {bodyCellResolvers.map((resolver, resolverIndex) => {
                            return (
                                <div key={resolverIndex} className="table-view-row-content-item">
                                    <span>{headerCellValues[resolverIndex]}</span>
                                    <span>{resolveCellValue(item, resolver, itemIndex)}</span>
                                </div>
                            );
                        })}

                        {optionsBuilder && (
                            <div className="table-view-row-content-item options-content-item">
                                <span />
                                <span>{optionsBuilder(item, itemIndex)}</span>
                            </div>
                        )}
                    </div>
                </td>

                {bodyCellResolvers.map((resolver, resolverIndex) => {
                    return (
                        <td key={resolverIndex} className="table-view-td">
                            {resolveCellValue(item, resolver, itemIndex)}
                        </td>
                    );
                })}

                {optionsBuilder && <td className="table-view-td">{optionsBuilder(item, itemIndex)}</td>}
            </tr>
        );
    };

    const resolveCellValue = (item: any, resolver: TableViewCellResolver, itemIndex: number): any => {
        if (!item) return EMPTY_STRING;
        else if (typeof resolver === "string") {
            if (resolver.indexOf(".") === -1) {
                return item[resolver] || EMPTY_STRING;
            } else {
                let iterator = item;
                const propertyKeys = resolver.split(".");

                for (const propertyKey of propertyKeys) {
                    if (!iterator[propertyKey]) return EMPTY_STRING;
                    iterator = iterator[propertyKey];
                }

                return iterator || EMPTY_STRING;
            }
        } else if (typeof resolver === "function") {
            return (resolver as TableViewCellResolverFunction)(item, itemIndex);
        } else return EMPTY_STRING;
    };

    useEffect(() => {
        if (_onSort) _onSort(sort.prop, sort.direction);
    }, [sort]);

    return (
        <table className={className()} {...rest}>
            <thead>{headerRowBuilder()}</thead>

            <tbody>
                {items.map((item, itemIndex) => {
                    return bodyRowBuilder(item, itemIndex);
                })}
            </tbody>

            {footerRowBuilder && <tfoot>{footerRowBuilder()}</tfoot>}

            {captionBuilder && <caption>{captionBuilder()}</caption>}
        </table>
    );
};
