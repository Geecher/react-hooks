import {useState} from "react";

// Изменение состояния - позволяет React отслеживать изменения и повторно рендерить компонент при необходимости.
// useState возвращает массив из двух элементов: текущее значение состояния и функцию для его обновления.
// При вызове функции обновления состояния React планирует повторный рендер компонента с новым значением состояния.
// Важно отметить, что обновление состояния асинхронно, и несколько вызовов функции обновления состояния могут быть объединены в один рендер.
function UseState() {
    const [count, setCount] = useState(0)

    return (
        <div className="card">
            <button onClick={() => setCount((prev) => --prev)}>
                -
            </button>
            <span>
                count is {count}
            </span>
            <button onClick={() => setCount((prev) => ++prev)}>
                +
            </button>
            <p>
                Edit <code>src/App.jsx</code> and save to test HMR
            </p>
        </div>
    )
}

export default UseState;