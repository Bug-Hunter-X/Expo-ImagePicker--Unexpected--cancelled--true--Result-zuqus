This solution involves checking the `assets` property of the result object from `launchImageLibraryAsync` or `launchCameraAsync`. The `assets` property will contain an array of assets if the user picked an image, even if the `cancelled` property is true.

```javascript
import * as ImagePicker from 'expo-image-picker';

async function pickImage() {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.cancelled && result.assets && result.assets.length > 0) {
    // Image was successfully selected
    console.log('Image selected:', result.assets[0].uri);
  } else {
    console.log('Image selection cancelled or error occurred.');
  }
}
```