import React, { useRef, useEffect } from "react";

function Video({ src, isPlaying }) {
  return (
    <video autoPlay src={src} muted loop className="w-96 object-contain" />
  );
}

export default Video;
