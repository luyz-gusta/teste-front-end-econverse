import AdvertisementCard from '../../AdvertisementCard';
import styles from './style.module.scss';

export default function Advertisement(){
    return(
        <section className={styles.advertisement}>
            <AdvertisementCard />
            <AdvertisementCard />
        </section>
    )
}
