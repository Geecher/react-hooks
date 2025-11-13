import Content from "../components/Content.jsx";
import {useEffect, useRef, useState} from "react";

// Сохранение мутабельного значения, которое не вызывает повторный рендер при изменении
// useRef возвращает изменяемый объект с единственным свойством .current, которое инициализируется переданным аргументом (initialValue).
// Возвращаемый объект будет сохраняться в течение всего времени жизни компонента.
// Основное применение useRef - доступ к DOM-элементам.
// Однако он также полезен для сохранения любого мутируемого значения, подобного экземплярам класса.
// В отличие от состояния, изменение свойства .current не вызывает повторный рендер компонента.
function UseRef() {
    const [name, setName] = useState("");
    const prevName = useRef("");

    const renderCount = useRef(0);
    renderCount.current++;
    console.log(renderCount.current);

    useEffect(() => {
        prevName.current = name;
    }, [name])

    return (
        <Content>
            <input value={name} onInput={e => setName(e.currentTarget.value)}/>
            <p>My name is: "{name}" and it used to be "{prevName.current}"</p>
        </Content>
    )
}

export default UseRef;