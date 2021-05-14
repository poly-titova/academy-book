const useNightTheme = (night = true) => {
  const theme = night ? `dark` : `light`;
  document.cookie = `theme=${theme}; Max-Age=8640000`;
  window.location.reload(true);
}
