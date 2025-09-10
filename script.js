(function () {
  // Configuration: change these later as needed
  const CONFIG = {
    shopName:"Aryan Enterprises",
    shopLocationText: "Kalyanpur, Punpun, Patna - 804453, Bihar, India",
    latitude: 25.478292815519318,   // Default: San Francisco
    longitude: 85.05879434725765,
    zoom: 13,
  };

  // Expose config for later edits via console if desired
  window.MapConfig = CONFIG;

  // Populate header content from config
  const nameEl = document.getElementById("shop-name");
  const locEl = document.getElementById("shop-location");
  if (nameEl) nameEl.textContent = CONFIG.shopName;
  if (locEl) locEl.textContent = CONFIG.shopLocationText;

  // Initialize Leaflet map
  const mapElement = document.getElementById("map");
  if (!mapElement) return;

  const map = L.map(mapElement).setView([CONFIG.latitude, CONFIG.longitude], CONFIG.zoom);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  const marker = L.marker([CONFIG.latitude, CONFIG.longitude]).addTo(map);
  marker.bindPopup(`${CONFIG.shopName}<br/>${CONFIG.shopLocationText}`).openPopup();

  // Helper to programmatically update location later
  window.updateShopLocation = function updateShopLocation(lat, lng, options) {
    const opts = Object.assign({ zoom: CONFIG.zoom }, options);
    CONFIG.latitude = lat;
    CONFIG.longitude = lng;
    map.setView([lat, lng], opts.zoom);
    marker.setLatLng([lat, lng]);
  };
})();


