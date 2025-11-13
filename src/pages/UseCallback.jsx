import {useCallback, useState} from "react";
import List from "../components/List.jsx";

// Оптимизация функций с помощью useCallback
// useCallback возвращает мемоизированную версию функции, которая изменяется только тогда, когда изменяются одна из зависимостей.
// Это полезно при передаче колбэков в оптимизированные дочерние компоненты, которые зависят от равенства ссылок для предотвращения ненужных рендеров.
// В примере ниже, если не использовать useCallback, то при каждом изменении темы (dark) будет создаваться новая функция getItems,
// что приведет к повторному рендеру компонента List, даже если number не изменился.
// С useCallback, getItems будет пересоздаваться только тогда, когда изменится number.
function UseCallback() {
    const [number, setNumber] = useState(1)
    const [dark, setDark] = useState(false)

    const getItems = useCallback((incrementor) => {
        return [number + incrementor, number + 1 + incrementor, number + 2 + incrementor]
    }, [number])

    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333'
    }

    return (
        <div style={theme}>
            <input type="number" value={number} onInput={e => setNumber(parseInt(e.target.value))}/>
            <button onClick={() => setDark(prev => !prev)}>Change Theme</button>
            <List getItems={getItems}/>
        </div>
    )
}

export default UseCallback