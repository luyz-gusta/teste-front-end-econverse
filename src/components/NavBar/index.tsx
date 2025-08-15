import logo from '/logo.svg';
import styles from './style.module.scss';
import { Icons } from '../../utils/icons';

export default function NavBar() {
    return (
        <nav className={styles.navBar}>
            <img className={styles.logo} src={logo} alt="Logo" />
            <div className={styles.searchContainer}>
                <input type="text" placeholder="O que você está buscando?" className={styles.searchBarInput} />
                <a href="#"><img className={styles.searchIcon} alt='Icone de pesquisa' src={Icons.MagnifyingGlass} /></a>
            </div>
            <ul className={styles.iconList}>
                <li>
                    <img src={Icons.Group} alt='Icone de grupo' />
                </li>
                <li>
                    <img src={Icons.Heart} alt='Icone de coração' />
                </li>
                <li>
                    <img src={Icons.UserCircle} alt='Icone de usuario' />
                </li>
                <li>
                    <img src={Icons.ShoppingCart} alt='Icone de carrinho' />
                </li>
            </ul>
        </nav>
    )
}