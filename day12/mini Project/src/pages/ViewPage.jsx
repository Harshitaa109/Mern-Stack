import { useParams } from "react-router-dom"; // ✅ Correct package
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useEffect, useState, useCallback } from "react";

const ViewPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    const getData = useCallback(async () => {
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        const data = await response.json();
        setProduct(data);
    }, [productId]); // ✅ Added productId as a dependency

    useEffect(() => {
        getData();
    }, [getData]); // ✅ Safe dependency

    return (
        <div>
            <Header />
            <main className="p-4">
                <h4 className="text-xl font-semibold mb-4">Product ID: {productId}</h4>
                <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
                <div className="flex flex-wrap items-center justify-center gap-6">
                    {product.images?.map((imgUrl) => (
                        <img key={imgUrl} src={imgUrl} alt="Product" className="w-72 rounded-md" />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export { ViewPage };
