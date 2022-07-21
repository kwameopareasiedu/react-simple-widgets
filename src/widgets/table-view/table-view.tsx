import "./table-view.scss";
import React, { useEffect, useMemo, useState } from "react";
import {
  SortDirection,
  TableViewProps,
  TableViewCellResolver,
  TableViewCellResolverFunction,
  TableViewSortData
} from "../../../types";
import SortNoneImg from "../../assets/sort-none.svg";
import SortUpImg from "../../assets/sort-up.svg";
import SortDownImg from "../../assets/sort-down.svg";
import { useWindowBreakpoints } from "../../utils/use-window-breakpoints/use-window-breakpoints";

const EMPTY_STRING = "---";

export const TableView = ({
  items,
  props,
  mobileTableCols: _mobileTableCols,
  className: _className,
  headerRowBuilder: _headerRowBuilder,
  bodyRowBuilder: _bodyRowBuilder,
  emptyRowBuilder: _emptyRowBuilder,
  footerRowBuilder,
  captionBuilder,
  optionsBuilder,
  onSort: _onSort,
  ...rest
}: TableViewProps): JSX.Element => {
  const { xs, sm } = useWindowBreakpoints();
  // Extract the table header row values from props, which are the 1st elements of the props
  const headerCellValues = useMemo(() => props.map(p => p[0]), [props]);
  // Extract the table body row values from props, which are the 2nd elements of the props
  const bodyCellResolvers = useMemo(() => props.map(p => p[1]), [props]);
  // Extract the column sort keys from props, which are the 3rd elements of the props (If they exist)
  const headerSortKeys = useMemo(() => (props[0][2] ? props.map(p => p[2]) : null), [props]);
  const [sort, setSort] = useState<TableViewSortData>({ direction: SortDirection.NONE, prop: null });
  const mobileTableCols = Math.max(0, _mobileTableCols || 0);
  const useMobileTable = mobileTableCols > 0;

  const className = (): string => {
    const classes = ["react-simple-widget ", "table-view", "table"];
    if (_className) classes.push(_className);
    return classes.join(" ");
  };

  const headerRowBuilder = (): JSX.Element => {
    // If a custom header row build function is provided, delegate the header UI
    // build to it by passing it the header values and column sort data
    if (_headerRowBuilder) return _headerRowBuilder(resolveArray(headerCellValues), sort);

    return (
      <tr>
        {resolveArray(headerCellValues).map((value, valueIndex) => {
          // For each column, determine if the sort UI should be available for it
          // Sort is available if a sort property name was provided in the props array
          // and an onSort function was passed to the widget
          const sortProp = headerSortKeys && headerSortKeys[valueIndex];
          const canSort = _onSort && sortProp;

          return (
            <th key={value} className={canSort ? "sortable" : ""} onClick={canSort ? () => onSort(sortProp) : null}>
              {value}
              {canSort && sortIndicatorBuilder(sortProp)}
            </th>
          );
        })}

        {/* Add an empty column to the end if the optionsBuilder was provided */}
        {optionsBuilder && <th />}
      </tr>
    );
  };

  const bodyRowBuilder = (item: any, itemIndex: number): JSX.Element => {
    // If a custom body row build function is provided, delegate the row UI
    // build to it by passing it the item, the cell resolvers and the index
    if (_bodyRowBuilder) return _bodyRowBuilder(item, bodyCellResolvers, itemIndex);

    return (
      <tr key={itemIndex}>
        {/* Mobile screen columns */}
        {useMobileTable ? (
          resolveArray(bodyCellResolvers).map((resolver, resolverIndex) => {
            return (
              <td key={resolverIndex} className="table-view-td-sm">
                {resolveCellValue(item, resolver, itemIndex)}
              </td>
            );
          })
        ) : (
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
        )}

        {/* Large screen data columns */}
        {resolveArray(bodyCellResolvers).map((resolver, resolverIndex) => {
          return (
            <td key={resolverIndex} className="table-view-td">
              {resolveCellValue(item, resolver, itemIndex)}
            </td>
          );
        })}

        {/* Large screen options column */}
        {optionsBuilder && <td className="table-view-td">{optionsBuilder(item, itemIndex)}</td>}
      </tr>
    );
  };

  const resolveCellValue = (item: any, resolver: TableViewCellResolver, itemIndex: number): any => {
    if (!item) {
      return EMPTY_STRING;
    } else if (typeof resolver === "string") {
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

  const emptyRowBuilder = (): JSX.Element => {
    return (
      <tr className="empty-message-tr">
        {!_emptyRowBuilder ? (
          <td className="default" colSpan={props.length}>
            No items to display
          </td>
        ) : (
          _emptyRowBuilder()
        )}
      </tr>
    );
  };

  const sortIndicatorBuilder = (sortProp: string): JSX.Element => {
    if (sortProp === sort.prop) {
      if (sort.direction === SortDirection.NONE) return <img src={SortNoneImg} alt="Sort none icon" />;
      else if (sort.direction === SortDirection.ASC) return <img src={SortUpImg} alt="Sort up icon" />;
      else if (sort.direction === SortDirection.DESC) return <img src={SortDownImg} alt="Sort down icon" />;
    } else return <img src={SortNoneImg} alt="Sort none icon" />;
  };

  const onSort = (sortProp: string): void => {
    if (sortProp === sort.prop) {
      // If column sort property is same as state value, cycle through sort directions
      if (sort.direction === SortDirection.NONE) setSort({ ...sort, direction: SortDirection.ASC });
      else if (sort.direction === SortDirection.ASC) setSort({ ...sort, direction: SortDirection.DESC });
      else if (sort.direction === SortDirection.DESC) setSort({ ...sort, direction: SortDirection.NONE });
    } else setSort({ prop: sortProp, direction: SortDirection.ASC });
  };

  const resolveArray = <T,>(arr: Array<T>): Array<T> => {
    if ((xs || sm) && useMobileTable) {
      return arr.slice(0, mobileTableCols);
    } else return arr;
  };

  useEffect(() => {
    if (_onSort) _onSort(sort.prop, sort.direction);
  }, [sort]);

  return (
    <table className={className()} {...rest}>
      <thead className={useMobileTable ? "persistent" : null}>{headerRowBuilder()}</thead>

      <tbody>
        {items.map((item, itemIndex) => {
          return bodyRowBuilder(item, itemIndex);
        })}

        {items.length === 0 && emptyRowBuilder()}
      </tbody>

      {footerRowBuilder && <tfoot>{footerRowBuilder()}</tfoot>}

      {captionBuilder && <caption>{captionBuilder()}</caption>}
    </table>
  );
};
