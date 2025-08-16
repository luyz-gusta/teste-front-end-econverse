import styles from './style.module.scss';
import advertisementBanner from '/src/assets/advertisementBanner.svg';

export default function AdvertisementCard() {
    return (
        <div className={styles.advertisementCard}>
            <img loading="lazy" src={advertisementBanner} alt="Advertisement Banner" />
            <div className={styles.content}>
                <h3>Parceiros</h3>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <button>Confira</button>
            </div>
        </div>
    )
}
