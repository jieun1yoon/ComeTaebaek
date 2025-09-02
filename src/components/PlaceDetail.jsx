import React from "react";
import "./PlaceDetail.css";

function PlaceDetail({ place, language, onHome, onLang }) {
    if (!place) return null;

    // Vite base 경로 처리
    const basePath = import.meta.env.BASE_URL || "/ComeTaebaek/";

    // 언어별 오디오/이미지 경로(base 포함)
    const audioSrc =
        language === "en"
            ? basePath + place.audio_en.replace(/^\//, "")
            : basePath + place.audio_ko.replace(/^\//, "");
    const imageSrc = basePath + place.image.replace(/^\//, "");

    return (
        <div className="place-detail">
            {/* 네비게이션: 왼쪽 언어 아이콘, 오른쪽 Home 버튼 */}
            <nav
                aria-label="breadcrumb"
                className="d-flex justify-content-between align-items-center"
                style={{ marginBottom: "1rem" }}
            >
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
