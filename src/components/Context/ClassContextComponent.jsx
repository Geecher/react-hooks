import {Component} from "react";
import {ThemeContext} from "../../pages/UseContext.jsx";

// Пример использования Context в классовом компоненте
// В классовом компоненте контекст потребляется с помощью ThemeContext.Consumer
// и функции render props, которая принимает значение контекста (darkTheme) и возвращает JSX
// Также можно использовать статическое свойство contextType для доступа к контексту через this.context
export default class ClassContextComponent extends Component {
    themeStyles(dark) {
        return {
            backgroundColor: dark ? '#333' : '#CCC',
            color: dark ? '#CCC' : '#333',
            padding: '2rem',
            margin: '2rem'
        }
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {darkTheme => (
                    <div style={this.themeStyles(darkTheme)}>
                        Class Theme
                    </div>
                )}
            </ThemeContext.Consumer>
        )
    }
}