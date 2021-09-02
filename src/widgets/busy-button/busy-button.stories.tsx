import React, { useState } from "react";
import { BusyButton } from "./busy-button";

export default { title: "BusyButton", component: BusyButton };

export const Default = () => {
    const [busy, setBusy] = useState(false);

    return (
        <BusyButton busy={busy} className="btn btn-primary btn-sm" onClick={() => setBusy(true)}>
            Not busy
        </BusyButton>
    );
};

export const Busy = () => (
    <BusyButton busy={true} className="btn btn-primary btn-sm">
        Busy
    </BusyButton>
);
