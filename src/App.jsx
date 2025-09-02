import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PlaceDetail from "./components/PlaceDetail";
import placesData from "./data/places.json";
import "./styles/bootstrap.css";

function App() {
    const [language, setLanguage] = useState("ko");

    return (
        <BrowserRouter basename={import.meta.env.BASE_URL || "/ComeTaebaek/"}>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            places={placesData}
                            onSelect={(id) =>
                                (window.location.href = `/place/${id}`)
                            }
                            language={language}
                        />
                    }
                />
                <Route
                    path="/place/:id"
                    element={
                        <PlaceDetailWrapper
                            language={language}
                            setLanguage={setLanguage}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

// 장소 상세페이지용 래퍼
import { useParams, useNavigate } from "react-router-dom";
function PlaceDetailWrapper({ language, setLanguage }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const place = placesData.find((p) => p.id === id);

    return (
        <PlaceDetail
            place={place}
            language={language}
            onHome={() => navigate("/")}
            onLang={() => setLanguage(language === "ko" ? "en" : "ko")}
        />
    );
}

export default App;
