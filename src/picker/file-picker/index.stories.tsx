import React, { useState } from "react";
import { DialogProvider } from "../../provider/dialog-provider";
import { FilePicker } from "./index";
import { FieldDecorationType } from "../../../types";

export default {
    title: "File Picker",
    component: FilePicker,
    decorators: [(storyFn: any) => <div style={{ padding: "30px" }}>{storyFn()}</div>]
};

export const usage = (): any => {
    const ExampleApp = (): any => {
        const [file, setFile] = useState<File>();
        const [file1, setFile1] = useState<File>();
        const [file2, setFile2] = useState<File>();
        const [file3, setFile3] = useState<File>();

        return (
            <div>
                <p>This file picker has a file size limit of 1MB</p>
                <FilePicker
                    file={file}
                    limit={1024 * 1024}
                    label="Select profile document"
                    decoration={FieldDecorationType.NONE}
                    onChange={setFile}
                />

                <hr />

                <p>This file picker allows only png and jpg extensions</p>
                <FilePicker
                    file={file1}
                    extensions={["jpg", "png"]}
                    label="Select profile document"
                    decoration={FieldDecorationType.FLAT}
                    onChange={setFile1}
                />

                <hr />

                <p>This file picker allows only files with a name length of less than 20 characters</p>
                <FilePicker
                    file={file2}
                    label="Select profile document"
                    decoration={FieldDecorationType.UNDERLINE}
                    validator={file => (file.name.length > 20 ? "File name must be less than 20 characters" : null)}
                    onChange={setFile2}
                />

                <hr />

                <p>This file picker combines all rules of the previous pickers</p>
                <FilePicker
                    file={file3}
                    limit={1024 * 10244}
                    extensions={["jpg", "png"]}
                    label="Select profile document"
                    decoration={FieldDecorationType.FLOATING_LABEL}
                    validator={file => (file.name.length > 20 ? "File name must be less than 20 characters" : null)}
                    onChange={setFile3}
                />
            </div>
        );
    };

    return (
        <DialogProvider>
            <ExampleApp />
        </DialogProvider>
    );
};
