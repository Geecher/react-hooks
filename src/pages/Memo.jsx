import {memo, useCallback, useMemo, useState} from "react";

const delayedDouble = (number) => {
    for (let i = number; i < 999999999; i++);
    return number*2;
}

// Пример реализации мемоизации с помощью memo, useMemo и useCallback
// memo - мемеоизирует компонент, необходимо использовать только в случае, если необходимо избежать лишних ререндеров с одинаковыми пропсами
// useMemo - мемоизирует значение, если значение считается долго и зависит от пропсов/стейта
// useCallback - мемоизирует функцию, если функция передаётся в пропсы или зависимость useEffect/useMemo
// Например в примере ниже, если не использовать memo, то при каждом изменении первого и второго хука будет рендериться компонент Title
// с useCallback и useMemo, Title будет рендериться только тогда, когда изменятся первый или второй хук
function Memo() {
    const [count, setCount] = useState(0)
    const [firstHook, setFirstHook] = useState('useCallback')
    const [secondHook, setSecondHook] = useState('useMemo')
    const [dark, setDark] = useState(false)

    const theme = {
        backgroundColor: dark ? '#0e0e0f' : '#fff',
        color: dark ? '#fff' : '#282c34',
    }

    const setDarkTheme = () => {
        setDark(theme => !theme)
    }

    const increment = () => {
        setCount(count => count + 1)
    }

    const resetCount = useCallback(() => {
        setCount(0)
    }, [])

    const hooks = useMemo(() => {
        return {firstHook, secondHook}
    }, [firstHook, secondHook])

    const doubleCount = useMemo(() => {
        return delayedDouble(count)
    }, [count])

    return (
        <div style={theme}>
            <Title hooks={hooks} resetCount={resetCount} />
            <CountInfo count={doubleCount} />
            <input type="text" name={'firstHook'} value={firstHook} onInput={e => setFirstHook(e.target.value)}/>
            <input type="text" name={'secondHook'} value={secondHook} onInput={e => setSecondHook(e.target.value)}/>
            <button onClick={increment}>+1</button>
            <button onClick={setDarkTheme}>Theme</button>
        </div>
    );
}

const Title = memo(({hooks, resetCount}) => {
    console.log('Title rendered')
    const {firstHook, secondHook} = hooks;
    return (
        <>
            <h2>React.memo vs {firstHook} vs {secondHook}</h2>
            <button onClick={resetCount}>Reset</button>
        </>
    )
})

const CountInfo = ({count}) => {
    return <p>Count value: {count}</p>
}

export default Memo;