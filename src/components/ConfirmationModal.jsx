import {useImperativeHandle, useRef} from "react";

function ConfirmationModal({isOpen, onClose, ref}) {
    const closeRef = useRef();
    const confirmRef = useRef();
    const denyRef = useRef();

    useImperativeHandle(ref, () => {
        return {
            focusClose: () => closeRef.current.focus(),
            focusConfirm: () => confirmRef.current.focus(),
            focusDeny: () => denyRef.current.focus()
        }
    }, []);

    if (!isOpen) return null;

    return (
        // Здесь уже реф не нужен, так как управление фокусом происходит через useImperativeHandle
        // <div className={'modal'} ref={ref}>
        <div className={'modal'}>
            <button onClick={onClose} ref={closeRef}>&times;</button>
            <h1>Title</h1>
            <p>Are you sure you want to proceed?</p>
            <div className={'d-flex gap-1'}>
                <button ref={confirmRef} onClick={onClose}>Confirm</button>
                <button ref={denyRef} onClick={onClose}>Deny</button>
            </div>
        </div>
    );
}

export default ConfirmationModal;