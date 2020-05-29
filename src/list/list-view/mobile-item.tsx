import "./mobile-item.scss";
import React, { useContext } from "react";
import { ListViewItemOptionsDialog } from "./options-dialog";
import { DialogProviderContext } from "../../provider/dialog-provider";
import { IListViewOptions } from "../../../types";
import MoreIcon from "../../assets/more.svg";

interface IListViewMobileItem {
    item: any;
    index: number;
    options: IListViewOptions;
    props: Array<[string, string | ((item: any, itemIndex: number) => any)]>;
    propValueEvaluator: (item: any, itemIndex: number, propIndex: number) => any;
}

export const ListViewMobileItem = ({ item, index, props, options, propValueEvaluator }: IListViewMobileItem): any => {
    const { showDialog } = useContext(DialogProviderContext);

    const showItemDialog = (item: any): void => {
        if (!options.handleOptions) {
            const optionItems = options.items;
            showDialog(helper => <ListViewItemOptionsDialog helper={helper} item={item} options={optionItems} />);
        } else return options.handleOptions(item);
    };

    return (
        <div className="react-simple-widget list-view-mobile-item">
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
                <span className="prop-value item-options" onClick={(): void => showItemDialog(item)}>
                    <img src={MoreIcon} alt="More" />
                </span>
            )}
        </div>
    );
};
