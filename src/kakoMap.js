import React, { useEffect } from "react";

const { kakao } = window;

const KakaoMap = () => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(
        37.558090961074825,
        126.99847210567884
      ),
      level: 3,
    };

    const map = new window.kakao.maps.Map(container, options);
  }, []);
  return <div id="map" style={{ width: "500px", height: "500px" }} />;
};

export default KakaoMap;
