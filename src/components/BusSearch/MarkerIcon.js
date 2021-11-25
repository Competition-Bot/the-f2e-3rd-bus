import L from "leaflet";
import black from "../../img/Marker_B.svg";
import orange from "../../img/Marker_O.svg";
import yellow from "../../img/Marker_Y.svg";
import bus from "../../img/Icon_bus.svg";

export const iconBlack = new L.Icon({
    iconUrl: black,
    iconSize: new L.Point(50, 50),
});

export const iconOrange = new L.Icon({
    iconUrl: orange,
    iconSize: new L.Point(50, 50),
});

export const iconYellow = new L.Icon({
    iconUrl: yellow,
    iconSize: new L.Point(50, 50),
});

export const iconBus = new L.Icon({
    iconUrl: bus,
    iconSize: new L.Point(50, 50),
});