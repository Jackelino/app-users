import {Link} from 'react-router-dom';
import styles from '../../assets/css/layout/Header.module.css'
import {useState} from "react";


export function Header() {
    const [routes, setRoutes] = useState([
        {
            name: 'home',
            route: '/'
        },
        {
            name: 'register',
            route: 'register'
        }
    ])
    return (
        <header className={styles.header}>
            <ul className={styles.ul}>
                {
                    routes.map((route) => (
                        <li key={route.name} className={styles.li}>
                            <Link to={route.route}>{route.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </header>
    )
}