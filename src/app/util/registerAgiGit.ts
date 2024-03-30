import { Monaco } from "@monaco-editor/react";
import { monaco } from "react-monaco-editor";

export const registerAgiGit = (
  editor: monaco.editor.IStandaloneCodeEditor,
  monaco: Monaco,
) => {
  const gitCommand = "add|commit|push";
  // 注册一个新的语言
  monaco.languages.register({ id: "AgiGit" });

  // 设置语言的规则
  monaco.languages.setMonarchTokensProvider("AgiGit", {
    tokenizer: {
      root: [
        [
          /^(AgiGit)(\s+)(add|commit|push)(.*)$/,
          ["custom-green", "", "custom-green", ""],
        ],
        [/^(AgiGit)(\s+)(.*)(.*)$/, ["custom-green", "", "custom-error", ""]],
        [
          /^(.*)(\s+)(add|commit|push)(.*)$/,
          ["custom-error", "", "custom-green", ""],
        ],
        [/^(.*)(\s+)(.*)(.*)$/, ["custom-error", "", "custom-error", ""]],
        [/\[[a-zA-Z 0-9:]+\]/, "custom-date"],
      ],
    },
  });

  // 设置语言的主题
  monaco.editor.defineTheme("AgiGitTheme", {
    base: "vs",
    inherit: false,
    rules: [
      { token: "custom-green", foreground: "008000" },
      { token: "custom-info", foreground: "808080" },
      { token: "custom-error", foreground: "ff0000", fontStyle: "bold" },
    ],
    colors: {
      "editor.foreground": "#000000",
    },
  });

  monaco.editor.setTheme("AgiGitTheme");
};
