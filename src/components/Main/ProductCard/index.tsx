import type { Product } from "../../../@types/types";
import { useContexts } from "../../../hooks/useContexts";
import { formatPrice } from "../../../utils/formatPrice";
import styles from './style.module.scss';

export default function ProductCard({ product }: { product: Product }) {
    const { setModalOpen, setProduct } = useContexts()

    const handleProduct = () => {
        setProduct(product)
        setModalOpen(true);
    }


    return (
        <div className={styles.productCard} >
            <img loading="lazy" src={product.photo} alt={product.productName} />
            <h2 className={styles.productName}>{product.productName}</h2>
            <section aria-label="Preço">
                <p className={styles.prices}>
                    <span>
                       {formatPrice(Number(product.price * 1.20))}
                    </span>
                    <strong>{formatPrice(product.price)},00</strong>
                </p>
                <p className={styles.installments}>ou 2x de {formatPrice(Number(product.price / 2))} sem juros</p>
                <span className={styles.freeShipping}>Frete grátis</span>
            </section>
            <button className={styles.buyButton} onClick={handleProduct}>Comprar</button>
        </div>
    )
}