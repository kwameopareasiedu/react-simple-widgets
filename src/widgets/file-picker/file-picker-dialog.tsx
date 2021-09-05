import "./file-picker-dialog.scss";
import React, { useEffect, useRef, useState } from "react";
import { FilePickerDialog as IFilePickerDialog } from "../../../types";

export const FilePickerDialog = ({ helper, limit, extensions, validator }: IFilePickerDialog) => {
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

        if (extensions && !extensions.includes(extension.toLowerCase()))
            errors.push(`Valid extensions are: ${extensions.join(", ")}`);
        if (limit && limit > 0 && file.size > limit)
            errors.push(`File has exceeded the ${friendlyFileSize(limit)} limit`);
        if (validationError) errors.push(validationError);

        if (errors.length > 1)
            setError(errors.slice(0, errors.length - 1).join(", ") + " and " + errors[errors.length - 1]);
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

                <header className="d-flex justify-content-between align-items-center mb-3">
                    <p className="mb-0">Select File</p>
                </header>

                <div
                    ref={dropAreaRef}
                    className="drop-area text-center"
                    tabIndex={0}
                    onClick={openFileDialog}
                    onKeyUp={onKeyUp}>
                    <p className="text-center">Click to select file</p>
                    <p className="text-center or-separator">or</p>
                    <p className="text-center">Drag and drop file</p>
                </div>

                {file && <p className="meta">{file.name}</p>}

                {error && <p className="error">{error}</p>}

                <div className="row">
                    <div className="col-6 d-grid">
                        <button
                            type="button"
                            className="btn btn-primary btn-sm"
                            onClick={(): void => helper.dismiss(file)}
                            disabled={!file}>
                            Select
                        </button>
                    </div>

                    <div className="col-6 d-grid">
                        <button type="button" className="btn btn-link btn-sm" onClick={(): void => helper.dismiss()}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
