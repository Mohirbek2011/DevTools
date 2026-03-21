import { useState } from "react";
import { Linter } from "eslint";

const linter = new Linter();

const eslintConfig = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "no-unused-vars": "warn",
    "no-console": "off",
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
};

const CodeFixer = () => {
  const [code, setCode] = useState("");
  const [fixedCode, setFixedCode] = useState("");

  const handleFix = () => {
    try {
      const messages = linter.verify(code, eslintConfig);
      if (messages.length === 0) {
        setFixedCode(code);
      } else {
        // Пока ESLint сам не исправляет код, просто показываем ошибки
        setFixedCode(`Ошибки:\n${messages.map(m => m.message).join("\n")}`);
      }
    } catch (error) {
      setFixedCode("Ошибка обработки кода");
    }
  };

  return (
    <div>
      <h2>Исправление кода</h2>
      <textarea
        rows="10"
        cols="50"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Введите ваш код..."
      />
      <button onClick={handleFix}>Исправить</button>
      <pre>{fixedCode}</pre>
    </div>
  );
};

export default CodeFixer;
