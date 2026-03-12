export default function forceVideoLoad() {
  document.querySelectorAll("video[data-src]").forEach((video) => {
    if (video.load) video.load();
  });
}
