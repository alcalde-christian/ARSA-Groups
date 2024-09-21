import styles from "./Footer.module.css"

const Footer = () => {
    return(
        <>
            <p className={styles.disclaimer}>
                Esta aplicación no está afiliada, patrocinada ni aprobada por Aerolíneas Argentinas S.A. El uso del logo es únicamente con fines de identificación interna y no implica relación oficial con la empresa. Cualquier opinión o información presentada aquí es de responsabilidad exclusiva de los autores de la aplicación.
            </p>
            <p className={styles.copyright}>
                Groupify by Plants - Copyright 2024
            </p>
        </>
    )
}

export default Footer