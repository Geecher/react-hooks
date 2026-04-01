import {useState} from "react";

// Изменение состояния - позволяет React отслеживать изменения и повторно рендерить компонент при необходимости.
// useState возвращает массив из двух элементов: текущее значение состояния и функцию для его обновления.
// При вызове функции обновления состояния React планирует повторный рендер компонента с новым значением состояния.
// Важно отметить, что обновление состояния асинхронно, и несколько вызовов функции обновления состояния могут быть объединены в один рендер.
const objects = [
    {id: 1, title: "First Item"},
    {id: 2, title: "Second Item"},
    {id: 3, title: "Third Item"},
];

const neededId = 2;

function UseState() {
    const [count, setCount] = useState(0);
    const [title, setTitle] = useState(() => {
        objects.find((value, index, obj) => {
            return value.id === neededId
        })?.title;
    });

    return (
        <div className="card">
            <button onClick={() => setCount((prev) => --prev)}>-</button>
            <span>count is {count}</span>
            <button onClick={() => setCount((prev) => ++prev)}>+</button>
        </div>
    )
}

export default UseState;