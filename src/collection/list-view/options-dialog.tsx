import "./options-dialog.scss";
import React from "react";
import { ListViewOption } from "./types";
import { ConfirmDialog } from "../../widgets/confirm-dialog";
import { DialogHelper } from "../../providers/dialog-provider/types";

interface IListViewItemOptionsDialog {
    item: any;
    index: number;
    helper: DialogHelper;
    options?: Array<ListViewOption>;
}

export const ListViewItemOptionsDialog = ({ helper, item, index, options }: IListViewItemOptionsDialog): any => {
    return (
        <div className="react-simple-widget list-view-item-options-dialog card">
            <div className="card-body">
                <p className="text-center">Select an option</p>

                <div className="list-group list-group-flush">
                    {options.map(({ label, confirmation, onClick }, optionIndex) => {
                        const callbackWrapper = (): void => {
                            onClick(item, index);
                            helper.dismiss();
                        };

                        if (confirmation) {
                            return (
                                <ConfirmDialog key={label + optionIndex} onConfirm={callbackWrapper} type={confirmation[0]}>
                                    <p>{confirmation[1]}</p>
                                    <button type="button" key={label + optionIndex} className="list-group-item list-group-item-action">
                                        {label}
                                    </button>
                                </ConfirmDialog>
                            );
                        }

                        return (
                            <button
                                type="button"
                                key={label + optionIndex}
                                className="list-group-item list-group-item-action"
                                onClick={callbackWrapper}>
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
