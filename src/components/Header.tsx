import styles from "./Header.module.css"
import logoignite from "../assets/logoignite.svg"
export function Header() {
    return(
        <div className={styles.header}>
            <img src={logoignite} alt="Logo Ignite" />
        </div>
    );  
}