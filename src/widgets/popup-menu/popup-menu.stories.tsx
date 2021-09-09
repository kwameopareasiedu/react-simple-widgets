import React from "react";
import { PopupMenu } from "./popup-menu";

export default { title: "PopupMenu", component: PopupMenu };

export const Default = () => (
    <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="d-flex justify-content-between">
            <PopupMenu>
                <button className="btn btn-link btn-sm border-0 text-decoration-none">Options</button>

                <div className="card">
                    <ul className="list-group list-group-flush">
                        <button className="list-group-item" onClick={() => console.log("Option 1 clicked!")}>
                            This is option 1
                        </button>
                        <button className="list-group-item" onClick={() => console.log("Option 2 clicked!")}>
                            Option 2
                        </button>
                        <button className="list-group-item" onClick={() => console.log("Option 3 clicked!")}>
                            Option 3
                        </button>
                        <button className="list-group-item" onClick={() => console.log("Option 4 clicked!")}>
                            Option 4
                        </button>
                    </ul>
                </div>
            </PopupMenu>

            <PopupMenu>
                <button className="btn btn-link btn-sm border-0 text-decoration-none">Options</button>

                {closePopup => (
                    <div className="card">
                        <ul className="list-group list-group-flush">
                            <button
                                className="list-group-item"
                                onClick={() => {
                                    console.log("Option 1 clicked!");
                                    closePopup();
                                }}>
                                This is option 1
                            </button>
                            <button
                                className="list-group-item"
                                onClick={() => {
                                    console.log("Option 2 clicked!");
                                    closePopup();
                                }}>
                                Option 2
                            </button>
                        </ul>
                    </div>
                )}
            </PopupMenu>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
    </div>
);
