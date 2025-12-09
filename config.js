// Allow connection in prod mod
export const ALLOWEDORIGINSPROD = [
  "https://map.mtltrainlive.com",
  "https://map.montrax.org",
  "http://127.0.0.1:5500",
  "https://127.0.0.1:5500",
];

// Allow connection in dev mod
export const ALLOWEDORIGINSDEV = [
  "http://127.0.0.1:5500",
  "https://127.0.0.1:5500",
  "http://map.mtltrainlive.com",
  "https://map.mtltrainlive.com",
  "http://map.montrax.org",
  "https://map.montrax.org",
];

export const ALLOWEDORIGINHEADERS = [
  "cache",
  "Content-Type",
  "Authorization",
  "X-Train-Info",
  "X-Consists-Line",
];

// EXO API CALL interval
export const EXOAPICALLINTERVAL = 15; //Value in second
