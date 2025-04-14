import { useState } from "react"
export default function TodoInput(props) {


    const handleAdd = () => {
        props.setTodos(prev => [...prev, props.inputValue])
        props.setInputValue('')
    }

    return (
        <div>
            <input type="text" placeholder="Enter a todo item" value={props.inputValue} onChange={(e) => props.setInputValue(e.target.value)} onKeyDown={(e) => {
                if (e.key === 'Enter') handleAdd();
            }} />
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}
