import { useReducer, useState } from "react";
import Todo from "../components/Todo.jsx";

// Пример использования useReducer для управления списком задач (todo list)
// Каждый todo имеет id, имя и статус выполнения (complete)
// Действия: добавить задачу, переключить статус задачи, удалить задачу

// Определяем типы действий
export const ACTIONS = {
    ADD_TODO: "add-todo",
    TOGGLE_TODO: "toggle-todo",
    DELETE_TODO: "delete-todo",
};

// Редуктор для управления состоянием списка задач
function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)];
        case ACTIONS.TOGGLE_TODO:
            return todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete };
                }
                return todo;
            });
        case ACTIONS.DELETE_TODO:
            return todos.filter((todo) => todo.id !== action.payload.id);
        default:
            return todos;
    }
}

// Функция для создания новой задачи
function newTodo(name) {
    return { id: Date.now(), name: name, complete: false };
}

// Компонент для демонстрации использования useReducer
function UseReducer() {
    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
        setName("");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onInput={(e) => setName(e.target.value)}
                />
            </form>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    marginTop: "2rem",
                }}
            >
                {todos.map((todo) => {
                    return (
                        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
                    );
                })}
            </div>
        </>
    );
}

export default UseReducer;
