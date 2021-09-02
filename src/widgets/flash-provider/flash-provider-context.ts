import { createContext } from "react";
import { FlashProviderContext as IFlashProviderContext } from "../../../types";

export const FlashProviderContext = createContext<IFlashProviderContext>(null);
