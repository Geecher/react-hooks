import { use, useMemo } from "react";

// Кэш для хранения результатов fetch-запросов
const fetchCache = new Map();

// Функция для получения данных с кэшированием
async function fetchWithCache(url) {
    if (!fetchCache.has(url)) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        fetchCache.set(url, data);
    }
    return fetchCache.get(url);
}

// Компонент для отображения данных, полученных по URL
// использует хук use для работы с асинхронными данными
// и useMemo для мемоизации функции fetchWithCache
export function Data({ url }) {
    const data = use(useMemo(() => fetchWithCache(url), [url]));
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
}