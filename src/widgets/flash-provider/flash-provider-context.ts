import { createContext } from "react";
import { FlashProviderContext as FlashProviderContextProps } from "../../../types";

export const FlashProviderContext = createContext<FlashProviderContextProps>(null);
