import styles from '../../assets/css/layout/Main.module.css';
export function Main({children}) {
    return (
        <main className={styles.main}>
            {children}
        </main>
    )
}