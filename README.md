# Static Shop Website

Open `index.html` in a browser. It shows:

- Shop name and location at the top
- A map at the bottom using Leaflet + OpenStreetMap

## Change the shop name, address, or coordinates

Edit `script.js` and modify the `CONFIG` object:

```js
const CONFIG = {
  shopName: "My Shop",
  shopLocationText: "123 Market Street, Springfield",
  latitude: 37.7749,
  longitude: -122.4194,
  zoom: 13,
};
```

You can also adjust on the fly from the browser console after the page loads:

```js
// Update location and recenter the map
updateShopLocation(48.8584, 2.2945, { zoom: 14 });

// See or tweak current config
MapConfig.shopName = "New Name";
MapConfig.shopLocationText = "New Address";
```

No API keys are required.


