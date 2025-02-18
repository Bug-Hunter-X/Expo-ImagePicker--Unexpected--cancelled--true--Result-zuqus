# Expo ImagePicker Unexpected Cancellation Bug

This repository demonstrates a bug in the Expo ImagePicker library where the `launchImageLibraryAsync` and `launchCameraAsync` methods sometimes return `cancelled: true` even after the user successfully selects an image.  This can lead to unpredictable app behavior.

## Reproducing the Bug

1. Clone this repository.
2. Run `npm install`.
3. Run `expo start`.
4. Attempt to select an image using either the camera or image library. You may need to try several times to reproduce the issue.

## Solution

The provided solution is a workaround involving checking the `assets` property of the response. If `assets` is populated, an image was selected regardless of the `cancelled` value. This demonstrates a way to mitigate the bug, though it's crucial for Expo to address this inconsistency.