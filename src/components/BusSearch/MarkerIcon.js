import L from "leaflet";
import black from "../../assets/img/Marker_B.svg";
import orange from "../../assets/img/Marker_O.svg";
import yellow from "../../assets/img/Marker_Y.svg";
import blue from "../../assets/img/Marker_BE.svg";
import bus from "../../assets/img/Icon_bus.svg";

export const iconBlack = new L.Icon({
    iconUrl: black,
    iconSize: new L.Point(30, 50),
    iconAnchor:[15,40]
});

export const iconOrange = new L.Icon({
    iconUrl: orange,
    iconSize: new L.Point(30, 50),
    iconAnchor:[15,40]
});

export const iconYellow = new L.Icon({
    iconUrl: yellow,
    iconSize: new L.Point(30, 50),
    iconAnchor:[15,40]
});

export const iconBlue = new L.Icon({
    iconUrl: blue,
    iconSize: new L.Point(30, 50),
    iconAnchor:[15,40]
});

export const iconBus = new L.Icon({
    iconUrl: bus,
    iconSize: new L.Point(50, 50),
    iconAnchor:[15,40]
});