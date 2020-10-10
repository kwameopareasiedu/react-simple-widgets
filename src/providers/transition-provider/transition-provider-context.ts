import { createContext } from "react";
import { TransitionProviderContext as Props } from "./types";

export const TransitionProviderContext = createContext<Props>(null);
