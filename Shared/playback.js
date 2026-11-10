// A paused wallpaper keeps its scene time and redraws only when something changes.
function createWallpaperPlayback(drawFrame) {
  let pausedAt = null, pausedDuration = 0, scheduled = false;

  function invalidate() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(now => {
      scheduled = false;
      try {
        drawFrame(now);
      } finally {
        if (pausedAt === null) invalidate();
      }
    });
  }

  return {
    get animated() { return pausedAt === null; },
    time(now = performance.now()) { return (pausedAt ?? now) - pausedDuration; },
    setAnimation(animated) {
      if (animated === (pausedAt === null)) return;
      const now = performance.now();
      if (animated) {
        pausedDuration += now - pausedAt;
        pausedAt = null;
      } else {
        pausedAt = now;
      }
      invalidate();
    },
    invalidate,
  };
}
