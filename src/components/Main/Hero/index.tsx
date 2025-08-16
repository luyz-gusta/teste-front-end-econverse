import styles from './style.module.scss';
import banner from '../../../assets/banner.svg';
import Container from '../../Container';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <img loading="lazy" src={banner} alt="Promoções" />
            <div className={styles.content}>
                <Container className={styles.container} direction='column'>
                    <h2>Venha conhecer nossas promoções</h2>
                    <h3><span>50% Off</span> nos produtos </h3>
                    <button className={styles.button}>Ver produto</button>
                </Container>
            </div>
        </section>
    )
}