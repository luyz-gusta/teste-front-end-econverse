import { CATEGORIES } from '../../../utils/constants';
import CategoryCard from '../CategoryCard';
import styles from './style.module.scss';

export default function Categories(){
    return(
        <section className={styles.categories}>
            {CATEGORIES.map((category, index) => (
                <CategoryCard key={index} category={category} />
            ))}
        </section>
    )
}
       