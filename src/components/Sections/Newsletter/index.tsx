import styles from './style.module.scss';

export default function Newsletter() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h3>Inscreva-se na nossa newsletter</h3>
                <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
            </div>
            <form className={styles.form}>
                <div className={styles.inputs}>
                    <input type="text" placeholder="Digite seu nome" />
                    <input type="email" placeholder="Digite seu email" />
                    <button type="submit">Inscrever</button>
                </div>
                <div className={styles.checkbox}>
                    <input type="checkbox" name="termos" id="termos" />
                    <label htmlFor="termos">Aceito os termos e condições</label>
                </div>
            </form>
        </section>
    )
}