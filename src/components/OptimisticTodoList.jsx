import {useOptimistic, useState} from "react";
import {useFormStatus} from "react-dom";
import Content from "./Content.jsx";

function reducer(state, action) {
    switch (action.type) {
        case "ADD":
            return [...state, {id: crypto.randomUUID(), title: action.payload, pending: true}];
        default:
            throw new Error(`Not valid`);
    }
}

// Пример использования useOptimistic для оптимистичного обновления UI при создании нового элемента списка задач.
// При отправке формы новый элемент сразу добавляется в UI с пометкой "pending",
// а затем обновляется после завершения асинхронной операции создания задачи.
// Это улучшает пользовательский опыт, делая интерфейс более отзывчивым.
// Можно использовать как с reducer, так и с функцией обновления состояния.
function OptimisticTodoList({initialTodos}) {
    const [todos, setTodos] = useState(initialTodos);
    const [optimisticTodos, dispatch] = useOptimistic(todos, reducer)

    async function onSubmit(data) {
        const title = data.get("title")

        if (typeof title !== 'string' || title.trim() === '') {
            return;
        }

        dispatch({type: 'ADD', payload: title});
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
                {optimisticTodos.map(todo => (
                    <li key={todo.id} style={{opacity: todo.pending ? .5 : undefined}}>{todo.title}</li>
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

export default OptimisticTodoList;