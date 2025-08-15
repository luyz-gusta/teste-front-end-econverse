import styles from './style.module.scss';

export default function ProductContainer({ }) {
    return (
        <section className={styles.productContainer}>
            <div className={styles.title}>
                <span></span>
                <h2>Produtos relacionados</h2>
                <span></span>
            </div>
            <div className={styles.productSlide}>
            </div>
        </section>
    )
}

