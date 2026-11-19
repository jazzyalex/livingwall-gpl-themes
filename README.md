# Living Wall Beach and Meadow themes (GPL-3.0 source)

This repository holds the source of the **Beach** and **Meadow** wallpaper themes exactly as they ship inside [Living Wall](https://livingwallapp.com/gh), a Mac app that turns your desktop into a little living world around your icons. Living Wall offers these two themes for free.

They are a modified version of the Beach and Meadow themes from Deskland, an open-source project by the Deskland authors, and they stay under the [GNU General Public License, version 3](LICENSE). See [NOTICE](NOTICE) for the source and the list of changes.

- `Beach/`, `Meadow/`: theme pages, scripts and artwork.
- `Shared/`: scripts the themes load.

Each theme is a plain web page. The app sends it desktop icon rectangles through `window.livingWallReceive({t: 'icons', r: [[left, top, right, bottom], ...], vis, live, points})`.

Only these themes are published here. The Living Wall app and its other worlds are proprietary and are not covered by this repository. Living Wall is not affiliated with or endorsed by Deskland.
