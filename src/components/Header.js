import styles from "../style/Header.module.css"
const Header = () => {
    return <>
        <div className={`${styles.header}`}>
                <button id="button">
                    Записаться на прием
                </button>
            </div>
            <p> Часы работы: с 9:00-21:00 &nbsp;&nbsp;&nbsp;Адрес: Москва, проезд Ломоносова, 13&nbsp;&nbsp;&nbsp;+7 (904)-985-12-37</p>
    </>
}
export default Header