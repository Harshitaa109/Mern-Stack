import { useEffect, useState, useCallback } from "react";
import { ProductResultCard } from "./ProductResultCard";

const LIMIT = 4;

const SearchResults = ({ searchQuery }) => {
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    console.log("🟡 : page:", page);

    const getSearchResults = useCallback(async () => {
        const response = await fetch(
            `https://dummyjson.com/products/search?q=${searchQuery}&skip=${LIMIT * (page - 1)}&limit=${LIMIT}`
        );
        const data = await response.json();
        console.log("🟡 : data:", data);

        setResults(data.products);
        setTotalPages(Math.ceil(data.total / LIMIT));
    }, [searchQuery, page]);

    useEffect(() => {
        console.log("---starting useEffect----");
        const timeoutId = setTimeout(getSearchResults, 400);

        return () => {
            console.log("---cleaning-up useEffect----");
            clearTimeout(timeoutId);
        };
    }, [getSearchResults]);

    useEffect(() => {
        setPage(1);
    }, [searchQuery]);

    const dummyArray = new Array(totalPages).fill("hello");

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">{searchQuery}</h2>
            <div className="flex flex-col gap-6">
                {results.map((elem) => (
                    <ProductResultCard
                        key={elem.id}
                        id={elem.id}
                        title={elem.title}
                        price={elem.price}
                        rating={elem.rating}
                        thumbnail={elem.thumbnail}
                    />
                ))}
            </div>

            <div className="p-4 flex gap-x-4 gap-y-2 items-center justify-center flex-wrap">
                {dummyArray.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setPage(idx + 1)}
                        className={`px-2 py-1 rounded-md text-sm cursor-pointer ${
                            page === idx + 1
                                ? "bg-blue-700 text-white"
                                : "bg-blue-500 text-white"
                        }`}
                    >
                        {idx + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export { SearchResults };
