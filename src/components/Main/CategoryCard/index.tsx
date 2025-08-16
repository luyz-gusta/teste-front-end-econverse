import type { Category } from "../../../@types/types";
import styles from './style.module.scss';
import { Icons } from '../../../utils/icons';

export default function CategoryCard({ category }: { category: Category }) {
    return (
        <div className={`${styles.categoryCard} ${category.name.toLowerCase() == 'tecnologia' ? styles.selected : styles.default}`}>
            <div className={styles.imageContainer}>
                <img src={Icons[category.icon]} alt={category.name} />
            </div>
            <h3>{category.name}</h3>
        </div>
    )
}