# LivingWall Beach and Meadow themes (GPL-3.0 source)

This repository holds the source of the **Beach** and **Meadow** wallpaper themes exactly as they ship inside the [LivingWall](https://livingwallapp.com) Mac app. LivingWall offers them for free.

They are a modified version of the themes in [Deskland](https://github.com/BLEZZ0102/Deskland) by the Deskland authors, and they stay under the [GNU General Public License, version 3](LICENSE). See [NOTICE](NOTICE) for the list of changes.

- `Beach/`, `Meadow/`: theme pages, scripts and artwork.
- `Shared/`: scripts the themes load.

Each theme is a plain web page. The app sends it desktop icon rectangles through `window.livingWallReceive({t: 'icons', r: [[left, top, right, bottom], ...], vis, live, points})`.

Only these themes are published here. The LivingWall app itself is proprietary and is not covered by this repository. LivingWall is not affiliated with or endorsed by Deskland.
