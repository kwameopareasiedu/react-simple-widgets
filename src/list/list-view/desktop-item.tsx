import "./desktop-item.scss";
import React, { useContext } from "react";
import MoreIcon from "../../assets/more.svg";
import { ListViewItemOptionsDialog } from "./options-dialog";
import { DialogProviderContext } from "../../provider/dialog-provider";
import { IListViewOptions } from "../../../types";

interface IListViewDesktopItem {
    item: any;
    index: number;
    options: IListViewOptions;
    props: Array<[string, string | ((item: any, itemIndex: number) => any)]>;
    propValueEvaluator: (item: any, itemIndex: number, propIndex: number) => any;
}

export const ListViewDesktopItem = ({ item, index, props, options, propValueEvaluator }: IListViewDesktopItem): any => {
    const { showDialog } = useContext(DialogProviderContext);

    const showItemDialog = (item: any): void => {
        if (!options.handleOptions) {
            const optionItems = options.items;
            showDialog(helper => <ListViewItemOptionsDialog helper={helper} item={item} options={optionItems} />);
        } else return options.handleOptions(item);
    };

    return (
        <div className="react-simple-widget list-view-desktop-item">
            {props.map((prop: any, propIndex: number) => (
                <span key={"item" + propIndex}>{propValueEvaluator(item, index, propIndex)}</span>
            ))}

            {options && (
                <span className="item-options" onClick={(): void => showItemDialog(item)}>
                    <img src={MoreIcon} alt="More" />
                </span>
            )}
        </div>
    );
};
