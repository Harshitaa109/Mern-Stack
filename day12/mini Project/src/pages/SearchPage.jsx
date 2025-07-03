import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SearchResults } from "../components/SearchResults";
import { useSearchParams } from "react-router-dom"; // ✅ Correct package
import { useEffect } from "react";

const SearchPage = ({ text, handleSearchText }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    // ✅ Effect 1: When URL has search text, set it to input
    useEffect(() => {
        const searchTextFromURL = searchParams.get("text");
        if (searchTextFromURL) {
            handleSearchText(searchTextFromURL);
        }
    }, [searchParams, handleSearchText]); // ✅ Added dependencies

    // ✅ Effect 2: When text changes, update URL
    useEffect(() => {
        console.log("🟡 : text:", text);
        setSearchParams((prev) => {
            const newParams = new URLSearchParams(prev);
            newParams.set("text", text);
            return newParams;
        });
    }, [text, setSearchParams]); // ✅ Added dependencies

    return (
        <div>
            <Header text={text} handleSearchText={handleSearchText} />
            <main className="p-4">
                <p className="text-lg">
                    Search results for:{" "}
                    <span className="text-red-800 font-bold">{text}</span>
                </p>
                <SearchResults searchQuery={text} />
            </main>
            <Footer />
        </div>
    );
};

export { SearchPage };
