// readFontName.js
const fontkit = require("fontkit");

const font = fontkit.openSync("../../");

console.log("Family Name:", font.familyName);
console.log("Full Name:", font.fullName);
console.log("PostScript Name:", font.postscriptName);
console.log("Subfamily:", font.subfamilyName);
