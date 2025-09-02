import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PlaceDetailWrapper from "./components/PlaceDetailWrapper";
import placesData from "./data/places.json";
import "./styles/bootstrap.css";

function App() {
    const [language, setLanguage] = useState("ko");

    return (
        <BrowserRouter basename={import.meta.env.BASE_URL || "/ComeTaebaek/"}>
            <Routes>
                <Route
                    path="/"
                    element={<Home places={placesData} language={language} />}
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

export default App;
