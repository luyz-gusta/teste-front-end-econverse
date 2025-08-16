import type { Product } from "../../@types/types";
import styles from './style.module.scss';

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className={styles.productCard}>
            <img src={product.photo} alt={product.productName} />
            <h2 className={styles.productName}>{product.productName}</h2>
            <section aria-label="Preço">
                <p className={styles.prices}>
                    <span>
                        R$ {Number(product.price).toFixed(2)}
                    </span>
                    <strong>R$ {(product.price * 1.20).toFixed(2)}</strong>
                </p>
                <p className={styles.installments}>ou 2x de R$ 49,95 sem juros</p>
                <span className={styles.freeShipping}>Frete grátis</span>
            </section>
            <button className={styles.buyButton}>Comprar</button>
        </div>
    )
}