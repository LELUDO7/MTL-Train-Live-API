export function nowInMontreal() {
  const now = new Date();

  // Obtenir les composants de l'heure Montréal
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Toronto",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(now);

  const get = (type) => parts.find((p) => p.type === type).value;

  const y = Number(get("year"));
  const m = Number(get("month"));
  const d = Number(get("day"));
  const h = Number(get("hour"));
  const min = Number(get("minute"));
  const s = Number(get("second"));

  // Construire l'instant UTC correspondant à l'heure Montréal
  return new Date(Date.UTC(y, m - 1, d, h, min, s));
}
