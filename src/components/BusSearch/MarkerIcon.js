import L from "leaflet";
import bus from "../../assets/img/Icon_bus.svg";
import location from "../../assets/img/location.svg";

import test_icon from "../../assets/img/marker_filled.svg";

export const iconMarker = new L.Icon({
  iconUrl: test_icon,
  iconSize: new L.Point(50, 50),
  iconAnchor: [20, 40],
});

export const iconBus = new L.Icon({
  iconUrl: bus,
  iconSize: new L.Point(40, 50),
  iconAnchor: [20, 25],
});

export const icon_location = new L.Icon({
  iconUrl: location,
  iconSize: new L.Point(50, 50),
});

export const createFilledIcon = (type, value = undefined) => {
  let color;

  switch (type) {
    case "black":
      color = "#333";
      break;
    case "gray":
      color = "#A4A4A4";
      break;
    case "gray-light":
      color = "#EAEAEA";
      break;
    case "yellow-light":
      color = "#FFD786";
      break;
    case "yellow":
      color = "#F9B835";
      break;
    case "blue":
      color = "#1E659C";
      break;
    default:
      color = "#333";
      break;
  }

  return new L.Icon({
    iconUrl: `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_871_9053)">
    <g filter="url(#filter0_d_871_9053)">
    <path d="M23.4584 44.193C12.107 27.7368 10 26.0479 10 20C10 11.7157 16.7157 5 25 5C33.2843 5 40 11.7157 40 20C40 26.0479 37.893 27.7368 26.5416 44.193C25.7966 45.2691 24.2033 45.269 23.4584 44.193Z" fill="#1E659C"/>
    </g>
    </g>
    <defs>
    <filter id="filter0_d_871_9053" x="6" y="5" width="38" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_871_9053"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_871_9053" result="shape"/>
    </filter>
    <clipPath id="clip0_871_9053">
    <rect width="50" height="50" fill="white"/>
    </clipPath>
    </defs>
    </svg>`,
    iconSize: new L.Point(50, 50),
    iconAnchor: [20, 40],
  });
};

export const createNotFilledIcon = (type) => {
  let color;

  switch (type) {
    case "black":
      color = "#333";
      break;
    case "gray":
      color = "#A4A4A4";
      break;
    case "gray-light":
      color = "#EAEAEA";
      break;
    case "yellow-light":
      color = "#FFD786";
      break;
    case "yellow":
      color = "#F9B835";
      break;
    case "blue":
      color = "#1E659C";
      break;
    default:
      color = "#333";
      break;
  }

  return new L.DivIcon({
    className: "relative",
    html: `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_812_9074)">
    <g filter="url(#filter0_d_812_9074)">
    <path d="M23.4584 44.193C12.107 27.7368 10 26.0479 10 20C10 11.7157 16.7157 5 25 5C33.2843 5 40 11.7157 40 20C40 26.0479 37.893 27.7368 26.5416 44.193C25.7966 45.2691 24.2033 45.269 23.4584 44.193ZM25 26.25C28.4518 26.25 31.25 23.4518 31.25 20C31.25 16.5482 28.4518 13.75 25 13.75C21.5482 13.75 18.75 16.5482 18.75 20C18.75 23.4518 21.5482 26.25 25 26.25Z" fill="${color}"/>
    </g>
    </g>
    <defs>
    <filter id="filter0_d_812_9074" x="6" y="5" width="38" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_812_9074"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_812_9074" result="shape"/>
    </filter>
    <clipPath id="clip0_812_9074">
    <rect width="50" height="50" fill="white"/>
    </clipPath>
    </defs>
    </svg>`,
    iconSize: new L.Point(50, 50),
    iconAnchor: [20, 40],
  });
};
