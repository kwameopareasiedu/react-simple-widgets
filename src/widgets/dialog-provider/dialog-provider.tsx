import React, { createContext, useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogBuilder,
  DialogOptions,
  DialogProviderContext as Context,
  DialogProviderProps
} from "../../../types";
import { DialogView } from "./dialog-view";
import styled from "styled-components";

export const DialogProviderContext = createContext<Context>(null);

const DialogProviderRoot = styled.div.attrs(props => ({
  className: "react-simple-widget dialog-provider " + props.className
}))`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 999999;

  > * {
    pointer-events: all;
  }
`;

export const DialogProvider = ({
  children
}: DialogProviderProps): JSX.Element => {
  const [dialogs, setDialogs] = useState<Array<Dialog>>([]);
  const escapeKeyHandlers = useRef<Array<(e: KeyboardEvent) => void>>([]);
  const bodyOverflowRef = useRef<string>(null);

  const showDialog = (
    builder: DialogBuilder,
    options?: DialogOptions
  ): void => {
    const dialog: Dialog = { id: Math.random().toString() };

    const onDismiss = (returnValue?: any) => {
      setDialogs(dialogs => dialogs.filter(d => d !== dialog));
      if (options?.onDismissed) options?.onDismissed(returnValue);

      // Remove the associated escape handler from the stack
      const handler = escapeKeyHandlers.current.splice(0, 1)[0];
      if (handler) window.removeEventListener("keyup", handler);
    };

    const onSend = (message?: any) => {
      if (options?.onMessage) options?.onMessage(message);
    };

    dialog.onDismiss = onDismiss;
    dialog.options = options || {};
    dialog.widget = builder({
      dismiss: onDismiss,
      send: onSend
    });
    setupEscapeHandler(onDismiss, options?.escapeDismissible);
    setDialogs(dialogs => [...dialogs, dialog]);

    // TODO: Implement window pop state to handle back button on mobile devices
  };

  const setupEscapeHandler = (
    dismiss: Function,
    escapeDismissible = true
  ): void => {
    const escapeHandler = (e: KeyboardEvent): void => {
      if (e.key === "Escape" && !e.defaultPrevented) {
        e.stopImmediatePropagation();
        e.stopPropagation();

        if (escapeDismissible) {
          dismiss();
          escapeKeyHandlers.current = escapeKeyHandlers.current.filter(
            h => h != escapeHandler
          );
          window.removeEventListener("keyup", escapeHandler);
        }
      }
    };

    // Insert the new handler at the first position
    escapeKeyHandlers.current.unshift(escapeHandler);

    // Re-register the handler array so that the new handler receives the keyup event first
    for (const handler of escapeKeyHandlers.current)
      window.removeEventListener("keyup", handler);
    for (const handler of escapeKeyHandlers.current)
      window.addEventListener("keyup", handler);
  };

  useEffect(() => {
    if (dialogs.length > 0) {
      if (bodyOverflowRef.current === null) {
        // Store the overflow style to restore when all dialogs are dismissed
        bodyOverflowRef.current = document.body.style.overflow;
        document.body.style.overflow = "hidden";
      }
    } else {
      document.body.style.overflow = bodyOverflowRef.current;
      bodyOverflowRef.current = null;
    }
  }, [dialogs]);

  return (
    <DialogProviderContext.Provider value={{ showDialog }}>
      {children}
      <DialogProviderRoot>
        {dialogs.map(dialog => (
          <DialogView key={dialog.id} dialog={dialog} />
        ))}
      </DialogProviderRoot>
    </DialogProviderContext.Provider>
  );
};
