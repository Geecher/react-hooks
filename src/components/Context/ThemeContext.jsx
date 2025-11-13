import React, {useContext, useState} from "react";


// Создаем два контекста: один для значения темы (ThemeContext), другой для функции обновления темы (ThemeUpdateContext)
// ThemeContext будет хранить текущее значение темы (темная или светлая)
// ThemeUpdateContext будет хранить функцию для переключения темы
// Это позволяет компонентам, которые потребляют контекст, получать только то, что им нужно
// и избегать ненужных перерендеров, когда обновляется только часть контекста
const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
    return useContext(ThemeContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export function useThemeUpdate() {
    return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(true);

    function toggleTheme() {
        setDarkTheme(prevTheme => !prevTheme);
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext value={toggleTheme}>
                {children}
            </ThemeUpdateContext>
        </ThemeContext.Provider>
    )
}

