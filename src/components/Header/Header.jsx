import styles from "./Header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.img} src="logo.png" alt="Logo de la página" />
        </header>
    )
}

export default Header