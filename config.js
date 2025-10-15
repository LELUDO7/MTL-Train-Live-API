// Allow connection in prod mod
export const ALLOWEDORIGINSPROD = ["https://map.mtltrainlive.com"];

// Allow connection in dev mod
export const ALLOWEDORIGINSDEV = [
  "http://127.0.0.1:5500",
  "https://127.0.0.1:5500",
  "http://map.mtltrainlive.com",
  "https://map.mtltrainlive.com",
];

export const ALLOWEDORIGINHEADERS = ["Content-Type", "X-Train-Info"];

// EXO API CALL interval
export const EXOAPICALLINTERVAL = 30; //Value in second
