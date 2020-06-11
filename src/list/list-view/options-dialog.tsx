import "./options-dialog.scss";
import React from "react";
import { IDialogHelper, IListViewOptionsConfirmation } from "../../../types";
import { ConfirmDialog } from "../../misc/confirm-dialog";

interface IListViewItemOptionsDialog {
    item: any;
    index: number;
    helper: IDialogHelper;
    options?: Array<[string, (item: any, itemIndex?: number) => any, IListViewOptionsConfirmation | boolean]>;
}

export const ListViewItemOptionsDialog = ({ helper, item, index, options }: IListViewItemOptionsDialog): any => {
    return (
        <div className="react-simple-widget list-view-item-options-dialog card">
            <div className="card-body">
                <p className="text-center">Select an option</p>

                <div className="list-group list-group-flush">
                    {options.map(([label, callback, confirmationData], i) => {
                        const callbackWrapper = (): void => {
                            callback(item, index);
                            helper.dismiss();
                        };

                        if (confirmationData) {
                            return (
                                <ConfirmDialog
                                    key={label + i}
                                    onConfirm={callbackWrapper}
                                    theme={(confirmationData as IListViewOptionsConfirmation).theme}>
                                    <p>{(confirmationData as IListViewOptionsConfirmation).label}</p>
                                    <button type="button" key={label + i} className="list-group-item list-group-item-action">
                                        {label}
                                    </button>
                                </ConfirmDialog>
                            );
                        }

                        return (
                            <button type="button" key={label + i} className="list-group-item list-group-item-action" onClick={callbackWrapper}>
                                {label}
                            </button>
                        );
                    })}
                </div>

                <button type="button" className="btn btn-link btn-sm btn-block" onClick={helper.dismiss}>
                    Close
                </button>
            </div>
        </div>
    );
};
