import React, { useContext, useState } from "react";
import { DialogSize, FilePickerProps } from "../../../types";
import { DialogProviderContext } from "../dialog-provider/dialog-provider";
import { FilePickerDialog } from "./file-picker-dialog";
import styled from "styled-components";

const FilePickerRoot = styled.div.attrs(props => ({
  className: "react-simple-widget file-picker " + props.className
}))``;

export const FilePicker = ({
  limit,
  extensions,
  validator,
  onClick,
  onChange,
  children,
  ...rest
}: FilePickerProps) => {
  const { showDialog } = useContext(DialogProviderContext);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [fileName, setFileName] = useState(null);

  const openFileDialog = (): void => {
    if (dialogOpen) return;

    showDialog(
      helper => (
        <FilePickerDialog
          helper={helper}
          limit={limit}
          extensions={extensions}
          validator={validator}
        />
      ),
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
    <FilePickerRoot
      onClick={e => {
        openFileDialog();
        if (onClick) onClick(e);
      }}
      onKeyUp={onKeyUp}
      tabIndex={0}
      {...rest}>
      {!fileName ? (
        <span className="no-selection">
          {children || "No file selected. Click to upload"}
        </span>
      ) : (
        <span className="meta">{fileName}</span>
      )}
    </FilePickerRoot>
  );
};
