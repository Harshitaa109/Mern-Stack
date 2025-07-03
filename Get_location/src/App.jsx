import { useState } from "react";

const App = () => {
    const [currentLocation, setCurrentLocation] = useState(null);
    const [searchName, setSearchName] = useState("");
    const [searchLat, setSearchLat] = useState("");
    const [searchLon, setSearchLon] = useState("");
    const [searchedLocation, setSearchedLocation] = useState(null);
    const [error, setError] = useState("");

    // Handle current location
    const handleGetCurrentLocation = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setCurrentLocation({ latitude, longitude });
                    setError("");
                },
                () => {
                    setError("Permission denied or unavailable.");
                }
            );
        } else {
            setError("Geolocation not supported.");
        }
    };

    // Open current location in Google Maps
    const handleOpenMap = () => {
        if (currentLocation) {
            const { latitude, longitude } = currentLocation;
            window.open(`https://www.google.com/maps?q=${latitude},${longitude}`, "_blank");
        }
    };

    // Search by name or country
    const handleSearchByName = async () => {
        if (!searchName.trim()) return;
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
                    searchName
                )}&format=json&limit=1`
            );
            const data = await response.json();
            if (data && data.length > 0) {
                setSearchedLocation({
                    name: data[0].display_name,
                    latitude: data[0].lat,
                    longitude: data[0].lon,
                });
                setError("");
            } else {
                setError("No location found.");
                setSearchedLocation(null);
            }
        } catch {
            setError("Error fetching location.");
        }
    };

    // Search by latitude & longitude
    const handleSearchByCoords = async () => {
        if (!searchLat || !searchLon) return;
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?lat=${searchLat}&lon=${searchLon}&format=json`
            );
            const data = await response.json();
            if (data && data.display_name) {
                setSearchedLocation({
                    name: data.display_name,
                    latitude: searchLat,
                    longitude: searchLon,
                });
                setError("");
            } else {
                setError("No place found at given coordinates.");
                setSearchedLocation(null);
            }
        } catch {
            setError("Error fetching reverse geocoding.");
        }
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                fontFamily: "Arial, sans-serif",
                backgroundColor: "#f5f5f5",
                padding: "30px",
                textAlign: "center",
            }}
        >
            <h1>📍 Location App</h1>

            {/* Current Location Section */}
            <button onClick={handleGetCurrentLocation} style={buttonStyle}>
                Get Current Location
            </button>

            {currentLocation && (
                <>
                    <p>
                        <strong>Latitude:</strong> {currentLocation.latitude} <br />
                        <strong>Longitude:</strong> {currentLocation.longitude}
                    </p>
                    <button onClick={handleOpenMap} style={buttonStyle}>
                        Open Map
                    </button>
                </>
            )}

            {/* Search by Name */}
            <div style={{ marginTop: "30px", width: "100%", maxWidth: "400px" }}>
                <h3>🔍 Search by Place Name</h3>
                <input
                    type="text"
                    placeholder="Enter city or country"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                    style={inputStyle}
                />
                <button onClick={handleSearchByName} style={buttonStyle}>
                    Search by Name
                </button>
            </div>

            {/* Search by Coordinates */}
            <div style={{ marginTop: "30px", width: "100%", maxWidth: "400px" }}>
                <h3>📌 Search by Coordinates</h3>
                <input
                    type="text"
                    placeholder="Latitude"
                    value={searchLat}
                    onChange={(e) => setSearchLat(e.target.value)}
                    style={inputStyle}
                />
                <input
                    type="text"
                    placeholder="Longitude"
                    value={searchLon}
                    onChange={(e) => setSearchLon(e.target.value)}
                    style={inputStyle}
                />
                <button onClick={handleSearchByCoords} style={buttonStyle}>
                    Search by Lat/Lon
                </button>
            </div>

            {/* Result Section */}
            {searchedLocation && (
                <div style={{ marginTop: "30px" }}>
                    <h3>📌 Result:</h3>
                    <p>
                        <strong>Name:</strong> {searchedLocation.name} <br />
                        <strong>Latitude:</strong> {searchedLocation.latitude} <br />
                        <strong>Longitude:</strong> {searchedLocation.longitude}
                    </p>
                    <button
                        onClick={() =>
                            window.open(
                                `https://www.google.com/maps?q=${searchedLocation.latitude},${searchedLocation.longitude}`,
                                "_blank"
                            )
                        }
                        style={buttonStyle}
                    >
                        View on Map
                    </button>
                </div>
            )}

            {/* Error Message */}
            {error && (
                <p style={{ color: "red", marginTop: "20px", fontWeight: "bold" }}>
                    ⚠️ {error}
                </p>
            )}
        </div>
    );
};

const buttonStyle = {
    padding: "10px 15px",
    marginTop: "10px",
    marginBottom: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
};

const inputStyle = {
    padding: "8px",
    margin: "5px 0",
    width: "100%",
    borderRadius: "4px",
    border: "1px solid #ccc",
};

export default App;
