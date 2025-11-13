import {Suspense, useState} from "react";
import {Data} from "../components/Data.jsx";
import Content from "../components/Content.jsx";
import ErrorBoundary from "../components/ErrorBoundary.jsx";

const URLS = {
    posts: 'https://jsonplaceholder.typicode.com/posts',
    users: 'https://jsonplaceholder.typicode.com/users',
    comments: 'https://jsonplaceholder.typicode.com/comments'
}

// Этот хук предназначен для демонстрации использования различных хуков React.
// В данном случае он позволяет переключаться между тремя типами ресурсов (posts, users, comments)
// и отображать соответствующие данные при нажатии на кнопки.
// Для получения данных можно использовать встроенный хук use, который позволяет работать с асинхронными операциями
// и автоматически управляет состояниями загрузки и ошибок.
// Обратите внимание, что use является экспериментальным хуком и может быть недоступен в некоторых версиях React.
// Убедитесь, что ваша версия React поддерживает этот хук, прежде чем использовать его в продакшн-коде.

function Use() {
    const [url, setUrl] = useState(URLS.posts)

    return (
        <>
            <div className={'d-flex gap-1'}>
                <button onClick={() => setUrl(URLS.posts)}>Posts</button>
                <button onClick={() => setUrl(URLS.users)}>Users</button>
                <button onClick={() => setUrl(URLS.comments)}>Comments</button>
            </div>
            <Content style={{marginTop: '1rem', textAlign: 'start'}}>
                <ErrorBoundary fallback={<div style={{color: 'red'}}>Error occurred while fetching data.</div>}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Data url={url}/>
                    </Suspense>
                </ErrorBoundary>
            </Content>
        </>
    );
}

export default Use;