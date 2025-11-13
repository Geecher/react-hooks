import {useRef, useState} from "react";

function DemoForm() {
    const inputRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState();

    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);

        if (inputRef.current == null) return;
        const result = await saveUser(inputRef.current.value);
        setData(result);
        setIsLoading(false);
    }

    return (
        <form onSubmit={handleSubmit} className="d-flex gap-1" style={{ flexDirection: "column", alignItems: "center" }}>
            <label htmlFor="firstName">First Name</label>
            <input ref={inputRef} id={'firstName'} type="text" placeholder="Enter your name" />
            <button disabled={isLoading}>{isLoading ? 'Saving...' : 'Save'}</button>
            {data?.error && <p style={{color: 'red'}}>{data.error}</p>}
            {data?.message && <p style={{color: 'green'}}>{data.message}</p>}
        </form>
    );
}

async function saveUser(name) {
    await wait(1000);
    if (name === "") {
        return {error: "Name is required"};
    }
    return {message: `User ${name} saved successfully`};
}

function wait(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}


export default DemoForm;