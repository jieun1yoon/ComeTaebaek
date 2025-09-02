import React from "react";
import "./PlaceDetail.css";

function PlaceDetail({ place, language, onHome, onLang }) {
    if (!place) return null;

    // 언어별 오디오/이미지
    const audioSrc = language === "en" ? place.audio_en : place.audio_ko;
    const imageSrc = place.image;

    return (
        <div className="place-detail">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb d-flex justify-content-between align-items-center">
                    <li>
                        <button
                            className="lang-btn btn btn-link"
                            onClick={onLang}
                            style={{
                                fontSize: "24px",
                                textDecoration: "none",
                                background: "none",
                                border: "none",
                                padding: 0,
                            }}
                        >
                            {language === "ko" ? "🇺🇸" : "🇰🇷"}
                        </button>
                    </li>
                    <li className="ms-auto">
                        <button
                            className="btn btn-link"
                            onClick={onHome}
                            style={{
                                fontSize: "20px",
                                textDecoration: "none",
                                background: "none",
                                border: "none",
                                padding: 0,
                                color: "#222",
                            }}
                        >
                            Home
                        </button>
                    </li>
                </ol>
            </nav>
            <div className="card mb-3">
                <h3 className="card-header">
                    {language === "ko" ? place.name_ko : place.name_en}
                </h3>
                <div className="card-body">
                    {/* 이미지 */}
                    <img
                        src={imageSrc}
                        alt={place.name_ko}
                        style={{
                            display: "block",
                            margin: "0 auto 2rem",
                            maxWidth: "100%",
                            height: "auto",
                        }}
                    />
                    {/* 오디오 */}
                    <audio
                        src={audioSrc}
                        controls
                        style={{ width: "100%", marginBottom: "2rem" }}
                    />
                    {/* 설명 */}
                    <div
                        className="place-desc"
                        style={{
                            whiteSpace: "pre-line",
                            fontSize: "1.05rem",
                            color: "#222",
                            marginBottom: "2rem",
                        }}
                    >
                        {language === "en"
                            ? place.description_en
                            : place.description_ko}
                    </div>
                    {/* 지도 */}
                    {language === "en" && place.map_en && (
                        <div
                            dangerouslySetInnerHTML={{ __html: place.map_en }}
                            style={{ marginBottom: "2rem" }}
                        />
                    )}
                    {language === "ko" && place.map_ko && (
                        <a
                            href={place.map_ko}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
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
