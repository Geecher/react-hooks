import {useTheme, useThemeUpdate} from "./ThemeContext.jsx";

// Пример использования Context в функциональном компоненте
// В функциональном компоненте контекст потребляется с помощью хуков useContext
// которые обернуты в кастомные хуки useTheme и useThemeUpdate
// useTheme возвращает значение контекста (darkTheme)
// useThemeUpdate возвращает функцию для обновления значения контекста (toggleTheme)
function FunctionContextComponent() {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()

    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }

    return (
        <>
            <button onClick={toggleTheme}>Toggle theme</button>
            <div style={themeStyles}>
                Function Theme
            </div>
        </>
    )
}

export default FunctionContextComponent