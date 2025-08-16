import logo from '/logo.svg';
import styles from './style.module.scss';
import { Icons } from '../../../utils/icons';
import { IoMenuOutline } from 'react-icons/io5';

export default function NavBar() {
    return (
        <nav className={styles.navBar}>
            <img loading="lazy" className={styles.logo} src={logo} alt="Logo" />
            <div className={styles.searchContainer}>
                <input type="text" placeholder="O que você está buscando?" className={styles.searchBarInput} />
                <a href="#"><img loading="lazy" className={styles.searchIcon} alt='Icone de pesquisa' src={Icons.MagnifyingGlass} /></a>
            </div>
            <ul className={styles.iconList}>
                <li>
                    <img loading="lazy" src={Icons.Group} alt='Icone de grupo' />
                </li>
                <li>
                    <img loading="lazy" src={Icons.Heart} alt='Icone de coração' />
                </li>
                <li>
                    <img loading="lazy" src={Icons.UserCircle} alt='Icone de usuario' />
                </li>
                <li>
                    <img loading="lazy" src={Icons.ShoppingCart} alt='Icone de carrinho' />
                </li>
            </ul>

            <ul className={styles.iconListMobile}>
                <li>
                    <img loading="lazy" src={Icons.MagnifyingGlass} alt='Icone de busca' />
                </li>
                <li>
                    <IoMenuOutline size={40}/>
                </li>
            </ul>
        </nav>
    )
}