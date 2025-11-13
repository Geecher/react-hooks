import {useState} from "react";
import DeferredList from "../components/DeferredList.jsx";
// Пример использования useDeferredValue для оптимизации рендеринга большого списка при вводе текста
// useDeferredValue позволяет отложить обновление значения до тех пор, пока не освободится основной поток
// Это полезно для улучшения производительности при работе с большими объемами данных
// В данном примере мы создаем текстовое поле для ввода и отображаем большой список, который обновляется с задержкой
// Таким образом, пользовательский интерфейс остается отзывчивым, даже при вводе текста
function UseDeferredValue() {
    const [input, setInput] = useState('')

    function handleInputChange(evt) {
        setInput(evt.target.value)
    }

    return (
        <>
            <input type="text" value={input} onChange={handleInputChange}/>
            <DeferredList input={input}/>
        </>
    );
}

export default UseDeferredValue;