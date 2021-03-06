import React, { useState } from "react";
import { FieldDecorationType } from "../field-decoration/types";
import { DialogProvider } from "../../providers/dialog-provider";
import { FilePicker } from "./index";

export default {
    title: "File Picker",
    component: FilePicker,
    decorators: [(storyFn: any) => <div style={{ padding: "30px" }}>{storyFn()}</div>]
};

export const usage = (): any => {
    const ExampleApp = (): any => {
        const [file1, setFile1] = useState<File>();
        const [file2, setFile2] = useState<File>();
        const [file3, setFile3] = useState<File>();

        return (
            <div className="row">
                <div className="col-12 col-md-6 mb-4">
                    <p>This file picker has file size limit of 1MB allows only png and jpg extensions</p>
                    <FilePicker
                        file={file1}
                        limit={1024 * 1024}
                        extensions={["jpg", "png"]}
                        label="Select file"
                        onChange={setFile1}
                    />
                </div>

                <div className="col-12 col-md-6 mb-4">
                    <p>This file picker allows only files with a name length of less than 20 characters</p>
                    <FilePicker
                        file={file2}
                        label="Select file"
                        decoration={FieldDecorationType.UNDERLINE}
                        validator={file => (file.name.length > 20 ? "File name must be less than 20 characters" : null)}
                        onChange={setFile2}
                    />
                </div>

                <div className="col-12">
                    <p>This file picker combines all rules of the previous pickers</p>
                    <FilePicker
                        file={file3}
                        limit={1024 * 1024}
                        extensions={["jpg", "png"]}
                        label="Select file"
                        decoration={FieldDecorationType.FLOATING_LABEL}
                        validator={file => (file.name.length > 20 ? "File name must be less than 20 characters" : null)}
                        onChange={setFile3}
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
