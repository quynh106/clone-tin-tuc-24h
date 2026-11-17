// "2026-11-14T09:54:00.000Z" → "Thứ Bảy, ngày 14/11/2026 16:54 (GMT+7)"
export function formatLongDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  const parts = new Intl.DateTimeFormat("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh",
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(d);
  const g = (t) => parts.find((p) => p.type === t)?.value ?? "";
  return `${g("weekday")}, ngày ${g("day")}/${g("month")}/${g("year")} ${g("hour")}:${g("minute")} (GMT+7)`;
}
