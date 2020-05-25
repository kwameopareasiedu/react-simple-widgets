import "./desktop-item.scss";
import React, { useContext } from "react";
import MoreIcon from "../../assets/more.svg";
import { ListViewItemOptionsDialog } from "./options-dialog";
import { DialogProviderContext } from "../../provider/dialog-provider";

interface IListViewDesktopItem {
    item: any;
    index: number;
    options: Array<[string, (item: any, optionIndex: number) => void]>;
    props: Array<[string, string | ((item: any, itemIndex: number) => any)]>;
    propValueEvaluator: (item: any, itemIndex: number, propIndex: number) => any;
    onOptionsClick?: (item: any, index: number) => void;
}

export const ListViewDesktopItem = ({ item, index, props, options, onOptionsClick, propValueEvaluator }: IListViewDesktopItem): any => {
    const { showDialog } = useContext(DialogProviderContext);

    const showItemDialog = (item: any): void => {
        if (!!onOptionsClick) return onOptionsClick(item, index);
        showDialog(helper => <ListViewItemOptionsDialog helper={helper} item={item} options={options} />);
    };

    return (
        <div className="react-simple-widget list-view-desktop-item">
            {props.map((prop: any, propIndex: number) => (
                <span key={"item" + propIndex}>{propValueEvaluator(item, index, propIndex)}</span>
            ))}

            {(!!options || !!onOptionsClick) && (
                <span className="item-options" onClick={(): void => showItemDialog(item)}>
                    <img src={MoreIcon} alt="More" />
                </span>
            )}
        </div>
    );
};
