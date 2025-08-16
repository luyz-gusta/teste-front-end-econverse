import Advertisement from "./Advertisement";
import Brands from "./Brands";
import Categories from "./Categories";
import Hero from "./Hero";
import ProductContainer from "./ProductContainer";

export default function Main() {
    return (
        <>
            <Hero />
            <Categories />
            <main>
                <ProductContainer withFilter={true} />
                <Advertisement />
                <ProductContainer withFilter={false} />
                <Advertisement />
                <Brands />
                <ProductContainer withFilter={false} />
            </main>
        </>
    )
}