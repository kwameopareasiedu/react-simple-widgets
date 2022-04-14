import React, { useContext, useEffect } from "react";
import { FlashType, FlashProvider as IFlashProvider, FlashOptionalArgs } from "../../../types";
import { FlashProviderContext } from "./flash-provider-context";
import { DialogProviderContext } from "../dialog-provider/dialog-provider-context";
import { FlashView } from "./flash-view";

const FLASH_PROVIDER_CUSTOM_BUILDER_WINDOW_KEY = "flash-provider-custom-builder-window-key";

export const FlashProvider = ({ children, builder }: IFlashProvider): JSX.Element => {
  const { showDialog } = useContext(DialogProviderContext);

  useEffect(() => {
    if (builder != null) (window as any)[FLASH_PROVIDER_CUSTOM_BUILDER_WINDOW_KEY] = builder;
  }, []);

  const flash = (
    type: FlashType,
    title: string,
    message: any,
    onFlashDismissed?: () => void,
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
            onFlashDismissed: () => {
              if (onFlashDismissed) onFlashDismissed();
              helper.dismiss();
            },
            btnText,
            closeTimerMs: closeTimer
          });
        } else if ((window as any)[FLASH_PROVIDER_CUSTOM_BUILDER_WINDOW_KEY]) {
          return (window as any)[FLASH_PROVIDER_CUSTOM_BUILDER_WINDOW_KEY]({
            type,
            title,
            message,
            onFlashDismissed: () => {
              if (onFlashDismissed) onFlashDismissed();
              helper.dismiss();
            },
            btnText,
            closeTimer
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
      { onDismissed: onFlashDismissed }
    );
  };

  const flashError = (
    title: string,
    message?: any,
    onFlashDismissed?: () => void,
    optionalArgs?: FlashOptionalArgs
  ): void => {
    flash(FlashType.ERROR, title, message, onFlashDismissed, optionalArgs);
  };

  const flashWarning = (
    title: string,
    message?: any,
    onFlashDismissed?: () => void,
    optionalArgs?: FlashOptionalArgs
  ): void => {
    flash(FlashType.WARNING, title, message, onFlashDismissed, optionalArgs);
  };

  const flashInfo = (
    title: string,
    message?: any,
    onFlashDismissed?: () => void,
    optionalArgs?: FlashOptionalArgs
  ): void => {
    flash(FlashType.INFO, title, message, onFlashDismissed, optionalArgs);
  };

  const flashSuccess = (
    title: string,
    message?: any,
    onFlashDismissed?: () => void,
    optionalArgs?: FlashOptionalArgs
  ): void => {
    flash(FlashType.SUCCESS, title, message, onFlashDismissed, optionalArgs);
  };

  return (
    <FlashProviderContext.Provider value={{ flashError, flashWarning, flashInfo, flashSuccess }}>
      {children}
    </FlashProviderContext.Provider>
  );
};
