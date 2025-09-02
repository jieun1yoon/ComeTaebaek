import React, { useState } from "react";
import placesData from "./data/places.json";
import Home from "./components/Home";
import PlaceDetail from "./components/PlaceDetail";
import "./styles/App.css";

function App() {
    const [language, setLanguage] = useState("ko");
    const [selectedId, setSelectedId] = useState(null);

    const handleSelect = (id) => setSelectedId(id);
    const handleHome = () => setSelectedId(null);
    const handleLang = () => setLanguage(language === "ko" ? "en" : "ko");

    const place = placesData.find((p) => p.id === selectedId);

    return (
        <div className="app">
            {selectedId ? (
                <PlaceDetail
                    place={place}
                    language={language}
                    onHome={handleHome}
                    onLang={handleLang}
                />
            ) : (
                <Home
                    places={placesData}
                    language={language}
                    onSelect={handleSelect}
                    onLang={handleLang}
                />
            )}
        </div>
    );
}

export default App;
