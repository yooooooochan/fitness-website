import React, { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const Mapbox = () => {
    const [isOneOpen, setIsOneOpen] = useState(false);
    const [isTwoOpen, setIsTwoOpen] = useState(false);

    return (
        <Map
            center={{ lat: 37.294, lng: 126.976 }}
            style={{ width: "100%", height: "500px" }}
        >
            <MapMarker
                position={{ lat: 37.294, lng: 126.976 }}
                image={{
                    src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
                    size: {
                        width: 24,
                        height: 35,
                    },
                }}
            />
            <MapMarker
                position={{ lat: 37.295, lng: 126.975 }}
                clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
                onClick={() => setIsOneOpen(true)}
            >
                {isOneOpen && (
                    <div style={{ minWidth: "150px" }}>
                        <img
                            alt="close"
                            width="14"
                            height="13"
                            src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
                            style={{
                                position: "absolute",
                                right: "5px",
                                top: "5px",
                                cursor: "pointer",
                            }}
                            onClick={() => setIsOneOpen(false)}
                        />
                        <div className="label" style={{ color: "#000" }}>
                            <span className="left"></span>

                            <h5 className="center">김율전</h5>

                            <h5 className="center">010-1234-5678</h5>

                            <h5 className="center">"같이 운동해요!"</h5>

                            <span className="right"></span>
                        </div>
                    </div>
                )}
            </MapMarker>
            <MapMarker
                position={{ lat: 37.293, lng: 126.974 }}
                onClick={() => setIsTwoOpen(true)}
            >
                {isTwoOpen && (
                    <div style={{ minWidth: "150px" }}>
                        <img
                            alt="close"
                            width="14"
                            height="13"
                            src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
                            style={{
                                position: "absolute",
                                right: "5px",
                                top: "5px",
                                cursor: "pointer",
                            }}
                            onClick={() => setIsTwoOpen(false)}
                        />
                        <div className="label" style={{ color: "#000" }}>
                            <span className="left"></span>
                            <h5 className="center">박명륜</h5>
                            <h5 className="center">010-1111-2222</h5>
                            <h5 className="center">"운동 친구 구해요~"</h5>
                            <span className="right"></span>
                        </div>
                    </div>
                )}
            </MapMarker>
        </Map>
    );
};

export default Mapbox;
