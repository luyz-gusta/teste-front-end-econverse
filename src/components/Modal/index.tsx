import { useEffect, useState, type MouseEvent } from 'react';
import { FiMinus } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { LuPlus } from 'react-icons/lu';
import { useContexts } from '../../hooks/useContexts';
import { formatPrice } from '../../utils/formatPrice';
import styles from './style.module.scss';

export default function Modal() {
    const { isModalOpen, setModalOpen, product } = useContexts()
    const [count, setCount] = useState(1)

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

    if (!isModalOpen || !product) return null;

    const handleOverlayClick = (e: MouseEvent) => {
        if (e.target === e.currentTarget) {
            setModalOpen(false);
        }
    }

    const plusCount = () => setCount(prev => prev + 1);
    const minusCount = () => {
        if (count == 1) {
            return
        }

        setCount(count - 1)
    }

    return (
        <div className={styles.overlay} onClick={handleOverlayClick}>
            <div className={styles.modal}>
                <button className={styles.closeBtn} onClick={() => setModalOpen(false)}>
                    <IoClose />
                </button>
                <section className={styles.content}>
                    <div className={styles.image}>
                        <img src={product.photo} alt={product.productName} />
                    </div>

                    <div className={styles.details}>
                        <h3>{product.productName}</h3>
                        <strong>{formatPrice(product.price)},00</strong>
                        <p>{product.descriptionShort}</p>
                        <span className={styles.moreDetails}>Veja mais detalhes do produto &gt; </span>
                        <div className={styles.actions}>
                            <div className={styles.quantity}>
                                <FiMinus size={20} onClick={minusCount} className={`${count == 1 && styles.disabled}`} />
                                <span>{count}</span>
                                <LuPlus size={20} onClick={plusCount} />
                            </div>
                            <button>Comprar</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
