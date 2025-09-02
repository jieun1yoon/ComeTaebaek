import React from "react";
import placesData from "../data/places.json";

export default function Home({ onSelect, language }) {
    const intro = placesData.find((p) => p.id === "00");
    const walkList = placesData.filter((p) => p.id.startsWith("w"));
    const rideList = placesData.filter((p) => p.id.startsWith("r"));

    // Vite base 경로 처리
    const basePath = import.meta.env.BASE_URL || "/ComeTaebaek/";

    // 버튼 컴포넌트 (섬네일 이미지 height만 고정)
    const PlaceBtn = ({ place }) => (
        <button
            className="place-btn"
            onClick={() => onSelect(place.id)}
            style={{
                width: "100%",
                marginBottom: "1rem",
                padding: "1.2rem",
                borderRadius: "1rem",
                border: "1px solid #ddd",
                background: "#fff",
                boxShadow: "0 2px 8px #eee",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "#222",
            }}
        >
            {/* 섬네일 이미지: 높이만 고정, 가로는 원본 비율 */}
            <img
                src={basePath + place.image}
                alt={place.name_ko}
                style={{
                    height: "64px",
                    width: "auto",
                    borderRadius: "0.5rem",
                    marginBottom: "0.7rem",
                    boxShadow: "0 1px 4px #eee",
                    objectFit: "contain",
                    display: "block",
                }}
            />
            <div
                style={{
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    color: "#222",
                }}
            >
                {place.name_ko}
            </div>
            <div
                style={{
                    color: "#222",
                    fontSize: "0.95rem",
                    marginTop: "0.3rem",
                }}
            >
                {place.name_en}
            </div>
        </button>
    );

    return (
        <div
            className="home-main"
            style={{
                maxWidth: 900,
                margin: "0 auto",
                padding: "2rem 1rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            {/* 1행: intro 버튼 */}
            <div
                style={{
                    marginBottom: "2rem",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                {intro && (
                    <div style={{ maxWidth: 400, width: "100%" }}>
                        <PlaceBtn place={intro} />
                    </div>
                )}
            </div>
            {/* 2행: 2단 분할 */}
            <div
                style={{
                    display: "flex",
                    gap: "2rem",
                    width: "100%",
                    justifyContent: "center",
                }}
            >
                {/* 왼쪽: Walk Together */}
                <div style={{ flex: 1, maxWidth: 400 }}>
                    <div
                        style={{
                            fontWeight: "bold",
                            fontSize: "1.2rem",
                            marginBottom: "1rem",
                            textAlign: "center",
                            color: "#222",
                        }}
                    >
                        같이 걷기 (Walk Together)
                    </div>
                    {walkList.map((place) => (
                        <PlaceBtn key={place.id} place={place} />
                    ))}
                </div>
                {/* 오른쪽: Ride Together */}
                <div style={{ flex: 1, maxWidth: 400 }}>
                    <div
                        style={{
                            fontWeight: "bold",
                            fontSize: "1.2rem",
                            marginBottom: "1rem",
                            textAlign: "center",
                            color: "#222",
                        }}
                    >
                        같이 타기 (Ride Together)
                    </div>
                    {rideList.map((place) => (
                        <PlaceBtn key={place.id} place={place} />
                    ))}
                </div>
            </div>
        </div>
    );
}
