import React from "react";
import { BusyButton } from "./index";

export default { title: "BusyButton", component: BusyButton };

export const normal = () => (
    <BusyButton busy={false} className="btn btn-primary btn-sm">
        Not busy
    </BusyButton>
);

export const busy = () => (
    <BusyButton busy={true} className="btn btn-primary btn-sm">
        Busy
    </BusyButton>
);
