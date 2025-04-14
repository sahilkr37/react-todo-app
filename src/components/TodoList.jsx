import { useState } from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {

    return (
        <>
            <div>Todo List</div>
            <div>
                {
                    props.todos.map((element, index) => (
                        <li key={index}>
                            <TodoCard todos={props.todos} setTodos={props.setTodos} setInputValue={props.setInputValue} index={index} text={element} />
                        </li>
                    ))
                }

            </div>
        </>
    );
}