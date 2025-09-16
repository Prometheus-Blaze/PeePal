import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { useState, useEffect } from 'react';
import L from 'leaflet';

// Fix Leaflet icon issue in Vite/React
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

function AddMarker({ onAdd }: { onAdd: (lat: number, lng: number) => void }) {
  useMapEvents({
    click(e) {
      onAdd(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}

export default function WashroomMap() {
  const [washrooms, setWashrooms] = useState<{ lat: number; lng: number }[]>(() => {
    const saved = localStorage.getItem('washrooms');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('washrooms', JSON.stringify(washrooms));
  }, [washrooms]);

  const handleAddWashroom = (lat: number, lng: number) => {
    setWashrooms((prev) => [...prev, { lat, lng }]);
  };

  return (
    <MapContainer
      center={[28.6139, 77.2090]} // Start centered on Delhi
      zoom={13}
      style={{ height: '100%', width: '100%' }}
      doubleClickZoom={false} // Allow double-click to drop marker
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {washrooms.map((pos, idx) => (
        <Marker key={idx} position={[pos.lat, pos.lng]}>
          <Popup>🚻 Washroom #{idx + 1}</Popup>
        </Marker>
      ))}
      <AddMarker onAdd={handleAddWashroom} />
    </MapContainer>
  );
}
