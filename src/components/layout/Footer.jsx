import styles from '../../assets/css/layout/Footer.module.css';
const link = 'https://github.com/Jackelino/app-users';
export function Footer() {
    return (
        <footer className={styles.footer}>
            <small className="text-gray-500 dark:text-gray-400">
                ©{new Date().getFullYear()} create by <b className="text-gray-950 dark:text-white">Jack </b>❤️ - All Rights Reserved.
                <a href={link} target="_bank" className={styles.source}>Source 💻</a>
            </small>
        </footer>
    )
}