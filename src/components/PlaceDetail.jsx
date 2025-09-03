import React from "react";

function PlaceDetail({ place, language, onHome, onLang }) {
    if (!place) return null;

    const imageSrc = `/images/${place.image.replace(/^\/|images\//, "")}`;
    const audioSrc =
        language === "en"
            ? `/audio/${place.audio_en.replace(/^\/|audio\//, "")}`
            : `/audio/${place.audio_ko.replace(/^\/|audio\//, "")}`;

    return (
        <div className="container my-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <button
                    className="btn btn-outline-light fs-3 p-0"
                    onClick={onLang}
                    aria-label="언어 변경"
                >
                    {language === "ko" ? "🇺🇸" : "🇰🇷"}
                </button>
                <button
                    className="btn btn-light fs-4 p-0 text-dark"
                    onClick={onHome}
                >
                    Home
                </button>
            </div>
            <div className="card border-light mb-3">
                <h3 className="card-header">
                    {language === "ko" ? place.name_ko : place.name_en}
                </h3>
                <div className="card-body">
                    <img
                        src={imageSrc}
                        alt={place.name_ko}
                        className="img-fluid rounded mb-4"
                        style={{ maxHeight: "400px", objectFit: "cover" }}
                    />
                    <audio src={audioSrc} controls className="w-100 mb-4" />
                    <div
                        className="mb-4"
                        style={{
                            whiteSpace: "pre-line",
                            fontSize: "1.05rem",
                            color: "#222",
                        }}
                    >
                        {language === "en"
                            ? place.description_en
                            : place.description_ko}
                    </div>
                    {language === "en" && place.map_en && (
                        <div
                            dangerouslySetInnerHTML={{ __html: place.map_en }}
                            className="mb-4"
                        />
                    )}
                    {language === "ko" && place.map_ko && (
                        <a
                            href={place.map_ko}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary mb-4"
                        >
                            네이버지도에서 보기
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PlaceDetail;
