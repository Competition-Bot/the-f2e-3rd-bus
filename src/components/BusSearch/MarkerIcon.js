import L from "leaflet";
import black from "../../assets/img/Marker_B.svg";
import orange from "../../assets/img/Marker_O.svg";
import yellow from "../../assets/img/Marker_Y.svg";
import bus from "../../assets/img/Icon_bus.svg";
import location from "../../assets/img/location.svg";
import black_shadow from "../../assets/img/Marker_B_shad.svg"
import { colors } from "tailwindcss/defaultTheme";

export const iconBlack = new L.Icon({
    iconUrl: black,
    iconSize: new L.Point(40, 50),
    iconAnchor:[20,40]
});

export const iconBlack_shadow = new L.Icon({
    iconUrl: black_shadow,
    iconSize: new L.Point(30, 50),
    iconAnchor:[15,40]
});

export const iconOrange = new L.Icon({
    iconUrl: orange,
    iconSize: new L.Point(40, 50),
    iconAnchor:[20,40]
});

export const iconYellow = new L.Icon({
    iconUrl: yellow,
    iconSize: new L.Point(40, 50),
    iconAnchor:[20,40]
});

export const iconBus = new L.Icon({
    iconUrl: bus,
    iconSize: new L.Point(50, 50),
});

export const icon_location = new L.Icon({
    iconUrl: location,
    iconSize: new L.Point(50, 50),
})

