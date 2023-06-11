import { Button } from '@mui/material';
import L, { LatLng } from 'leaflet';
import React from 'react';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import { Marker } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png',
});

interface IProps {
  onLocationChoose?: (geo: number[]) => void;
  onClose?: () => void;
}

function LocationMarker({
  onPositionChange,
}: {
  onPositionChange?: (pos: L.LatLng) => void;
}) {
  const [position, setPosition] = React.useState<any>(null);
  const map = useMapEvents({
    click(e) {
      setPosition(e?.latlng);
      onPositionChange?.(e?.latlng);
      // map.locate() // for detecting user location
    },
    // locationfound(e) {
    // const { lat, lng } = e.latlng;
    // setPosition(e?.latlng)
    // L.marker([lat, lng], { icon }).addTo(map);
    // map.flyTo(e?.latlng, map.getZoom())
    // },
  });

  return position === null ? null : (
    <Marker position={position} icon={icon}>
      {/* <Popup>You are here</Popup> */}
    </Marker>
  );
}

export default function GeoPickerModal({ onLocationChoose, onClose }: IProps) {
  const [position, setPosition] = React.useState<LatLng | null>(null);
  const [selectedAddress, setSelectedAddress] = React.useState('');
  const handleGeoSelected = () => {
    if (!position) return;
    onLocationChoose?.([position?.lat, position?.lng]);
    onClose?.();
  };

  React.useEffect(() => {
    const fetchAddress = async () => {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${position?.lat}&lon=${position?.lng}`
      );
      const location = await res.json();
      setSelectedAddress(location?.display_name);
    };

    fetchAddress();
  }, [position]);

  React.useEffect(() => {
    // !on modal pop, ask for locaiton permission to get current location
    //
    return () => setPosition(null);
  }, []);
  return (
    <>
      <div className='w-full max-w-[800px] max-sm:h-full md:w-[80vw]'>
        <h2 className=' text-primary-main mb-3 text-2xl font-semibold'>
          Pin Location on Map
        </h2>

        <MapContainer
          className='Map !h-[60vh] md:max-h-[70vh]'
          center={[27.7172, 85.324]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <LocationMarker onPositionChange={setPosition} />
        </MapContainer>

        <div>
          Selected Address : <span>{selectedAddress}</span>
        </div>
        <Button onClick={handleGeoSelected} variant='outlined' className='mt-2'>
          Choose Location Geo
        </Button>
      </div>
    </>
  );
}
