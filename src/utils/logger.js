// File name    : logger.js
// Created by   : Ludovic Fournier
// Created date : 22-09-2025
// Description  : All log related stuff

import * as c from 'colorette';

export const log = {
  info: (...a) => console.log(c.green("[INFO]"), ...a),
  error: (...a) => console.error(c.red("[ERROR]"), ...a),
  default : (...a) => console.log(...a)
};