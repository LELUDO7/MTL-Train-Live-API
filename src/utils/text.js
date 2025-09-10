// File name    : text.js
// Created by   : Ludovic Fournier
// Created date : 09-09-2025
// Description  : All text related stuff

const figlet = require("figlet");


async function createTitle() {
    var title= "";
    title = await figlet.text("MTL_Train_Live_API");
    return title;
}

module.exports = {createTitle};