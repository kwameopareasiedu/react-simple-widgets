import React, { useContext } from "react";
import { DialogProvider, DialogProviderContext } from "./dialog-provider";
import { DialogHelper, DialogSize } from "../../../types";
import { Meta } from "@storybook/react";

export default {
  title: "Dialog Provider",
  component: DialogProvider
} as Meta;

export const Default = (): any => {
  const Dialog = ({ helper }: { helper: DialogHelper }): any => {
    return (
      <div className="card">
        <div className="card-body">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
            Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
            pede.
          </p>

          <button className="btn btn-secondary btn-sm" onClick={helper.dismiss}>
            Close dialog
          </button>
        </div>
      </div>
    );
  };

  const DialogWithReturnValue = ({ helper }: { helper: DialogHelper }): any => {
    return (
      <div className="card">
        <div className="card-body">
          <p>
            Click on a button to close the dialog and{" "}
            <strong>return a value to the host</strong>
          </p>

          <button
            className="btn btn-secondary btn-sm"
            onClick={() => helper.dismiss("A")}>
            A
          </button>
          <span>&nbsp;</span>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => helper.dismiss("B")}>
            B
          </button>
          <span>&nbsp;</span>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => helper.dismiss("C")}>
            C
          </button>
          <span>&nbsp;</span>
          <button
            className="btn btn-link btn-sm"
            onClick={() => helper.dismiss()}>
            Cancel
          </button>
        </div>
      </div>
    );
  };

  const BackgroundDismissibleDialog = (): any => {
    return (
      <div className="card">
        <div className="card-body">
          <p className="mb-0 text-center">Click the background to dismiss</p>
        </div>
      </div>
    );
  };

  const NonEscapeDismissibleDialog = ({
    helper
  }: {
    helper: DialogHelper;
  }): any => {
    return (
      <div className="card">
        <div className="card-body">
          <p>
            Pressing the <code>Escape</code> key will not dismiss this dialog.
            Only clicking the button will dismiss it.
          </p>

          <button className="btn btn-secondary btn-sm" onClick={helper.dismiss}>
            Close dialog
          </button>
        </div>
      </div>
    );
  };

  const MessageDialog = ({ helper }: { helper: DialogHelper }): any => {
    return (
      <div className="card">
        <div className="card-body">
          <p>
            Click the button to send a message to the host{" "}
            <strong>without closing the dialog</strong>
          </p>

          <button
            className="btn btn-primary btn-sm me-2"
            onClick={() => helper.send("Hello")}>
            Send message (Hello)
          </button>

          <button className="btn btn-link btn-sm" onClick={helper.dismiss}>
            Close dialog
          </button>
        </div>
      </div>
    );
  };

  const Showcase = (): any => {
    const { showDialog } = useContext(DialogProviderContext);

    const openDialog = (dialogSize: DialogSize): void => {
      showDialog(helper => <Dialog helper={helper} />, { size: dialogSize });
    };

    const openAllDialogs = (): void => {
      openDialog(DialogSize.SMALL);
      openDialog(DialogSize.MEDIUM);
      openDialog(DialogSize.WIDE);
      openDialog(DialogSize.FULL);
    };

    const openDialogForValue = () => {
      showDialog(helper => <DialogWithReturnValue helper={helper} />, {
        size: DialogSize.MEDIUM,
        onDismissed: val => {
          if (val) alert(`Dialog returned a value of ${val}`);
        }
      });
    };

    const openBackgroundDismissibleDialog = (): void => {
      showDialog(() => <BackgroundDismissibleDialog />, {
        backgroundDismissible: true
      });
    };

    const openNonEscapeDismissibleDialog = (): void => {
      showDialog(helper => <NonEscapeDismissibleDialog helper={helper} />, {
        escapeDismissible: false
      });
    };

    const openMessageDialog = (): void => {
      showDialog(helper => <MessageDialog helper={helper} />, {
        onMessage: message => {
          alert(`Dialog sent a message: ${message}`);
        }
      });
    };

    return (
      <div>
        <button
          className="btn btn-primary btn-sm mb-2"
          onClick={(): void => openDialog(DialogSize.SMALL)}>
          Open small dialog
        </button>
        <span>&nbsp;</span>
        <button
          className="btn btn-primary btn-sm mb-2"
          onClick={(): void => openDialog(DialogSize.MEDIUM)}>
          Open medium dialog
        </button>
        <span>&nbsp;</span>
        <button
          className="btn btn-primary btn-sm mb-2"
          onClick={(): void => openDialog(DialogSize.WIDE)}>
          Open wide dialog
        </button>
        <span>&nbsp;</span>
        <button
          className="btn btn-primary btn-sm mb-2"
          onClick={(): void => openDialog(DialogSize.FULL)}>
          Open full dialog
        </button>
        <span>&nbsp;</span>
        <button className="btn btn-info btn-sm mb-2" onClick={openAllDialogs}>
          Open all dialogs
        </button>
        <span>&nbsp;</span>
        <button
          className="btn btn-success btn-sm mb-2"
          onClick={openDialogForValue}>
          Open dialog for value
        </button>
        <span>&nbsp;</span>
        <button
          className="btn btn-warning btn-sm mb-2"
          onClick={openBackgroundDismissibleDialog}>
          Open background dismissible dialog
        </button>
        <span>&nbsp;</span>
        <button
          className="btn btn-secondary btn-sm mb-2"
          onClick={openNonEscapeDismissibleDialog}>
          Open non-escape dismissible dialog
        </button>
        <span>&nbsp;</span>
        <button
          className="btn btn-secondary btn-sm mb-2"
          onClick={openMessageDialog}>
          Open message dialog
        </button>
      </div>
    );
  };

  return (
    <DialogProvider>
      <Showcase />
    </DialogProvider>
  );
};
