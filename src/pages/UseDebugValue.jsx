import useLocalStorage from "../hooks/useLocalStorage.jsx";
import {useState} from "react";

// Пример использования useDebugValue в кастомном хуке useLocalStorage
// useDebugValue позволяет отображать значение в React DevTools для удобства отладки
function UseDebugValue() {
    const [firstName, setFirstName] = useLocalStorage('firstName', 'John');
    const [lastName, setLastName] = useState('Cook');

    return (
        <>
            First Name: <input value={firstName} onChange={e => setFirstName(e.target.value)}/><br/>
            Last Name: <input value={lastName} onChange={e => setLastName(e.target.value)}/><br/>
        </>
    );
}

export default UseDebugValue;