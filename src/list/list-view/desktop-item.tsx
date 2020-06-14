import "./desktop-item.scss";
import React, { useContext } from "react";
import MoreIcon from "../../assets/more.svg";
import { ListViewItemOptionsDialog } from "./options-dialog";
import { DialogProviderContext } from "../../provider/dialog-provider";
import { IListViewOptions } from "../../../types";
import { Loader } from "../../misc/loader";

interface IListViewDesktopItem {
    item: any;
    index: number;
    options: IListViewOptions;
    props: Array<[string, string | ((item: any, itemIndex: number) => any)]>;
    propValueEvaluator: (item: any, itemIndex: number, propIndex: number) => any;
    onClick?: (item: any, itemIndex?: number) => void;
}

export const ListViewDesktopItem = ({ item, index, props, options, propValueEvaluator, onClick }: IListViewDesktopItem): any => {
    const { showDialog } = useContext(DialogProviderContext);

    const className = (): string => {
        const classes = ["react-simple-widget", "list-view-desktop-item"];
        if (onClick) classes.push("list-view-desktop-item-clickable");
        return classes.join(" ");
    };

    const showItemDialog = (e: React.MouseEvent, item: any): void => {
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
            {props.map((prop: any, propIndex: number) => (
                <span key={"item" + propIndex}>{propValueEvaluator(item, index, propIndex)}</span>
            ))}

            {options && (
                <React.Fragment>
                    {options.busy && options.busy(item, index) && <Loader className="item-options" />}
                    {(!options.busy || !options.busy(item, index)) && (
                        <span className="item-options" onClick={e => showItemDialog(e, item)}>
                            <img src={MoreIcon} alt="More" />
                        </span>
                    )}
                </React.Fragment>
            )}
        </div>
    );
};
