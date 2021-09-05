import React, { useEffect, useState } from "react";
import { DialogProvider } from "../dialog-provider/dialog-provider";
import { FilePicker } from "./file-picker";
import { action } from "@storybook/addon-actions";

export default { title: "FilePicker", component: FilePicker };

export const usage = (): any => {
    const ExampleApp = (): any => {
        const [file, setFile] = useState<File>();

        useEffect(() => {
            if (file) action("File changed")(file.name);
        }, [file]);

        return (
            <div className="row">
                <div className="col-12 col-md-6 mb-4">
                    <p>This file picker has file size limit of 1MB allows only png and jpg extensions</p>

                    <FilePicker
                        limit={1024 * 1024}
                        className="btn btn-primary btn-sm"
                        extensions={["jpg", "png"]}
                        label="Select file"
                        onChange={setFile}
                    />
                </div>
            </div>
        );
    };

    return (
        <DialogProvider>
            <ExampleApp />
        </DialogProvider>
    );
};
