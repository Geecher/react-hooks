import {useLayoutEffect, useRef, useState} from "react";

// Пример использования useLayoutEffect
// useLayoutEffect похож на useEffect, но он вызывается синхронно после всех изменений DOM.
// Используйте его, чтобы читать макет с DOM и синхронизировать его повторный рендер.
// В большинстве случаев предпочтительнее использовать useEffect, поскольку он не блокирует отрисовку браузера.
// Однако если вам нужно измерить DOM-элементы и применить соответствующие стили до того, как браузер отрисует экран,
// используйте useLayoutEffect.
function UseLayoutEffect() {
    const [show, setShow] = useState(false)
    const popup = useRef();
    const button = useRef();

    useLayoutEffect(() => {
        if (popup.current == null || button.current == null) return;
        const {bottom} = button.current.getBoundingClientRect();
        popup.current.style.top = `${bottom + 25}px`;
    }, [show])

    return (
        <>
            <button ref={button} onClick={() => setShow(show => !show)}>Click here</button>
            {show && <div ref={popup} style={{
                position: 'absolute',
                padding: '10px',
                background: 'orange'
            }}>
                Hello
            </div>}
        </>
    );
}

export default UseLayoutEffect;