import { useEffect } from 'react';
import { useContexts } from '../../hooks/useContexts';
import styles from './style.module.scss';


export default function Modal() {
    const { isModalOpen, setModalOpen } = useContexts()

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isModalOpen]);

    if (!isModalOpen) return null;

    const handleOverlayClick = () => setModalOpen(false)

    return (
        <div className={styles.overlay} onClick={handleOverlayClick}>
            <div className={styles.modal}>
                <button className={styles.closeBtn} onClick={() => setModalOpen(false)}>
                    &times;
                </button>
                <div className={styles.content}>
                    <h1>Teste</h1>

                </div>
            </div>
        </div>
    );
}
