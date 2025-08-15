import type { Product } from "../../@types/types";
import styles from './style.module.scss';

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className={styles.productCard}>
            <img src={product.photo} alt={product.productName} />
            <h2>{product.productName}</h2>
            <p>{product.descriptionShort}</p>
            <section aria-label="Preço">
                <p>
                    <strong>R$ {(product.price * 1.20).toFixed(2)}</strong>
                    <span style={{ textDecoration: 'line-through', marginLeft: 8 }}>
                        R$ {Number(product.price).toFixed(2)}
                    </span>
                </p>
                <p>ou 2x de R$ 49,95 sem juros</p>
                <span>Frete grátis</span>
            </section>
        </div>
    )
}