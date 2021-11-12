import styles from "../style/Main.module.css"
const Main = () => {
    return <>
        <div id="osnova">
            <h2>Человек и его питомец: от сердца к сердцу!</h2>
        </div>

        <div className="blog1">
            <p className="ser">Специализации:</p>
            <div className="textcols">
                <div className="textcols-item">
                    - Терапия - <br />
                    - Дерматология -<br />
                    - Кардиология -<br />
                    - Инструментальная диагностика -<br />
                </div>
                <div className="textcols-item">
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