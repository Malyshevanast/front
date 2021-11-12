import styles from "../style/Main.module.css"
const Main = () => {
    return <>
        <div className={`${styles.osnova}`}>
            <h2>Человек и его питомец: от сердца к сердцу!</h2>
        </div>

        <div className={`${styles.blog1}`}>
            <p className={`${styles.ser}`}>Специализации:</p>
            <div className={`${styles.textcols}`}>
                <div className={`${styles.textcols_item}`}>
                    - Терапия - <br />
                    - Дерматология -<br />
                    - Кардиология -<br />
                    - Инструментальная диагностика -<br />
                </div>
                <div className={`${styles.textcols_item}`}>
                    - Неврология -<br />
                    - Лабораторная диагностика -<br />
                    - Хирургия -<br />
                    - Стоматология -<br />
                </div>
            </div>
        </div>
    </>
}
export default Main