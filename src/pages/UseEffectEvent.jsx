import {useEffect, useEffectEvent} from "react";

function UseEffectEvent() {
    return (
        <div>Check the code <a href="src/pages/UseEffectEvent.jsx" target="_blank">UseEffectEvent.jsx</a>
        <br/><br/>Остались <b>useInsertionEffect</b> и <b>useSyncExternalStore</b>, но они для продвинутых случаев.
        </div>
    );
}
// Пример использования useEffectEvent для оптимизации обработчиков событий в функциональных компонентах React.
// В этом примере мы создаем компонент ChatRoom, который подключается к чат-комнате по-заданному URL.
// Мы используем useEffectEvent для создания обработчика события onConnected, который логирует сообщение при успешном подключении.
// Это позволяет избежать повторного создания функции при каждом рендере компонента, что улучшает производительность.
function ChatRoom({url, loggingOptions}) {
    const onConnected = useEffectEvent((url) => {
        logConnection(`Connected to ${url}`, loggingOptions);
    })

    useEffect(() => {
        const room = connectToRoom(url);
        room.onConnected(() => {
            onConnected(url)
        });

        return () => {
            room.disconnect()
        };
    }, [url]);

    return null;
}

function logConnection(message, options) {
    if (options?.logConnections) {
        console.log(message);
    }
}

function connectToRoom(url) {
    // Mock implementation of connecting to a chat room
    return {
        onConnected: (callback) => {
            setTimeout(callback, 1000); // Simulate async connection
        },
        disconnect: () => {
            console.log(`Disconnected from ${url}`);
        }
    };
}

export default UseEffectEvent;