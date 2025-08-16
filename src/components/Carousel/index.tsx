import { useEffect, useState } from "react";
import styles from './style.module.scss';
import type { Product } from "../../@types/types";
import ProductCard from "../ProductCard";
import arrowLeft from '../../assets/icons/ArrowLeft.svg';
import arrowRight from '../../assets/icons/ArrowRight.svg';

export default function Carousel() {
    const [index, setIndex] = useState(0);
    const [products, setProducts] = useState<Product[]>([])
    const [visibleCards, setVisibleCards] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth - 180 >= 1460) setVisibleCards(4);
            else setVisibleCards(Math.floor((window.innerWidth - 180) / 304));
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    const next = () => {
        setIndex((prev) => Math.min(prev + visibleCards, products.length - visibleCards));
    };

    const prev = () => {
        setIndex((prev) => Math.max(prev - visibleCards, 0));
    };

    useEffect(() => {
        fetch("/products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data.products));
    }, [])

    return (
        <section className={styles.carousel}>
            <button className={styles.btn} onClick={prev} disabled={index === 0}>
                <img src={arrowLeft} alt="Previous" />
            </button>

            <div className={styles.trackContainer}>
                <div
                    className={styles.track}
                    style={{ transform: `translateX(-${(index / visibleCards) * 100}%)` }}
                >
                    {products.map((product, i) => (
                        <span key={i} className={styles.card}>
                            <ProductCard key={i} product={product} />
                        </span>
                    ))}
                </div>
            </div>

            <button
                className={styles.btn}
                onClick={next}
                disabled={index + visibleCards >= products.length}
            >
                <img src={arrowRight} alt="Next" />
            </button>
        </section>
    );
}
