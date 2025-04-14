import { useState } from "react";
import EditCard from "./EditCard";

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
            <div>
                <div>{props.text}</div>
                <button onClick={handleEdit}>Edit</button>
                {showEdit && <EditCard todos={props.todos} index={props.index} setTodos={props.setTodos} setShowEdit={setShowEdit} />}
                <button onClick={handleDelete}>Delete</button>
            </div>
        </>
    )
}