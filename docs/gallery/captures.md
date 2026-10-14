# Capture provenance and limits

## Historical application captures

The gallery retains four original application images from product source commit [`1e16dea8edb66ea5e6cf31009b0dbcc953f18d74`](https://github.com/Ding-Ding-Projects/material-file-encryptor/commit/1e16dea8edb66ea5e6cf31009b0dbcc953f18d74). The captured application artifact SHA-256 is `080cff7a677fb8fcf5b1f8356c26d555231a0028e6a66af6ca461239c2768aec`; the packaged archive SHA-256 is `7ad75d394dd6711947dbc63e9320913df37b50e55aac3c284bf6098efbadbfdb`. Each original image is 1770 × 1128 pixels from a 1180 × 752 viewport at 150% scale. Their UTC capture times come from the reviewed source inventory.

The historical packaged run recorded 70 passed interface checks and review of 73 captures. Those results belong to that historical source and package. The four images do not establish acceptance of current releases, current source, installation, or runtime behavior.

## Partial documentation-page captures

Fourteen original PNG files show sections of the product documentation page. Their source and deployment are bound to [`b1564bac7cdb6677ff5d9529e65228577d406259`](https://github.com/Ding-Ding-Projects/material-file-encryptor/commit/b1564bac7cdb6677ff5d9529e65228577d406259). An independent pixel and raw-diagnostics review records privacy checks as passed for all fourteen images. The image hashes and exact dimensions are in [`captures/inventory.json`](../../captures/inventory.json).

The captures cover English and Cantonese, light and dark themes, and selected display scales. The set is partial: 14 of 48 planned Home tuples completed, the original normal closure is unverified, and tuple 14 has no PNG. No missing image or receipt is reconstructed. Capture date and timezone are unavailable from validated capture provenance.

These images are presented only as partial documentation-page samples. They do not establish full browser acceptance, a complete viewport matrix, or current application runtime behavior. The visible page content can continue below the captured viewport; the screenshots are not claims that the page content ends at the bottom edge.

## Current documentation guidance captures

Two original PNGs show bilingual history guidance with isolated synthetic sample controls in the documentation site. They are bound to source [`83e14d8627b9782d5acc12221c22ed4f0b8b2d4c`](https://github.com/Ding-Ding-Projects/material-file-encryptor/commit/83e14d8627b9782d5acc12221c22ed4f0b8b2d4c). The normal view uses a 1280 × 900 CSS viewport at 100%; the narrow view uses a 320 × 800 CSS viewport at 200% browser pixel-density emulation and has a 640 × 1600 image. Capture times are validated in the source inventory and retained in UTC. Both images were inspected for visible personal values, machine paths, credentials, and private links; none were present.

The source capture inventory binds both images to a complete static-output byte manifest with SHA-256 `f761cbf9c4d7dc456601f49c9f5e2997d90cbb67975a38f764a1096627556798`. Pixel-density emulation does not establish physical display scaling. The pair is representative documentation evidence only; native product and installed behavior, and the full language/theme/scale matrix, remain unverified. Exact image hashes, capture times, viewport dimensions, method, and limits are in [`captures/inventory.json`](../../captures/inventory.json).

## Product interface snapshot

Ten byte-preserved PNGs record a product-interface capture run bound to source and producer commit [`68ca7f15bfc286d5da960a4c4287f481755455f4`](https://github.com/Ding-Ding-Projects/material-file-encryptor/commit/68ca7f15bfc286d5da960a4c4287f481755455f4). The captured built artifact SHA-256 is `525f874686ecca1bbbcaccdeffa0b3357e8e3f3daa0982d51d1b6857e9ce7c74`. The route was cloud Playwright at a 320 × 844 emulated viewport and 100% scale. Capture timestamps were recorded in UTC. Every image hash matches its receipt, and all ten PNGs passed decoding and pixel review for visible personal information and machine-profile paths.

Seven images show their requested visual scene: shared navigation, the initial preferences state, the saved Dark theme, the font-family value, the font-scale slider, the unchecked language control, and an empty history-password field. These are visual observations only. The navigation image shows a tab caption only partly at the edge. The password image does not show a credential action. No full interaction, accessibility, native, or current-product acceptance is claimed.

Three images are diagnostic-only. The private-history action target was not uniquely selected. The appearance editor was not reached for either the close or action attempt. The private-history diagnostic repeats the exact PNG bytes of the password-field image; the two appearance diagnostics also have identical PNG bytes. Each receipt record is retained in the inventory, with no invented action result. The full set has seven observed scenes and three readiness failures, and it does not establish full visual acceptance.

These captures are a historical source snapshot. Later source changes are not shown. The capture route was cloud Playwright, not a native desktop route. The private raw receipt and diagnostic measurements are not published; only reviewed image bytes and minimal source-bound metadata are included.

## Exclusions

Four newer images visibly contain machine-profile paths and remain private. Raw capture receipts, private task evidence, generated private announcements, and local application packages or installers are not published. Tuple 14 is listed as unavailable because its PNG does not exist. The four historical public images and the ten product-interface images remain separately bound to their own source and package provenance.

The gallery is a visual archive. Installation checks, release download checks, browser acceptance, and later runtime evidence have separate records.

## Packaged composition and keyboard-focus captures

This update adds 34 original PNG captures from two source snapshots: 26 baseline images bound to [`4959f2af4a2ced2980b2a68d2ba9fb4056458e35`](https://github.com/Ding-Ding-Projects/material-file-encryptor/commit/4959f2af4a2ced2980b2a68d2ba9fb4056458e35) and eight keyboard-focus images bound to [`f77845127b457fb30692346aae591d9a3501237d`](https://github.com/Ding-Ding-Projects/material-file-encryptor/commit/f77845127b457fb30692346aae591d9a3501237d). These are source snapshots, not claims about the current `main` state. The second set shows an unfinished focus-outline adjustment.

All 34 original PNGs were visually inspected, decoded, and checked against recomputed SHA-256 hashes. No machine paths, credentials, or personal data were visible. The baseline set records English, light and dark, two CSS viewports (1180 × 850 and 880 × 650), and drive, history, recycle, and keyboard-focus states. The candidate set records empty, locked History and Recycle Bin keyboard-focus views at the same viewport sizes. Capture details, per-image hashes, package hashes, and validated candidate UTC timestamps are in [`captures/inventory.json`](../../captures/inventory.json). Baseline capture dates are unavailable from per-image validated provenance.

The focus-after images show the focus outline more clearly at the sides and bottom after changing the outline offset, but the table header still covers its top segment. The full focus ring is not yet visible. The candidate source is not on `main`, and the images are labeled accordingly.

The route used a packaged runtime and an isolated CDP target. Viewport and DPR 1 values are browser emulation, not physical display scaling. No native HWND screenshot, populated rows, unlocked drive, Cantonese, or full language/theme/scale acceptance is established.

## Full-ring keyboard-focus captures

Twelve original PNGs are bound to packaged product source [`56c61a606e28a5c12968eef567a52fc2ad035ebb`](https://github.com/Ding-Ding-Projects/material-file-encryptor/commit/56c61a606e28a5c12968eef567a52fc2ad035ebb), now integrated into product `main`. The earlier 34 images remain tied to their original source snapshots and are not relabeled. All twelve new images were inspected and hash-matched. Eight have validated UTC capture timestamps; four scrolled images have no validated per-image timestamp.

The views are English-only, light/dark, DPR 1 browser emulation at 1180 × 850 and 880 × 650 CSS pixels. They show empty or locked History and Recycle Bin views. The scrolled narrow views show the complete focus outline. Eight probes validated the base capture set only. Physical display scaling, populated rows, unlocked behavior, native-window capture, Cantonese, and full matrix acceptance remain unverified. The consolidated verification summary is stored in the source run; only sanitized per-image facts are published in the inventory.
