export function capitalizeFirst(text) {
  if (!text || text.length === 0) return text;

  return text[0].toUpperCase() + text.slice(1);
}
