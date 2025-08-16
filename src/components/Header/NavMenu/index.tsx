import { Icons } from '../../../utils/icons';
import styles from './style.module.scss';

export default function NavMenu() {
    return (
        <nav className={styles.navMenu}>
            <a href="#">Todas as categorias</a>
            <a href="#">Supermercado</a>
            <a href="#">Livros</a>
            <a href="#">Moda</a>
            <a href="#">Lançamentos</a>
            <a href="#" className={styles.selected}>Ofertas do dia</a>
            <a href="#" className={styles.subscription}>
                <img src={Icons.CrownSimple} alt="Icone de coroa" />
                Assinatura
            </a>
        </nav>
    )
}