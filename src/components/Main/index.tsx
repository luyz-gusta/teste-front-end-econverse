import Container from "../Container";
import Advertisement from "./Advertisement";
import Brands from "./Brands";
import Categories from "./Categories";
import Hero from "./Hero";
import ProductContainer from "./ProductContainer";
import styles from './style.module.scss';

export default function Main() {
    return (
        <>
            <Hero />
            <main>
                <Container className={styles.container} direction="column">
                    <Categories />
                    <ProductContainer withFilter={true} />
                    <Advertisement />
                    <ProductContainer withFilter={false} />
                    <Advertisement />
                    <Brands />
                    <ProductContainer withFilter={false} />
                </Container>
            </main>
        </>
    )
}