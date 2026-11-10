function loadWallpaperSprite(image, path) {
  const bridge = window.webkit?.messageHandlers.livingWallSprite;
  if (!bridge) {
    image.src = path;
    return;
  }
  bridge.postMessage(path).then(url => { image.src = url; })
    .catch(error => console.warn('Wallpaper sprite unavailable:', path, error));
}
