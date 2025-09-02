import { useParams, useNavigate } from "react-router-dom";
import placesData from "../data/places.json";
import PlaceDetail from "./PlaceDetail";

export default function PlaceDetailWrapper({ language, setLanguage }) {
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
