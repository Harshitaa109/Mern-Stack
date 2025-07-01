// Called when suggestions are returned
const renderSuggestions = (data) => {
    const suggestions = data.results;
    const suggestionBox = document.getElementById("search-suggestions");

    suggestionBox.innerHTML = "";

    if (!suggestions || suggestions.length === 0) return;

    suggestions.forEach((text) => {
        const suggestionItem = document.createElement("p");
        suggestionItem.innerText = text;
        suggestionItem.onclick = () => {
            document.querySelector('input[name="search-text"]').value = text;
            suggestionBox.innerHTML = "";
        };
        suggestionBox.appendChild(suggestionItem);
    });
};

// Fetches autocomplete suggestions from YouTube138 API
const handleSearchSuggestions = (e) => {
    const searchText = e.target.value.trim();
    const suggestionBox = document.getElementById("search-suggestions");

    if (searchText.length < 2) {
        suggestionBox.innerHTML = "";
        return;
    }

    fetch(`https://youtube138.p.rapidapi.com/search/?q=${searchText})}&hl=en&gl=IN`, {
        method: "GET",
        headers: {
            "x-rapidapi-key": "6a4ce8ecf2msh911535f4bbf4866p175d1djsnf76e8f82961", // Use your key here
            "x-rapidapi-host": "youtube138.p.rapidapi.com",
        },
    })
        .then((response) => {
            if (response.status === 429) {
                console.warn("⚠️ Too many requests. Slow down typing or upgrade your plan.");
                return null; // Don't proceed if rate-limited
            }
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            if (data) {
                renderSuggestions(data);
            }
        })
        .catch((err) => {
            console.error("❌ Error fetching suggestions:", err.message);
        });
};
  
// Debounce logic to prevent rapid API firing
let timeoutId = null;
window.handleSearchSuggestionSmart = (e) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        handleSearchSuggestions(e);
    }, 1000); // 1 second delay
};
