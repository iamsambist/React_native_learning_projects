const fontkit = require("fontkit");

const font = fontkit.openSync("./app/assets/fonts/InflateptxBase-ax3da.ttf");

console.log("Family Name:", font.familyName);
console.log("Full Name:", font.fullName);
console.log("PostScript Name:", font.postscriptName);
console.log("Subfamily:", font.subfamilyName);
