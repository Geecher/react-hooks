import {useActionState} from "react";

// Пример использования useActionState для управления состоянием формы с асинхронным сохранением данных.
// Функция saveUser имитирует асинхронную операцию сохранения данных пользователя.
// Компонент отображает форму с полем ввода имени и кнопкой сохранения.
// При отправке формы вызывается action, который обновляет состояние на основе результата операции сохранения.
function UseActionState() {
    const [data, action, isPending] = useActionState(saveUser, null)

    return (
        <form action={action} className="d-flex gap-1" style={{ flexDirection: "column", alignItems: "center" }}>
            <label htmlFor="firstName">First Name</label>
            <input defaultValue={data?.fieldData?.name} id={'firstName'} name="firstName" type="text" placeholder="Enter your name"/>
            <button disabled={isPending}>{isPending ? 'Saving...' : 'Save'}</button>
            {data?.error && <p style={{color: 'red'}}>{data.error}</p>}
            {data?.message && <p style={{color: 'green'}}>{data.message}</p>}
        </form>
    );
}

async function saveUser(previousState, formData) {
    const name = formData.get("firstName");
    await wait(1000);
    if (name === "") {
        return {error: "Name is required"};
    }
    return {message: `User ${name} saved successfully`, fieldData: {name}};
}

function wait(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}


export default UseActionState;