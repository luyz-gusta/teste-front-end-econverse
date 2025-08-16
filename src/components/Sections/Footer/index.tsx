import { LINKS } from '../../../utils/constants';
import Links from '../../Links';
import styles from './style.module.scss';
import logo from '/logo.svg';
import instagram from '../../../assets/icons/instagram.svg';
import facebook from '../../../assets/icons/facebook.svg';
import linkedin from '../../../assets/icons/linkedin.svg';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <section className={styles.container}>
                <img src={logo} alt="Logo" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <ul className={styles.socialMedia}>
                    <li>
                        <img src={instagram} alt="Instagram" />
                    </li>
                    <li>
                        <img src={facebook} alt="Facebook" />
                    </li>
                    <li>
                        <img src={linkedin} alt="LinkedIn" />
                    </li>
                </ul>
            </section>
            <hr className={styles.separator} />
            <section className={styles.navLinks}>
                {LINKS.map((link, index) => (
                    <Links key={index} links={link} />
                ))}
            </section>
        </footer>
    )
}