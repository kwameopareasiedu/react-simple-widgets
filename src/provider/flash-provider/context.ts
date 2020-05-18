import { createContext } from "react";
import { IFlashProviderContext } from "../../../types";

export const FlashProviderContext = createContext<IFlashProviderContext>(null);
