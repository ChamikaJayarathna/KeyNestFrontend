import React from "react";

const iconMap = {
  BiClipboardFill: <i className="bi bi-clipboard-fill" />,
  BiMailbox2: <i className="bi bi-mailbox2" />,
  BiFileEarmarkFontFill: <i className="bi bi-file-earmark-font-fill" />,
  BiCash: <i className="bi bi-cash" />,
  BiGeoAltFill: <i className="bi bi-geo-alt-fill" />,
  BiBed: <i className="bi bi-bed" />,
  BiBuildingsFill: <i className="bi bi-buildings-fill" />,
  BiGridFill: <i className="bi bi-grid-1x2-fill" />,
  BiPinAngleFill: <i className="bi bi-pin-angle-fill" />,
  BiHeartFill: <i className="bi bi-heart-fill" />,
  BiCrosshair: <i className="bi bi-crosshair" />,
  BiCrosshair2: <i className="bi bi-crosshair2" />,
};

const IconField = ({ icon }) => {
  return <div className="text-primary bg-blue-100 p-1.5 rounded-full">{iconMap[icon]}</div>;
};

export default IconField;
