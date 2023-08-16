// Define "require"
import { createRequire } from "module";

import isHtml from "is-html";
import path from "path";
import { fileURLToPath } from "url";
const require = createRequire(import.meta.url);

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const fs = require("fs");
const uglify = require("uglify-js");

const parentFolderPath = path.join(__dirname, "../");
const filePath = path.join(parentFolderPath, "public", "inject_js_dev.js");
const outputFilePath = path.join(parentFolderPath, "public", "inject_js.js");

function findStringLiterals(text) {
  const stringLiteralPattern = /(['"`])(?:(?!\1)[^\\]|\\.)*\1/g;
  const stringLiterals = text.match(stringLiteralPattern);
  return stringLiterals || [];
}

// Function to minify the content using UglifyJS
function minifyFile(inputFilePath, outputFilePath) {
  const rawCode = fs.readFileSync(inputFilePath, "utf8");

  const minifiedHTML = processJavascriptCode(rawCode);
  const minifiedJS = uglify.minify(minifiedHTML).code;

  fs.writeFileSync(outputFilePath, minifiedJS, "utf8");
  console.log("File minified and saved.");
}

function processJavascriptCode(code) {
  function findStringLiterals(text) {
    const stringLiteralPattern = /(['"`])(?:(?!\1)[^\\]|\\.)*\1/g;
    const stringLiterals = text.match(stringLiteralPattern);
    return stringLiterals || [];
  }

  function minifyVariable(variable) {
    return variable.replace(/\s+/g, " ").trim();
  }

  function minifyHTMLInsideVariables(text) {
    const stringLiterals = findStringLiterals(text);

    stringLiterals.forEach((originalLiteral) => {
      const minifiedLiteral = minifyVariable(originalLiteral);

      if (isHtml(originalLiteral)) {
        text = text.replace(originalLiteral, minifiedLiteral);
      }
    });

    return text;
  }

  return minifyHTMLInsideVariables(code);
}

/* Watch JS for changes
======================================  */

(() => {
  console.log("init! ");
  fs.watch(filePath, (eventType, filename) => {
    if (eventType === "change" && filename) {
      console.log("File changed! ", filename);

      minifyFile(filePath, outputFilePath);
    }
  });
})();

// function test() {
//   const inputFileContent = fs.readFileSync(filePath, "utf8");
//   const javascriptCode = inputFileContent;

//   const processedCode = processJavascriptCode(javascriptCode);
//   console.log(processedCode);
// }

// test();
// console.log("Watching file for changes:", filePath);
