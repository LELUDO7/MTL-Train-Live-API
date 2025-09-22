// File name    : text.js
// Created by   : Ludovic Fournier
// Created date : 09-09-2025
// Description  : All text related stuff

import f from 'figlet';
import * as colorette from 'colorette';

function figlet(text, font) {
    return f.textSync(text, {
    font: font,
    horizontalLayout: "default",
    verticalLayout: "default",
    whitespaceBreak: true,
  }
);
}

// Color : black, red, green, yellow, blue, magenta, cyan, white
function color(text, color) {
    switch (color) {
        case "black":
            return colorette.black(text);
        case "red":
            return colorette.red(text);
        case "green":
            return colorette.green(text);
        case "yellow":
            return colorette.yellow(text);
        case "blue":
            return colorette.blue(text);
        case "magenta":
            return colorette.magenta(text);
        case "cyan":
            return colorette.cyan(text);
        case "white":
            return colorette.white(text);
        default:
            throw new Error(`color : "${color}" is not a valid color`);
    }
}

export  {figlet, color};