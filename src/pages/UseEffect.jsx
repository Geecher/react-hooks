import {useState, useEffect} from "react";
import Content from "../components/Content.jsx";

// Эффекты (аналогично жизненному циклу классовых компонентов) - позволяет выполнять побочные эффекты в функциональных компонентах
// Например, получение данных, настройка подписок или ручное изменение DOM.
// useEffect принимает два аргумента: функцию эффекта и массив зависимостей.
// Функция эффекта выполняется после каждого рендера компонента, если изменились значения в массиве зависимостей.
// Если массив зависимостей пуст, эффект выполняется только один раз при монтировании компонента.
// Функция эффекта может возвращать функцию очистки, которая вызывается перед повторным выполнением эффекта или при размонтировании компонента.
function UseEffect() {
    const [resourseType, setResourseType] = useState('posts')
    const [items, setItems] = useState([])
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourseType}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [resourseType])

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])


    return (
        <>
            <div>Window width: {width}</div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <button onClick={() => setResourseType('posts')}>Posts</button>
                <button onClick={() => setResourseType('users')}>Users</button>
                <button onClick={() => setResourseType('comments')}>Comments</button>
            </div>
            <h1>{resourseType}</h1>
            <Content>
                {items.map(item => {
                    return <pre key={item.id}>{JSON.stringify(item)}</pre>
                })}
            </Content>
        </>
    )
}

export default UseEffect;