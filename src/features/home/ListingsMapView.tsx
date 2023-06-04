import { divIcon } from 'leaflet';
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import { MapFlatCard } from '@/features/FlatCard/MapFlatCard';

export default function ListingsMapView({
  listings = [],
}: {
  listings: any[];
}) {
  // ! TODO: center cord according to user prefs location
  const kathmanduCoords: any = [27.7172, 85.324]; // Kathmandu coordinates

  return (
    <div>
      {/* <MapContainer
        center={kathmanduCoords}
        zoom={13}
        style={{ height: 'calc(100vh - 70px)', width: '100%' }}
      >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />

        {listings.map((item, index) => (
          <Marker
            key={index}
            position={item.geo as any}
            icon={divIcon({
              className: 'custom-icon',
              html: `<div class="py-2 text-center bg-white rounded-[20px] !scale-[1.2] border border-solid border-red-200"><div class="icon-label text-red-400">${`NPR ${item?.rate}`}</div></div>`,
              iconSize: [80, 40],
            })}
          >
            <Popup>
              <MapFlatCard listing={item} />
            </Popup>
          </Marker>
        ))}
      </MapContainer> */}
    </div>
  );
}
