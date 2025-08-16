import { SUBCATEGORIES } from '../../../utils/constants';
import Carousel from '../../Carousel';
import styles from './style.module.scss';

export default function ProductContainer({ withFilter }: { withFilter: boolean }) {
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
            <Carousel />
        </section>
    )
}