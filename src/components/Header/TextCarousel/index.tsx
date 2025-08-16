import { Icons } from '../../../utils/icons';
import styles from './style.module.scss';

export default function TextCarousel() {
    return (
        <section className={styles.carousel}>
            <aside className={styles.topBar}>
                <div className={styles.topBarItem}>
                    <p> <img loading="lazy" src={Icons.ShieldCheck} alt="Icone de escudo" /> Compra<span>100% segura</span></p>
                </div>
                <div className={styles.topBarItem}>
                    <p><img loading="lazy" src={Icons.Truck} alt="Icone de caminhão" />  <span>Frete grátis</span>acima de R$ 200</p>
                </div>
                <div className={styles.topBarItem}>
                    <p><img loading="lazy" src={Icons.CreditCard} alt="Icone de cartão de crédito" />  <span>Parcele</span>suas compras</p>
                </div>
            </aside>
        </section>
    )
}