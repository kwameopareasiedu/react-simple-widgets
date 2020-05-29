import "./options-dialog.scss";
import React from "react";
import { IDialogHelper } from "../../../types";

interface IListViewItemOptionsDialog {
    item: any;
    helper: IDialogHelper;
    options?: Array<[string, (item: any) => any]>;
}

export const ListViewItemOptionsDialog = ({ helper, item, options }: IListViewItemOptionsDialog): any => {
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
                            onClick={(): void => {
                                callback(item);
                                helper.dismiss();
                            }}>
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
