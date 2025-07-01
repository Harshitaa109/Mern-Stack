import { useState } from "react";

const App = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Bulb Switch App</h1>
            <img
                src={
                    isOn
                        ? "https://www.w3schools.com/js/pic_bulbon.gif"
                        : "https://www.w3schools.com/js/pic_bulboff.gif"
                }
                alt={isOn ? "Bulb On" : "Bulb Off"}
                style={{ width: "200px" }}
            />
            <div style={{ marginTop: "20px" }}>
                <button
                    onClick={handleToggle}
                    style={{
                        padding: "10px 20px",
                        fontSize: "18px",
                        backgroundColor: isOn ? "red" : "green",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                    }}
                >
                    {isOn ? "Turn Off" : "Turn On"}
                </button>
            </div>
        </div>
    );
};

export default App;
