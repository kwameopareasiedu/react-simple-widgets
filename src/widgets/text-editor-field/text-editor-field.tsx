import React, { useEffect, useRef, useState } from "react";
import { CustomField } from "../custom-field/custom-field";
import { FieldDecoration } from "../field-decoration/field-decoration";
import { TextEditorFieldProps } from "../../../types";
import styled from "styled-components";

const TextEditorFieldRoot = styled.div.attrs(props => ({
  className: "react-simple-widget text-editor-field " + props.className
}))``;

export const TextEditorField = ({
  name,
  label,
  theme,
  helper,
  asText,
  disabled,
  onChange,
  onFocus,
  onBlur
}: TextEditorFieldProps): any => {
  return (
    <TextEditorFieldRoot>
      <CustomField name={name}>
        {({ value, error, touched, setValue, setTouched }) => (
          <FieldDecoration
            label={label}
            error={touched && error}
            helper={helper}
            disabled={disabled}>
            {({ onFieldFocus, onFieldBlur }) => (
              <TextEditor
                theme={theme}
                value={value}
                readOnly={disabled}
                onChange={html => {
                  if (asText) {
                    const div = document.createElement("div");
                    div.innerHTML = html;
                    const text = div.textContent;

                    setValue(text);
                    if (onChange) {
                      onChange(text);
                    }
                  } else {
                    setValue(html);
                    if (onChange) {
                      onChange(html);
                    }
                  }
                }}
                onFocus={() => {
                  onFieldFocus();
                  setTouched(true);
                  if (onFocus) onFocus();
                }}
                onBlur={() => {
                  onFieldBlur();
                  if (onBlur) onBlur();
                }}
              />
            )}
          </FieldDecoration>
        )}
      </CustomField>
    </TextEditorFieldRoot>
  );
};

interface TextEditorProps {
  value: string;
  readOnly: boolean;
  theme?: "snow" | "bubble";
  onChange: (value: string) => void;
  onFocus: () => void;
  onBlur: () => void;
}

const TextEditorRoot = styled.div.attrs(props => ({
  className: "react-simple-widget text-editor " + props.className
}))`
  .ql-toolbar {
    border-top: none !important;
    border-left: none !important;
    border-right: none !important;
    padding-top: 0 !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .ql-toolbar + .ql-toolbar {
    display: none;
    pointer-events: none;
  }

  .ql-container {
    border: none !important;

    .ql-editor {
      padding-left: 6px !important;
      padding-right: 6px !important;
    }
  }
`;

const TextEditor = ({
  value,
  theme,
  onChange,
  onFocus,
  onBlur
}: TextEditorProps): JSX.Element => {
  if (["snow", "bubble"].includes(theme))
    theme = theme.toLowerCase() as "snow" | "bubble";
  else theme = "snow";

  const [linkId] = useState(`quill-stylesheet-${generateRnd()}`);
  const [scriptId] = useState(`quill-script-${generateRnd()}`);
  const ref = useRef<HTMLDivElement>();
  const editor = useRef<Quill>();

  function generateRnd(): string {
    return Math.random().toString().replace(/\d\./, "");
  }

  const loadExternal = (
    id: string,
    type: string,
    customize: (tag: HTMLElement) => void
  ): Promise<void> => {
    return new Promise((resolve, reject) => {
      // Check if tag already exists
      const existingTag = document.getElementById(id);
      if (existingTag) return resolve();

      const tag = document.createElement(type);
      tag.id = id;
      tag.onload = () => resolve();

      tag.onerror = err => {
        // If an error occurs, remove tag
        document.body.removeChild(tag);
        reject(err);
      };

      customize(tag);
      document.body.appendChild(tag);
    });
  };

  const initializeEditor = (): void => {
    Promise.all([
      loadExternal(linkId, "link", (tag: HTMLLinkElement) => {
        tag.type = "text/css";
        tag.rel = "stylesheet";
        tag.href = `https://cdn.quilljs.com/1.3.6/quill.${theme}.css`;
        tag.crossOrigin = "anonymous";
      }),
      loadExternal(scriptId, "script", (tag: HTMLScriptElement) => {
        tag.src = "https://cdn.quilljs.com/1.3.6/quill.min.js";
        tag.crossOrigin = "anonymous";
      })
    ])
      .then(() => {
        if (ref.current) {
          const quill = new Quill(ref.current, {
            modules: {
              toolbar: [
                [{ header: [1, 2, 3, false] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [{ color: [] }, { background: [] }],
                [{ font: [] }],
                [{ align: [] }],
                [
                  { list: "ordered" },
                  { list: "bullet" },
                  { indent: "-1" },
                  { indent: "+1" }
                ],
                ["link"],
                ["clean"]
              ]
            },
            theme
          });

          quill.on("text-change", () => {
            onChange(quill.root.innerHTML);
          });

          if (value) quill.clipboard.dangerouslyPasteHTML(0, value, "api");

          editor.current = quill;
        }
      })
      .catch(err => {
        console.error(
          "React Simple Widgets - TextEditor dependencies failed to load",
          err
        );
      });
  };

  useEffect(() => {
    initializeEditor();

    return () => {
      // Remove link and script tags when unmounted
      const linkTag = document.getElementById(linkId);
      if (linkTag) document.body.removeChild(linkTag);

      const scriptTag = document.getElementById(scriptId);
      if (scriptTag) document.body.removeChild(scriptTag);
    };
  }, []);

  return (
    <TextEditorRoot onFocus={onFocus} onBlur={onBlur}>
      <div ref={ref} />
    </TextEditorRoot>
  );
};
