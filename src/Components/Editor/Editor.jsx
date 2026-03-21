import React, { useState, useEffect } from "react";
import "./Editor.css";
import { useTranslation } from "react-i18next";

const CodeEditor = ({ theme }) => {
    const { t } = useTranslation();

    const loadFromLocalStorage = (key, defaultValue) => {
        return localStorage.getItem(key) || defaultValue;
    };

    const [html, setHtml] = useState(loadFromLocalStorage("html", "<html>\n<head>\n    <title>Document</title>\n</head>\n<body>\n    \n</body>\n</html>"));
    const [css, setCss] = useState(loadFromLocalStorage("css", ""));
    const [js, setJs] = useState(loadFromLocalStorage("js", ""));
    const [outputTheme, setOutputTheme] = useState(theme);

    useEffect(() => {
        setOutputTheme(theme);
    }, [theme]);

    const updateOutput = () => {
        const iframe = document.getElementById("output");
        const documentContent = `
            <html>
            <head>
                <style>${css}</style>
            </head>
            <body>
                ${html}
                <script>${js}<\/script>
            </body>
            </html>
        `;
        iframe.contentDocument.open();
        iframe.contentDocument.write(documentContent);
        iframe.contentDocument.close();
    };

    useEffect(updateOutput, [html, css, js]);

    const saveToLocalStorage = (key, value) => {
        localStorage.setItem(key, value);
    };

    return (
        <div className={`code-editor ${outputTheme}`}>
            <h2>{t("Online HTML, CSS, JS Editor")}</h2>
            <div className="editor-container">
                <textarea
                    className={`editor-textarea`}
                    value={html}
                    onChange={(e) => {
                        setHtml(e.target.value);
                        saveToLocalStorage("html", e.target.value);
                    }}
                    placeholder="Write HTML here..."
                ></textarea>
                <textarea
                    className={`editor-textarea`}
                    value={css}
                    onChange={(e) => {
                        setCss(e.target.value);
                        saveToLocalStorage("css", e.target.value);
                    }}
                    placeholder="Write CSS here..."
                ></textarea>
                <textarea
                    className={`editor-textarea`}
                    value={js}
                    onChange={(e) => {
                        setJs(e.target.value);
                        saveToLocalStorage("js", e.target.value);
                    }}
                    placeholder="Write JavaScript here..."
                ></textarea>
            </div>
            <h3>{t("Output:")}</h3>
            <iframe id="output" className="output-frame"></iframe>
        </div>
    );
};

export default CodeEditor;
