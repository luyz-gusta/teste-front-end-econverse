import NavBar from './NavBar';
import NavMenu from './NavMenu';
import TopBar from './TopBar';
import styles from './style.module.scss';

export default function Header(){
    return(
        <header className={styles.header}>
            <TopBar />
            <NavBar />
            <NavMenu />
        </header>
    )
}