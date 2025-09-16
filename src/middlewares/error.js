// 404
export function notFound(req, res, next) {
  res.status(404).json({ error: "Not Found" });
}

// gestionnaire d'erreurs central
export function errorHandler(err, req, res, next) {
  const status = err.status ?? 500;
  const message = err.message ?? "Internal Server Error";
  if (status >= 500) {
    // tu pourrais logger la stack ici
    // console.error(err);
  }
  res.status(status).json({ error: message });
}