import { useState } from "react"
import { CheckBadgeIcon } from '@heroicons/react/24/solid'

export default function EditCard(props) {
    const [editValue, setEditValue] = useState(props.todos[props.index])
    return (
        <>
            <div className="rounded-lg border border-[#fff4dc] flex ">
                <input type="text" className="w-full px-4 py-2  text-[#fff4dc] bg-transparent placeholder-[#fff4dc] focus:outline-none focus:ring-2 focus:ring-[#fff4dc]" value={editValue} onChange={(e) => setEditValue(e.target.value)} />
                <button className="p-1 cursor-pointer" onClick={() => {
                    const updated = [...props.todos];
                    updated[props.index] = editValue;
                    props.setTodos(updated);
                    props.setShowEdit(false);
                }}><CheckBadgeIcon className="size-6 text-green-500" /></button>
            </div>
        </>
    )

}