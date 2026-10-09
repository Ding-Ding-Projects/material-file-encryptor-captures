# Material File Encryptor capture gallery

This gallery preserves four original, reviewed interface captures from the historical packaged build at source commit [`1e16dea8edb66ea5e6cf31009b0dbcc953f18d74`](https://github.com/Ding-Ding-Projects/material-file-encryptor/commit/1e16dea8edb66ea5e6cf31009b0dbcc953f18d74). They document a past verification run. They do not establish acceptance of the current `v1.19.1` release or its runtime.

## Captures

All images are original PNG bytes. Their reviewed pixels, image hashes, source artifact identity, capture dimensions, scale, and validated UTC timestamps are listed in [`docs/gallery/captures.md`](docs/gallery/captures.md) and [`captures/inventory.json`](captures/inventory.json).

- [History with a retained synthetic file version](captures/history-preview.png)
- [Recycle Bin with a recoverable synthetic file](captures/recycle-preview.png)
- [Explicit descendant restore dialog](captures/descendant-preview.png)
- [Dark appearance settings](captures/dark-settings-preview.png)

The historical run recorded 70 passed packaged interface checks and review of 73 captures. Four original images were judged suitable for public viewing. Other path-bearing captures and private receipts are excluded. The status, limits, and exact image hashes are in the inventory; these records are not evidence about a later build.

## Build

Run `build.bat` to assemble the static gallery in `dist/`. It verifies each source image against the checked-in inventory before copying original bytes. This repository contains no installable product; `build-installer.bat` exits with an honest non-success result and documents that scope.

The capture index is in [`docs/gallery/README.md`](docs/gallery/README.md). There is no HTTP API, so a Postman collection does not apply.

## Site conformance status

The deployed archive page is a focused static gallery. Its universal interactive UI contract remains incomplete and is not represented as satisfied. This build has no language-mode selector or bilingual copy, funny-level controls, dialog-emoji setting, local vocabulary upload, School-mode lock, settings surface, tabbed navigation, regex builder, command palette, appearance editor, notifications, export or bulk-action flow. It also has no persistence for visitor preferences, no full language/theme/scale layout matrix, and no checked-in design reference or parity evidence. The page uses semantic HTML, a keyboard-accessible capture filter, responsive layout, reduced-motion handling, and original image links; those limited behaviors do not close the broader gaps.
