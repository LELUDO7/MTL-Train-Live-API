// File name    : text.js
// Created by   : Ludovic Fournier
// Created date : 09-09-2025
// Description  : All text related stuff

import figlet from 'figlet';


function createTitle() {
    var title= "";
    title = figlet.text("MTL_Train_Live_API");
    return title;
}

export  {createTitle};