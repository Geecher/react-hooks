import {useState} from "react";
import {useFormStatus} from "react-dom";
import Content from "./Content.jsx";

// useFormStatus - это хук, предоставляемый React для управления состоянием формы, особенно в контексте асинхронных операций.
// Он позволяет отслеживать состояние отправки формы, например, когда форма находится в процессе отправки (pending).
// Это полезно для улучшения пользовательского опыта, так как можно отображать индикаторы загрузки или отключать элементы формы,
// пока данные отправляются на сервер.
// В данном примере мы создаем простой список задач (todo list), где можно добавлять новые задачи через форму.
// При отправке формы вызывается асинхронная функция onSubmit, которая имитирует создание новой задачи с задержкой.
// Во время выполнения этой функции кнопка отправки формы отключается и отображает текст "Creating...",
// что указывает пользователю на то, что операция в процессе выполнения.
// После завершения операции новая задача добавляется в список и отображается на странице.
function TodoList({initialTodos}) {
    const [todos, setTodos] = useState(initialTodos);

    async function onSubmit(data) {
        const title = data.get("title")

        if (typeof title !== 'string' || title.trim() === '') {
            return;
        }

        const newTodo = await createTodo(title);
        setTodos(prev => [...prev, newTodo]);
    }

    return (
        <Content style={{textAlign: 'start'}}>
            <form action={onSubmit}>
                <label>Title</label>
                <br/>
                <input type="text" name={'title'}/>
                <br/>
                <SubmitButton/>
            </form>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </Content>
    );
}

function SubmitButton() {
    const {pending} = useFormStatus();

    return (
        <button disabled={pending}>
            {pending ? 'Creating...' : 'Create'}
        </button>
    );
}

function createTodo(title) {
    return wait({id: crypto.randomUUID(), title}, 1000)
}

function wait(value, duration) {
    return new Promise(resolve => {
        setTimeout(() => resolve(value), duration)
    })
}

export default TodoList;