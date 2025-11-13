import {useId} from "react";

// Пример использования useId для генерации уникальных идентификаторов в React-компоненте.
// В этом примере мы создаем компонент EmailForm, который содержит поле ввода для электронной почты.
// Мы используем useId для генерации уникального идентификатора, который связывается с элементом label и input.
// Это обеспечивает правильную ассоциацию между меткой и полем ввода, что улучшает доступность формы.
function EmailForm() {
    const id = useId();

    return (
        <>
            <label htmlFor={id}>Email</label>
            <input type="email" id={id} placeholder="Enter your email" />
        </>
    );
}

export default EmailForm;