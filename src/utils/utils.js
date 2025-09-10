// File name    : utils.js
// Created by   : Ludovic Fournier
// Created date : 09-09-2025
// Description  : 

const { execSync } = require("child_process");

function getCurrentBranch() {
  try {
    const branch = execSync("git rev-parse --abbrev-ref HEAD")
      .toString()
      .trim();
    return branch;
  } catch (error) {
    return "Branche inconnue (pas un repo git ?)";
  }
}

module.exports = { getCurrentBranch };

