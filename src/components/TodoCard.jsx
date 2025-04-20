import { useState } from "react";
import EditCard from "./EditCard";
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'

export default function TodoCard(props) {

    const [showEdit, setShowEdit] = useState(false);
    const handleDelete = () => {
        props.setTodos(prev => prev.filter((_, i) => i !== props.index))
    }
    const handleEdit = () => {
        setShowEdit(prev => !prev)
        // console.log(props.todos[props.index])
        // props.setInputValue(props.todos[props.index])

    }
    return (

        <>
            <div className="flex justify-between items-center border border-orange-400 px-4 py-3 rounded-lg">
                <span>{props.text}</span>
                <div className="flex gap-4 text-sm font-semibold">
                    <button className="cursor-pointer" onClick={handleEdit}><PencilSquareIcon className="size-6 text-yellow-500" /></button>
                    {showEdit && <EditCard todos={props.todos} index={props.index} setTodos={props.setTodos} setShowEdit={setShowEdit} />}
                    <button className="cursor-pointer" onClick={handleDelete}><TrashIcon className="size-6 text-red-500" /></button>
                </div>
            </div>
        </>
    )
}