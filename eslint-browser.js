import { ESLint } from "eslint-wasm";

async function lintCode(code) {
  const eslint = new ESLint();
  const results = await eslint.lintText(code);
  return results[0].messages;
}

// Пример использования
const exampleCode = "const x = 5";
lintCode(exampleCode).then((messages) => console.log(messages));
