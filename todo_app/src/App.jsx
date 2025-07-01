import { useState } from "react";

const App = () => {
    const [editIndex, setEditIndex] = useState(-1);
    const [fruits, setFruits] = useState([
        { name: "Kiwi", color: "green", price: 600 },
        { name: "Banana", color: "yellow", price: 40 },
        { name: "Apple", color: "red", price: 200 },
        { name: "Mango", color: "orange", price: 150 },
    ]);

    const [editedFruit, setEditedFruit] = useState({
        name: "",
        color: "",
        price: "",
    });

    const handleEdit = (idx) => {
        setEditIndex(idx);
        setEditedFruit(fruits[idx]);
    };

    const handleSave = () => {
        const updatedFruits = [...fruits];
        updatedFruits[editIndex] = editedFruit;
        setFruits(updatedFruits);
        setEditIndex(-1);
    };

    const handleCancel = () => {
        setEditIndex(-1);
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh", // Full screen height
                backgroundColor: "#f0f0f0",
            }}
        >
            <div>
                {fruits.map((elem, idx) => {
                    if (editIndex === idx) {
                        return (
                            <div
                                key={idx}
                                style={{
                                    backgroundColor: elem.color,
                                    padding: "20px",
                                    margin: "10px",
                                    borderRadius: "10px",
                                    minWidth: "250px",
                                    textAlign: "center",
                                }}
                            >
                                <input
                                    type="text"
                                    value={editedFruit.name}
                                    onChange={(e) =>
                                        setEditedFruit({
                                            ...editedFruit,
                                            name: e.target.value,
                                        })
                                    }
                                    placeholder="Fruit Name"
                                />
                                <br />
                                <input
                                    type="text"
                                    value={editedFruit.color}
                                    onChange={(e) =>
                                        setEditedFruit({
                                            ...editedFruit,
                                            color: e.target.value,
                                        })
                                    }
                                    placeholder="Color"
                                />
                                <br />
                                <input
                                    type="number"
                                    value={editedFruit.price}
                                    onChange={(e) =>
                                        setEditedFruit({
                                            ...editedFruit,
                                            price: Number(e.target.value),
                                        })
                                    }
                                    placeholder="Price"
                                />
                                <br />
                                <button onClick={handleSave}>Save</button>
                                <button onClick={handleCancel}>Cancel</button>
                            </div>
                        );
                    } else {
                        return (
                            <div
                                key={idx}
                                style={{
                                    backgroundColor: elem.color,
                                    padding: "20px",
                                    margin: "10px",
                                    borderRadius: "10px",
                                    minWidth: "250px",
                                    textAlign: "center",
                                }}
                            >
                                <h3>{elem.name}</h3>
                                <h4>Color: {elem.color}</h4>
                                <h4>Price: Rs. {elem.price}</h4>
                                <button onClick={() => handleEdit(idx)}>Edit</button>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default App;
