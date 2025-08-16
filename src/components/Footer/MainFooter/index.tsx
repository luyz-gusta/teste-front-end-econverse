import styles from './style.module.scss';
import logo from '/logo.svg';
import instagram from '../../../assets/icons/instagram.svg';
import facebook from '../../../assets/icons/facebook.svg';
import linkedin from '../../../assets/icons/linkedin.svg';
import { LINKS } from '../../../utils/constants';
import Links from '../Links';
import Container from '../../Container';

export default function MainFooter() {
    return (
        <footer className={styles.footer}>
            <Container className={styles.container}>
                <section className={styles.section}>
                    <img loading="lazy" src={logo} alt="Logo" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <ul className={styles.socialMedia}>
                        <li>
                            <img loading="lazy" src={instagram} alt="Instagram" />
                        </li>
                        <li>
                            <img loading="lazy" src={facebook} alt="Facebook" />
                        </li>
                        <li>
                            <img loading="lazy" src={linkedin} alt="LinkedIn" />
                        </li>
                    </ul>
                </section>
                <hr className={styles.separator} />
                <section className={styles.navLinks}>
                    {LINKS.map((link, index) => (
                        <Links key={index} links={link} />
                    ))}
                </section>
            </Container>
        </footer>
    )
}