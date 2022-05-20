import { Link } from "react-router-dom"
import styles from "../style/NavBar.module.css"
import logo from '../img/loga.png'
const NavBar = () => {
    const token = localStorage.getItem("token")
    return <>
        <div className={`${styles.poloska}`}>
            <img src={logo} alt={"logo"} />
            <div className={`${styles.KotoPec}`}>
                <p>КотоПес</p>
            </div>
            <div className={`${styles.nav}`}>
                <ul>
                    {
                        !token ? (
                            <>
                                <Link to='/Login'>Войти</Link>
                                <Link to='/Signup'>Авторизация</Link>
                            </>
                        ) : (
                            <Link to='/Profile'>Профиль</Link>
                        )
                    }
                    <Link to='/Contacts'>Контакты</Link>
                    <Link to='/Services'>Услуги</Link>
                    <Link to='/About'>О нас</Link>
                    <Link to='/'>Главная</Link>
                </ul>
            </div>
        </div>
    </>
}

export default NavBar