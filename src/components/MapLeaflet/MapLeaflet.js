import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import L from "leaflet";
import 'leaflet/dist/leaflet.css'
import './MapLeaflet.css'

function MapLeaflet(props) {
    const state = {
        lat: props.lat,
        lng: props.lng,
        zoom: 13
    }
    const position = [state.lat, state.lng]
    const pointerIcon = new L.Icon({
        iconUrl: "/icon-location.svg",
        iconAnchor: [5, 60],
        popupAnchor: [0, 0],
        shadowSize: [68, 95],
        shadowAnchor: [20, 92]
    });
    return (
        <Map center={position} zoom={state.zoom}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={pointerIcon} center={position}>
            </Marker>
        </Map>
    )
}

export default MapLeaflet
