import { createContext } from "react";
import { FlashProviderContext as Props } from "./types";

export const FlashProviderContext = createContext<Props>(null);
