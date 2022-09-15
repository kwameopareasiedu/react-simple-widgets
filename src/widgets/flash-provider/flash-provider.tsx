import React, { createContext, useContext } from "react";
import {
  FlashOptionalArgs,
  FlashProviderProps,
  FlashProviderContext as Context,
  FlashType
} from "../../../types";
import { DialogProviderContext } from "../dialog-provider/dialog-provider";
import { FlashView } from "./flash-view";

export const FlashProviderContext = createContext<Context>(null);

export const FlashProvider = ({
  children,
  builder
}: FlashProviderProps): JSX.Element => {
  const { showDialog } = useContext(DialogProviderContext);

  const flash = (
    type: FlashType,
    title: string,
    message: any,
    onDismissed?: () => void,
    optionalArgs?: FlashOptionalArgs
  ): void => {
    const btnText = optionalArgs?.btnText;
    const closeTimer = optionalArgs?.closeTimerMs;

    showDialog(
      helper => {
        if (builder) {
          return builder({
            type,
            title,
            message,
            onDismissed: () => {
              if (onDismissed) onDismissed();
              helper.dismiss();
            },
            btnText,
            closeTimerMs: closeTimer
          });
        } else {
          return (
            <FlashView
              type={type}
              title={title}
              message={message}
              buttonText={btnText}
              closeTimerMs={closeTimer}
              onDismiss={helper.dismiss}
            />
          );
        }
      },
      { onDismissed }
    );
  };

  const flashError = (
    title: string,
    message?: any,
    onDismissed?: () => void,
    optionalArgs?: FlashOptionalArgs
  ): void => {
    flash(FlashType.ERROR, title, message, onDismissed, optionalArgs);
  };

  const flashWarning = (
    title: string,
    message?: any,
    onDismissed?: () => void,
    optionalArgs?: FlashOptionalArgs
  ): void => {
    flash(FlashType.WARNING, title, message, onDismissed, optionalArgs);
  };

  const flashInfo = (
    title: string,
    message?: any,
    onDismissed?: () => void,
    optionalArgs?: FlashOptionalArgs
  ): void => {
    flash(FlashType.INFO, title, message, onDismissed, optionalArgs);
  };

  const flashSuccess = (
    title: string,
    message?: any,
    onDismissed?: () => void,
    optionalArgs?: FlashOptionalArgs
  ): void => {
    flash(FlashType.SUCCESS, title, message, onDismissed, optionalArgs);
  };

  return (
    <FlashProviderContext.Provider
      value={{ flashError, flashWarning, flashInfo, flashSuccess }}>
      {children}
    </FlashProviderContext.Provider>
  );
};
