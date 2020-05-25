import "./options-dialog.scss";
import React from "react";
import { IDialogHelper } from "../../../types";

interface IListViewItemOptionsDialog {
    item: any;
    helper: IDialogHelper;
    options?: Array<[string, (item: any, optionIndex: number) => void]>;
}

export const ListViewItemOptionsDialog = ({ helper, item, options }: IListViewItemOptionsDialog): any => {
    const interceptOnClick = (optionIndex: number, callback: Function): void => {
        callback(item, optionIndex);
        helper.dismiss();
    };

    return (
        <div className="react-simple-widget list-view-item-options-dialog card">
            <div className="card-body">
                <p className="text-center">Select an option</p>

                <div className="list-group list-group-flush">
                    {options.map(([label, callback], i) => (
                        <button
                            type="button"
                            key={label + i}
                            className="list-group-item list-group-item-action"
                            onClick={(): void => interceptOnClick(i, callback)}>
                            {label}
                        </button>
                    ))}
                </div>

                <button type="button" className="btn btn-link btn-sm btn-block" onClick={helper.dismiss}>
                    Close
                </button>
            </div>
        </div>
    );
};
