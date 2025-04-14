import { useState } from "react"

export default function EditCard(props) {
    const [editValue, setEditValue] = useState(props.todos[props.index])
    return (
        <>
            <input type="text" value={editValue} onChange={(e) => setEditValue(e.target.value)} />
            <button onClick={() => {
                const updated = [...props.todos];
                updated[props.index] = editValue;
                props.setTodos(updated);
                props.setShowEdit(false);
            }}>Done</button>
        </>
    )

}