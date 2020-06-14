import "./mobile-item.scss";
import React, { useContext } from "react";
import { ListViewItemOptionsDialog } from "./options-dialog";
import { DialogProviderContext } from "../../provider/dialog-provider";
import { IListViewOptions } from "../../../types";
import MoreIcon from "../../assets/more.svg";
import { Loader } from "../../misc/loader";

interface IListViewMobileItem {
    item: any;
    index: number;
    options: IListViewOptions;
    props: Array<[string, string | ((item: any, itemIndex: number) => any)]>;
    propValueEvaluator: (item: any, itemIndex: number, propIndex: number) => any;
    onClick?: (item: any, itemIndex?: number) => void;
}

export const ListViewMobileItem = ({ item, index, props, options, propValueEvaluator, onClick }: IListViewMobileItem): any => {
    const { showDialog } = useContext(DialogProviderContext);

    const className = (): string => {
        const classes = ["react-simple-widget", "list-view-mobile-item"];
        if (onClick) classes.push("list-view-mobile-item-clickable");
        return classes.join(" ");
    };

    const showOptionsDialog = (e: React.MouseEvent, item: any): void => {
        e.preventDefault();
        e.stopPropagation();

        const optionsList = options.builder(item, index);
        if (!optionsList || optionsList.length === 0) return;
        showDialog(helper => <ListViewItemOptionsDialog helper={helper} item={item} index={index} options={optionsList} />);
    };

    const interceptOnClick = (): void => {
        if (onClick) onClick(item, index);
    };

    return (
        <div className={className()} onClick={interceptOnClick}>
            {props.reduce(
                (items, [label], propIndex) => [
                    ...items,
                    <span key={"prop-label" + index + propIndex} className="prop-label">
                        {label}
                    </span>,
                    <span key={"prop-value" + index + propIndex} className="prop-value">
                        {propValueEvaluator(item, index, propIndex)}
                    </span>
                ],
                []
            )}

            <span className="prop-label" />

            {options && (
                <React.Fragment>
                    {options.busy && options.busy(item, index) && <Loader className="item-options" />}
                    {(!options.busy || !options.busy(item, index)) && (
                        <span className="item-options" onClick={e => showOptionsDialog(e, item)}>
                            <img src={MoreIcon} alt="More" />
                        </span>
                    )}
                </React.Fragment>
            )}
        </div>
    );
};
