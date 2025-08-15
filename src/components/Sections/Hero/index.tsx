import styles from './style.module.scss';
import banner from '../../../assets/banner.svg';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <img src={banner} alt="Promoções" />
            <div className={styles.content}>
                <h2>Venha conhecer nossas promoções</h2>
                <h3><span>50% Off</span> nos produtos </h3>
                <button className={styles.button}>Ver produto</button>
            </div>
        </section>
    )
}