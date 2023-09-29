export function getInitialColorMode() {
  const datasetTheme = document.body.dataset.theme;

  if (datasetTheme) return datasetTheme;

  const persistedColorPreference = window.localStorage.getItem("color-mode");
  const hasPersistedPreference = typeof persistedColorPreference === "string";

  if (hasPersistedPreference) return persistedColorPreference;

  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  const hasMediaQueryPreference = typeof mql.matches === "boolean";

  if (hasMediaQueryPreference) return mql.matches ? "dark" : "light";

  return "light";
}
