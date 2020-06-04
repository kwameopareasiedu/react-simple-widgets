import "./index.scss";
import React, { useContext, useEffect, useRef, useState } from "react";
import { DialogSize, FieldDecorationType, IDialogHelper, IFilePicker } from "../../../types";
import { DialogProviderContext } from "../../provider/dialog-provider";
import { FieldDecoration } from "../../form/field-decoration";

interface IFilePickerDialog {
    label?: string;
    limit?: number;
    helper: IDialogHelper;
    extensions?: Array<string>;
    validator?: (file: File) => string;
}

/** FilePickerDialog is the dialog widget that allows the user to select a file */
const FilePickerDialog = ({ helper, limit, label, extensions, validator }: IFilePickerDialog) => {
    const [file, setFile] = useState<File>();
    const [error, setError] = useState(null);
    const triggerInputRef = useRef();
    const dropAreaRef = useRef();

    useEffect(() => {
        const dropAreaDOMElement: any = dropAreaRef.current;

        const onDragOver = (e: DragEvent): void => {
            e.preventDefault();
            e.stopPropagation();
        };

        const onDrop = (e: DragEvent): void => {
            e.preventDefault();
            e.stopPropagation();

            if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                onFileDrop(e.dataTransfer.files[0]);
                e.dataTransfer.clearData();
            }
        };

        dropAreaDOMElement.addEventListener("dragover", onDragOver);
        dropAreaDOMElement.addEventListener("drop", onDrop);

        return (): void => dropAreaDOMElement.removeEventListener("drop", onDrop);
    }, []);

    const openFileDialog = (e: React.KeyboardEvent | React.MouseEvent): void => {
        e.preventDefault();
        const triggerInputDOMElement: any = triggerInputRef.current;
        triggerInputDOMElement.click();
    };

    const friendlyFileSize = (size: number): string => {
        if (size >= 1073741824) return `${size / 1073741824}GB`;
        if (size >= 1048576) return `${size / 1048576}MB`;
        if (size >= 1024) return `${size / 1024}KB`;
        else return `${size} bytes`;
    };

    const onKeyUp = (e: React.KeyboardEvent): void => {
        if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            e.stopPropagation();
            openFileDialog(e);
        }
    };

    const onFileDrop = (file: File): void => {
        if (!file) return;

        const errors = [];
        const fn = file.name;
        const extension = fn.substring(fn.lastIndexOf(".") + 1, fn.length).toLowerCase();
        const validationError = validator && validator(file);

        if (extensions && !extensions.includes(extension.toLowerCase())) errors.push(`Valid extensions are: ${extensions.join(", ")}`);
        if (limit && limit > 0 && file.size > limit) errors.push(`File exceeded limit of ${friendlyFileSize(limit)}`);
        if (validationError) errors.push(validationError);

        if (errors.length > 1) setError(errors.slice(0, errors.length - 1).join(", ") + " and " + errors[errors.length - 1]);
        else if (errors.length === 1) setError(errors[0]);

        if (errors.length === 0) {
            setFile(file);
            setError(null);
        } else setFile(null);
    };

    return (
        <div className="react-simple-widget file-picker-dialog card">
            <div className="card-body">
                <input ref={triggerInputRef} type="file" onChange={(e): void => onFileDrop(e.target.files[0])} hidden />

                {label && <label>{label}</label>}

                <div ref={dropAreaRef} className="drop-area text-center" tabIndex={0} onClick={openFileDialog} onKeyUp={onKeyUp}>
                    <p className="text-center">Click to select file</p>
                    <p className="text-center or-separator">or</p>
                    <p className="text-center">Drag and drop file</p>
                </div>

                {file && <p className="meta">{file.name}</p>}

                {error && <p className="error">{error}</p>}

                <div className="row">
                    <div className="col-12 col-sm-6">
                        <button
                            type="button"
                            className="btn btn-primary btn-sm btn-block"
                            onClick={(): void => helper.dismiss(file)}
                            disabled={!file}>
                            Select
                        </button>
                    </div>
                    <div className="col-12 col-sm-6">
                        <button type="button" className="btn btn-link btn-sm btn-block" onClick={(): void => helper.dismiss()}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

/**
 * FilePicker is a widget that allows the user select a file from the file system. It uses the
 * dialog to show the picker and thus required DialogProvider to be an ancestor
 */
export const FilePicker = ({ file, error, limit, label, extensions, decoration, validator, onFocus, onBlur, onChange }: IFilePicker) => {
    const { showDialog } = useContext(DialogProviderContext);
    const [dialogOpen, setDialogOpen] = useState(false);

    const openFileDialog = (onFocus: () => void): void => {
        if (dialogOpen) return;

        const options = {
            size: DialogSize.SMALL,
            onDialogDismissed: (file: File) => {
                setDialogOpen(false);
                onChange(file);
            }
        };

        showDialog(helper => <FilePickerDialog helper={helper} label={label} limit={limit} extensions={extensions} validator={validator} />, options);
        setDialogOpen(true);
        onFocus();
    };

    const onKeyUp = (e: React.KeyboardEvent, onFocus: () => void): void => {
        if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            e.stopPropagation();
            openFileDialog(onFocus);
        }
    };

    return (
        <div className="react-simple-widget file-picker">
            <FieldDecoration
                label={label}
                error={error}
                decoration={decoration}
                hasValue={decoration === FieldDecorationType.FLOATING_LABEL ? true : !!file || dialogOpen}>
                {({ onFieldFocus, onFieldBlur }): any => (
                    <div
                        className="trigger"
                        onKeyUp={e => onKeyUp(e, onFieldFocus)}
                        onClick={(): void => openFileDialog(onFieldFocus)}
                        onFocus={() => {
                            onFieldFocus();
                            if (onFocus) onFocus();
                        }}
                        onBlur={() => {
                            onFieldBlur();
                            if (onBlur) onBlur();
                        }}
                        tabIndex={0}>
                        {!file && <p className="no-selection">No file selected</p>}
                        {file && <p className="meta">{file.name}</p>}

                        <small>
                            <i>Click to select a file</i>
                        </small>
                    </div>
                )}
            </FieldDecoration>
        </div>
    );
};
