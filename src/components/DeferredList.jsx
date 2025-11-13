import {useDeferredValue, useEffect, useMemo} from "react";

function DeferredList({ input }) {
    const LIST_SIZE = 20000;
    const defferedInput = useDeferredValue(input)

    const list = useMemo(() => {
        const l = [];
        for (let i = 0; i < LIST_SIZE; i++) {
            l.push(<div key={i}>{defferedInput}</div>);
        }
        return l;
    }, [defferedInput]);

    useEffect(() => {
        console.log(`Input: ${input} | Deferred Input: ${defferedInput}`);
    }, [input, defferedInput]);

    return list;
}

export default DeferredList;