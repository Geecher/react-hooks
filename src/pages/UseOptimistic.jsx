import OptimisticTodoList from "../components/OptimisticTodoList.jsx";

// Пример использования useOptimistic для оптимистичного обновления UI при создании нового элемента списка задач.
// Для демонстрации используется компонент OptimisticTodoList с одним начальным элементом.
function UseOptimistic() {
    return (
        <OptimisticTodoList initialTodos={[{id: 1, title: "Todo"}]}/>
    );
}

export default UseOptimistic;