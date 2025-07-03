import { useEffect, useRef, useState } from "react";

const App = () => {
    const [timeInSec, setTimeInSec] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(true);
    const [laps, setLaps] = useState([]);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isTimerRunning) {
            intervalRef.current = setInterval(() => {
                setTimeInSec((prev) => prev + 1);
            }, 1000);
        }

        return () => clearInterval(intervalRef.current);
    }, [isTimerRunning]);

    const handlePause = () => setIsTimerRunning(false);
    const handlePlay = () => setIsTimerRunning(true);

    const handleReset = () => {
        setIsTimerRunning(false);
        setTimeInSec(0);
        setLaps([]);
        clearInterval(intervalRef.current);
    };

    const handleLap = () => {
        setLaps((prevLaps) => [...prevLaps, timeInSec]);
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60)
            .toString()
            .padStart(2, "0");
        const secs = (seconds % 60).toString().padStart(2, "0");
        return `${mins}:${secs}`;
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                backgroundColor: "#f4f4f4",
                fontFamily: "sans-serif",
            }}
        >
            <h1>Stopwatch</h1>

            <h2 style={{ fontSize: "50px", margin: "20px" }}>
                {formatTime(timeInSec)}
            </h2>

            <div style={{ marginBottom: "20px" }}>
                {isTimerRunning ? (
                    <button onClick={handlePause}>PAUSE</button>
                ) : (
                    <button onClick={handlePlay}>PLAY</button>
                )}

                <button
                    onClick={handleLap}
                    disabled={!isTimerRunning}
                    style={{ marginLeft: "10px" }}
                >
                    LAP
                </button>

                <button
                    onClick={handleReset}
                    style={{ marginLeft: "10px" }}
                >
                    RESET
                </button>
            </div>

            {laps.length > 0 && (
                <div style={{ textAlign: "left" }}>
                    <h3>Lap Times:</h3>
                    <ul>
                        {laps.map((lapTime, index) => (
                            <li key={index}>
                                Lap {index + 1}: {formatTime(lapTime)}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default App;
