import { useState } from "react"
export default function TodoInput(props) {


    const handleAdd = () => {
        props.setTodos(prev => [...prev, props.inputValue])
        props.setInputValue('')
    }

    return (
        <div className="flex gap-3 mb-6">
            <input type="text" className=" flex-1 px-4 py-3 rounded-lg bg-transparent border border-[#fff4dc] text-[#fff4dc] placeholder-[#fff4dc] focus:outline-none" placeholder="Enter a todo item" value={props.inputValue} onChange={(e) => props.setInputValue(e.target.value)} onKeyDown={(e) => {
                if (e.key === 'Enter') handleAdd();
            }} />
            <button className="bg-[#071e1e] border border-[#fff4dc] text-[#fff4dc] px-5 py-2 cursor-pointer rounded-lg font-semibold hover:bg-[#0b2a2a]" onClick={handleAdd}>Add</button>
        </div>
    )
}
