import {useDebugValue, useEffect, useState} from 'react';

function getSavedValue(key, initialValue) {
    const savedValue = localStorage.getItem(key);
    if (savedValue) {
        return JSON.parse(savedValue);
    }
    if (initialValue instanceof Function) {
        return initialValue();
    } else {
        return initialValue;
    }
}

function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue);
    })

    useDebugValue('Hi there!');
    useDebugValue([key, value]);
    // Такой дебаг используется для вычисляемых значений и только в среде разработки, не на проде
    useDebugValue(value, v => getSlowValue(v));
    // так будет долго - useDebugValue(getSlowValue(value));

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value])

    return [value, setValue]
}

// Пример медленной функции для useDebugValue
function getSlowValue(value) {
    console.log('Calling getSlowValue()');
    for (let i = 0; i < 1000000000; i++) {
        console.log(); 
    }
    return value;
}

export default useLocalStorage;