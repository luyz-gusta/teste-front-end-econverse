import styles from './style.module.scss';
import logo from '/logo.svg';

export default function Brands() {
    return (
        <section className={styles.brands}>
            <h2>Navegue por marcas</h2>
            <ul className={styles.brandList}>
                <li className={styles.brandItem}>
                    <div>
                        <img loading="lazy" src={logo} alt="Imagem meramente ilustrativa de uma marca" />
                    </div>
                </li>
                <li className={styles.brandItem}>
                    <div>
                        <img loading="lazy" src={logo} alt="Imagem meramente ilustrativa de uma marca" />
                    </div>
                </li>
                <li className={styles.brandItem}>
                    <div>
                        <img loading="lazy" src={logo} alt="Imagem meramente ilustrativa de uma marca" />
                    </div>
                </li>
                <li className={styles.brandItem}>
                    <div>
                        <img loading="lazy" src={logo} alt="Imagem meramente ilustrativa de uma marca" />
                    </div>
                </li>
                <li className={styles.brandItem}>
                    <div>
                        <img loading="lazy" src={logo} alt="Imagem meramente ilustrativa de uma marca" />
                    </div>
                </li>
                
            </ul>
        </section>
    )
}