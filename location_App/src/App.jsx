import React, { useState } from "react";

const App = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [error, setError] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const handleGetLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                    setError("");
                },
                () => {
                    setError("Permission denied or unable to retrieve location.");
                }
            );
        } else {
            setError("Geolocation is not supported by your browser.");
        }
    };

    const handleSearch = () => {
        if (searchQuery.trim() !== "") {
            const query = encodeURIComponent(searchQuery);
            window.open(
                `https://www.google.com/maps/search/?api=1&query=${query}`,
                "_blank"
            );
        }
    };

    const handleOpenCurrentLocation = () => {
        if (latitude && longitude) {
            window.open(
                `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`,
                "_blank"
            );
        }
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                backgroundColor: "#e9f5f5",
            }}
        >
            <h1>Location Finder App</h1>

            <div
                style={{
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    minWidth: "300px",
                }}
            >
                <h3>Get Your Current Location</h3>
                <button onClick={handleGetLocation}>Get Current Location</button>

                {latitude && longitude && (
                    <div style={{ marginTop: "10px" }}>
                        <p>Latitude: {latitude}</p>
                        <p>Longitude: {longitude}</p>
                        <button onClick={handleOpenCurrentLocation}>
                            Open in Map
                        </button>
                    </div>
                )}

                {error && (
                    <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
                )}

                <hr style={{ margin: "20px 0" }} />

                <h3>Search Any Location</h3>
                <input
                    type="text"
                    placeholder="Enter city, name, or country"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                        padding: "8px",
                        width: "100%",
                        marginBottom: "10px",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                    }}
                />
                <button onClick={handleSearch} disabled={!searchQuery.trim()}>
                    Search in Map
                </button>
            </div>
        </div>
    );
};

export default App;
