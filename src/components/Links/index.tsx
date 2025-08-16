import type { Link } from '../../@types/types';
import styles from './style.module.scss';

export default function Links({ links }: { links: Link }) {
    return (
        <div className={styles.linksContainer}>
            <h4>{links.title}</h4>
            <ul className={styles.linksList}>
                {links.options.map((link, index) => (
                    <li key={index} className={styles.linkItem}>
                        {link}
                    </li>
                ))}
            </ul>
        </div>
    )
}