import { useState } from "react";

const App = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1> Star Rating App</h1>
            <div style={{ display: "inline-flex", gap: "10px" }}>
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        style={{
                            fontSize: "40px",
                            color:
                                (hover || rating) >= star ? "gold" : "lightgray",
                            cursor: "pointer",
                            transition: "color 0.2s",
                        }}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                    >
                        ★
                    </span>
                ))}
            </div>
            <p style={{ marginTop: "20px", fontSize: "20px" }}>
                {rating > 0 ? `You rated: ${rating} star(s)` : "No rating yet"}
            </p>
        </div>
    );
};

export default App;
