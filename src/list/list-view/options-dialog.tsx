import "./options-dialog.scss";
import React from "react";
import { ConfirmDialog } from "../../misc/confirm-dialog";
import { IDialogHelper, IListViewOptionItem } from "../../../types";

interface IListViewItemOptionsDialog {
    item: any;
    index: number;
    helper: IDialogHelper;
    options?: Array<IListViewOptionItem>;
}

export const ListViewItemOptionsDialog = ({ helper, item, index, options }: IListViewItemOptionsDialog): any => {
    return (
        <div className="react-simple-widget list-view-item-options-dialog card">
            <div className="card-body">
                <p className="text-center">Select an option</p>

                <div className="list-group list-group-flush">
                    {options.length === 0 && <p className="no-options">No options for this item</p>}

                    {options.map(({ label, confirmation, confirmationTheme, onClick }, i) => {
                        const callbackWrapper = (): void => {
                            onClick(item, index);
                            helper.dismiss();
                        };

                        if (confirmation) {
                            return (
                                <ConfirmDialog key={label + i} onConfirm={callbackWrapper} theme={confirmationTheme}>
                                    <p>{confirmation}</p>
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
