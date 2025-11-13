import {useState, useTransition} from "react";

// useTransition позволяет пометить обновление состояния как не срочное.
// Это позволяет избежать блокировки интерфейса при выполнении длительных операций рендеринга.
// useTransition возвращает массив из двух значений: булево значение isPending, указывающее,
// выполняется ли переход, и функцию startTransition, которая используется для обертывания
// обновлений состояния, которые должны быть помечены как не срочные.
// Когда состояние обновляется внутри startTransition, React знает, что эти обновления не являются
// срочными и может приоритизировать более важные обновления, такие как обработка ввода пользователя.
// Это помогает поддерживать отзывчивость интерфейса даже при выполнении тяжелых операций рендеринга.
function UseTransition() {
    const [isPending, startTransition] = useTransition()
    const [input, setInput] = useState("")
    const [list, setList] = useState([])

    const LIST_SIZE = 20000;

    function handleChange(event) {
        setInput(event.target.value)
        startTransition(() => {
            const l = [];
            for (let i = 0; i < LIST_SIZE; i++) {
                l.push(event.target.value)
            }
            setList(l)
        })
    }

    return (
        <>
            <input value={input} onChange={handleChange}/>
            {isPending ? "Loading..." : list.map((item, index) => {
                return <div key={index}>{item}</div>
            })}
        </>
    );
}

export default UseTransition;