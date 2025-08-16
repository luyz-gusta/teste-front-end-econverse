import Container from '../Container';
import NavBar from './NavBar';
import NavMenu from './NavMenu';
import TextCarousel from './TextCarousel';
import TopBar from './TopBar';
import styles from './style.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>
            <Container direction='column'>
                <TopBar />
                <TextCarousel />
                <NavBar />
                <NavMenu />
            </Container>
        </header>
    )
}