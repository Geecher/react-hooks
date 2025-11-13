import TodoList from "../components/TodoList.jsx";

// Компонент UseFormStatus демонстрирует использование хука useFormStatus из библиотеки react-dom.
// Перейди в TodoList.jsx для подробного изучения.
function UseFormStatus() {
    return (
        <TodoList initialTodos={[{id: 1, title: "Привет"}]} />
    );
}

export default UseFormStatus;