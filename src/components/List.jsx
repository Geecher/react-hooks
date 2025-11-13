import {useEffect, useState} from "react";

function List({getItems}) {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(getItems(5))
        console.log('Updating Items...')
    }, [getItems])

    return (
        <div>
            {items.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </div>
    )
}

export default List;