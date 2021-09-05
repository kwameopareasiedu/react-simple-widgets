import "./file-picker.scss";
import React, { useContext, useState } from "react";
import { DialogSize, FilePicker as IFilePicker } from "../../../types";
import { DialogProviderContext } from "../dialog-provider/dialog-provider-context";
import { FilePickerDialog } from "./file-picker-dialog";

export const FilePicker = ({
    limit,
    extensions,
    validator,
    className: _className,
    onClick,
    onChange,
    ...rest
}: IFilePicker) => {
    const { showDialog } = useContext(DialogProviderContext);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [fileName, setFileName] = useState(null);

    const className = (): string => {
        const classes = ["react-simple-widget", "file-picker"];
        if (_className) classes.push(_className);
        return classes.join(" ");
    };

    const openFileDialog = (): void => {
        if (dialogOpen) return;

        showDialog(
            helper => <FilePickerDialog helper={helper} limit={limit} extensions={extensions} validator={validator} />,
            {
                size: DialogSize.SMALL,
                onDismissed: (file: File) => {
                    if (file) {
                        setFileName(file.name);
                        onChange(file);
                    }

                    setDialogOpen(false);
                }
            }
        );

        setDialogOpen(true);
    };

    const onKeyUp = (e: React.KeyboardEvent): void => {
        if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            e.stopPropagation();
            openFileDialog();
        }
    };

    return (
        <div
            className={className()}
            onClick={e => {
                openFileDialog();
                if (onClick) onClick(e);
            }}
            onKeyUp={onKeyUp}
            tabIndex={0}
            {...rest}>
            {!fileName ? (
                <span className="no-selection">No file selected. Click to upload</span>
            ) : (
                <span className="meta">{fileName}</span>
            )}
        </div>
    );
};
