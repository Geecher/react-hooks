import FunctionContextComponent from "../components/Context/FunctionContextComponent.jsx";
import {ThemeProvider} from "../components/Context/ThemeContext.jsx";

// Компонент UseContext демонстрирует использование Context API в React
// Он оборачивает FunctionContextComponent в ThemeProvider, который предоставляет контекст темы
// FunctionContextComponent потребляет контекст и позволяет переключать тему между темной и светлой
function UseContext() {
    return (
        <ThemeProvider>
            <FunctionContextComponent/>
        </ThemeProvider>
    )
}

export default UseContext;