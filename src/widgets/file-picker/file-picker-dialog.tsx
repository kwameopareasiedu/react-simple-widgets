import React, { useEffect, useRef, useState } from "react";
import { FilePickerDialogProps } from "../../../types";
import styled from "styled-components";

const FilePickerDialogRoot = styled.div.attrs(props => ({
  className: "react-simple-widget file-picker-dialog " + props.className
}))`
  .card-body {
    padding: 20px 30px 30px;
  }

  header {
    p {
      font-weight: 400;
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 2px;
    }
  }

  .drop-area {
    border: 2px dashed #aeaeae;
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 40px 70px;

    p {
      margin: 0;
      color: #888;
      font-size: 90%;
    }

    p.or-separator {
      position: relative;
      font-size: 80%;
    }

    p.or-separator::before,
    p.or-separator::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      height: 2px;
      width: calc(50% - 15px);
      background-color: #e3e3e3;
    }

    p.or-separator::after {
      left: unset;
      right: 0;
    }
  }

  .drop-area:hover {
    cursor: pointer;
    border-style: solid;
  }

  .drop-area:focus,
  .drop-area:active {
    outline: none;
    box-shadow: none;
    border-style: solid;
    border-color: var(--rsw-primary-color);
  }

  .meta,
  .error {
    color: #888;
    padding: 8px 30px;
    margin: 0 -30px 20px;
    background-color: #efefef;
    font-style: italic;
    text-align: center;
  }

  .error {
    font-size: 80%;
    color: var(--rsw-error-color);
    font-weight: bold;
  }

  button.btn-primary {
    margin-bottom: 0.5rem;

    @media screen and (min-width: 576px) {
      margin-bottom: 0;
    }
  }
`;

export const FilePickerDialog = ({
  helper,
  limit,
  extensions,
  validator
}: FilePickerDialogProps) => {
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
    const extension = fn
      .substring(fn.lastIndexOf(".") + 1, fn.length)
      .toLowerCase();
    const validationError = validator && validator(file);

    if (extensions && !extensions.includes(extension.toLowerCase()))
      errors.push(`Valid extensions are: ${extensions.join(", ")}`);
    if (limit && limit > 0 && file.size > limit)
      errors.push(`File has exceeded the ${friendlyFileSize(limit)} limit`);
    if (validationError) errors.push(validationError);

    if (errors.length > 1)
      setError(
        errors.slice(0, errors.length - 1).join(", ") +
          " and " +
          errors[errors.length - 1]
      );
    else if (errors.length === 1) setError(errors[0]);

    if (errors.length === 0) {
      setFile(file);
      setError(null);
    } else setFile(null);
  };

  return (
    <FilePickerDialogRoot className="card">
      <div className="card-body">
        <input
          ref={triggerInputRef}
          type="file"
          onChange={(e): void => onFileDrop(e.target.files[0])}
          hidden
        />

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
            <button
              type="button"
              className="btn btn-link btn-sm"
              onClick={(): void => helper.dismiss()}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </FilePickerDialogRoot>
  );
};
