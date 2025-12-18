// Para OBS Browser Source (evita freeze)
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});