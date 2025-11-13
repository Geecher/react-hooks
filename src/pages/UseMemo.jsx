import {useEffect, useMemo, useState} from "react";
import Content from "../components/Content.jsx";

// Кэширование вычислений (оптимизация производительности)
// useMemo принимает два аргумента: функцию, которая возвращает значение для кэширования, и массив зависимостей.
// Функция будет вызвана только тогда, когда одна из зависимостей изменится.
// Если зависимости не изменились, useMemo вернет ранее кэшированное значение, избегая повторных вычислений.
function UseMemo() {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    const finalNumber = useMemo(() => {
        return slowFunction(number)
    }, [number])
    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        }
    }, [dark]);
    useEffect(() => {
        console.log('Theme changed')
    }, [themeStyles]);

    return (
        <Content>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}/>
            <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
            <div style={themeStyles}>{finalNumber}</div>
        </Content>
    )
}

function slowFunction(num) {
    console.log('Calling slow function')
    for (let i = 0; i <= 1000000000; i++) {
        num += 1
    }
    return num
}

export default UseMemo;