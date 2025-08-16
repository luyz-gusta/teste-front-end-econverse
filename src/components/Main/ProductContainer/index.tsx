import { useEffect, useState } from 'react';
import { SUBCATEGORIES } from '../../../utils/constants';
import Carousel from '../Carousel';
import styles from './style.module.scss';
import type { Product } from '../../../@types/types';
import ProductCard from '../ProductCard';

export default function ProductContainer({ withFilter }: { withFilter: boolean }) {
    const [products, setProducts] = useState<Product[]>([])


    useEffect(() => {
        fetch("/products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data.products));
    }, [])

    return (
        <section className={styles.productContainer}>
            <div className={styles.title}>
                <hr />
                <h2>Produtos relacionados</h2>
                <hr />
            </div>
            {withFilter ? (
                <ul className={styles.subCategoryNav}>
                    {SUBCATEGORIES.map((subCategory, index) => (
                        <li key={subCategory} className={index == 0 ? styles.selected : styles.default}>{subCategory}</li>
                    ))}
                    <li className={styles.default}>Ver todos</li>
                </ul>
            ) : <a href="#" className={styles.viewAll}>Ver todos</a>}
            <Carousel products={products} />

            <div className={styles.products}>
                {products.map((product, index) => ( 
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </section>
    )
}