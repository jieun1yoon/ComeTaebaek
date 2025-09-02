import React from "react";

export default function Home({ places, onSelect, language, onLang }) {
    const intro = places.find((p) => p.id === "00");
    const walkList = places.filter((p) => p.id.startsWith("w"));
    const rideList = places.filter((p) => p.id.startsWith("r"));
    const basePath = import.meta.env.BASE_URL || "/ComeTaebaek/";

    const PlaceBtn = ({ place }) => (
        <button
            className="btn btn-light d-block w-100 mb-3 text-start"
            onClick={() => onSelect(place.id)}
        >
            <img
                src={basePath + place.image}
                alt={place.name_ko}
                className="img-fluid rounded mb-2"
                style={{ height: "64px", width: "auto", objectFit: "contain" }}
            />
            <div className="fw-bold">{place.name_ko}</div>
            <div className="text-secondary">{place.name_en}</div>
        </button>
    );

    return (
        <div className="container py-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <button
                    className="btn btn-link fs-3 p-0"
                    onClick={onLang}
                    aria-label="언어 변경"
                >
                    {language === "ko" ? "🇺🇸" : "🇰🇷"}
                </button>
            </div>
            <div className="row mb-4">
                <div className="col-12 col-md-6 mx-auto">
                    {intro && <PlaceBtn place={intro} />}
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="fw-bold fs-5 mb-3 text-center">
                        같이 걷기 (Walk Together)
                    </div>
                    {walkList.map((place) => (
                        <PlaceBtn key={place.id} place={place} />
                    ))}
                </div>
                <div className="col-12 col-md-6">
                    <div className="fw-bold fs-5 mb-3 text-center">
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
