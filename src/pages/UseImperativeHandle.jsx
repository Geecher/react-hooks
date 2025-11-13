import ConfirmationModal from "../components/ConfirmationModal.jsx";
import {useRef, useState} from "react";
import Content from "../components/Content.jsx";

// Пример использования useImperativeHandle для управления фокусом на кнопках модального окна из родительского компонента.
// Родительский компонент открывает модальное окно и может программно устанавливать фокус на разные кнопки внутри него.
// Компонент ConfirmationModal использует useImperativeHandle для предоставления методов управления фокусом.
// Это позволяет родительскому компоненту вызывать методы focusClose, focusConfirm и focusDeny для установки фокуса на соответствующие кнопки.
// Такой подход улучшает инкапсуляцию и позволяет родителю управлять поведением дочернего компонента без прямого доступа к его внутренним элементам.
// Это особенно полезно для модальных окон, где важно управлять фокусом для улучшения доступности.
function UseImperativeHandle() {
    const [open, setOpen] = useState(false)
    const modalRef = useRef();

    return (
        <Content className={'d-flex gap-1'} style={{flexDirection: 'column', alignItems: 'flex-start'}}>
            <button onClick={() => setOpen(true)}>Open</button>
            <button onClick={() => modalRef.current.focusClose()}>Focus close</button>
            <button onClick={() => modalRef.current.focusConfirm()}>Focus confirm</button>
            <button onClick={() => modalRef.current.focusDeny()}>Focus deny</button>
            {/*Тут реф передается, но в DOM самой модалки не используется*/}
            <ConfirmationModal ref={modalRef} isOpen={open} onClose={() => setOpen(false)}/>
        </Content>
    );
}

export default UseImperativeHandle;