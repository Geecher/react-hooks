import useLocalStorage from "../hooks/useLocalStorage.jsx";
import useUpdateLogger from "../hooks/useUpdateLogger.jsx";

function CustomHook() {
    const [name, setName] = useLocalStorage('name', '');
    useUpdateLogger(name);

    return (
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
    );
}

export default CustomHook;