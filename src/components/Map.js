import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SMap = styled.div`
  /* display: flex;
  flex-direction: column; */
`;
const { kakao } = window;

const Map = ({ searchPlace }) => {
  // 검색결과 배열에 담아줌
  const [Places, setPlaces] = useState([]);

  useEffect(() => {
    // 마커를 저장할 정보창과 배열을 생성합니다.
    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    // var markers = [];

    // 지도의 컨테이너를 가져오고 지도의 옵션을 설정합니다.
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    // 사용자가 검색어를 입력한 경우 장소 객체를 생성하고 키워드 검색을 수행합니다.
    const ps = new kakao.maps.services.Places();
    console.log("ps:", ps);

    // 키워드 검색을 위한 콜백 기능
    const placesSearchCB = (data, status, pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색 결과를 확대하기 위해 LatLngBounds 객체를 생성합니다.
        let bounds = new kakao.maps.LatLngBounds();
        // 각 검색 결과에 대한 마커를 표시하고 범위를 확장합니다.
        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        // 바운드로 확대 및 페이지 매김 표시
        map.setBounds(bounds);
        // 페이지 목록 보여주는 displayPagination() 추가
        displayPagination(pagination);
        // 검색 결과로 장소 상태 업데이트
        setPlaces(data);
      }
    };

    if (searchPlace) {
      ps.keywordSearch(searchPlace, placesSearchCB);
    }

    // 검색결과 목록 하단에 페이지 번호 표시
    const displayPagination = (pagination) => {
      let paginationEl = document.getElementById("pagination"),
        fragment = document.createDocumentFragment(),
        i;

      // 기존에 추가된 페이지 번호 삭제
      while (paginationEl.hasChildNodes()) {
        paginationEl.removeChild(paginationEl.lastChild);
      }
      // 각 페이지에 대한 링크 만들기
      for (i = 1; i <= pagination.last; i++) {
        let el = document.createElement("a");
        el.href = "#";
        el.innerHTML = i;

        // 현재 페이지 강조 표시
        if (i === pagination.current) {
          el.className = "on";
        } else {
          el.onclick = ((i) => {
            return () => {
              pagination.gotoPage(i);
            };
          })(i);
        }

        fragment.appendChild(el);
      }
      paginationEl.appendChild(fragment);
    };

    // 검색 결과에 대한 마커를 표시하는 기능
    const displayMarker = (place) => {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
        title: place.place_name,
      });
      kakao.maps.event.addListener(marker, "click", () => {
        const position = marker.getPosition(); // 위도, 경도
        const title = marker.getTitle(); //상호명
        console.log("position:", position, "title:", title);
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            "</div>"
        );
        infowindow.open(map, marker);
      });
    };
  }, [searchPlace]);

  // 지도 및 검색 결과 렌더링
  return (
    <SMap>
      <div
        id="myMap"
        style={{
          width: "1000px",
          height: "800px",
        }}
      ></div>
      <div id="result-list">
        {Places.map((item, i) => (
          <div key={i} style={{ marginTop: "20px" }}>
            <span>{i + 1}</span>
            <div>
              <h5>{item.place_name}</h5>
              {item.road_address_name ? (
                <div>
                  <span>{item.road_address_name}</span>
                  <span>{item.address_name}</span>
                </div>
              ) : (
                <span>{item.address_name}</span>
              )}
              <span>{item.phone}</span>
            </div>
          </div>
        ))}
        <div id="pagination"></div>
      </div>
    </SMap>
  );
};

export default Map;
