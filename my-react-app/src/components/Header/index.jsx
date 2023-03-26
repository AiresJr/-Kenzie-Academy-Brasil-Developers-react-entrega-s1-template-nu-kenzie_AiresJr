import LogoKenzie from "../../assets/nukenzie.png"
import styles from "./style.module.css"


export const Header = () => {
    return (
        <header className={styles.header}>
        <img src={LogoKenzie} alt="logo" />
      </header>
    )
}