import { useState } from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {

    return (
        <>

            <div className="space-y-4">
                {
                    props.todos.map((element, index) => (
                        <div key={index}>
                            <TodoCard todos={props.todos} setTodos={props.setTodos} setInputValue={props.setInputValue} index={index} text={element} />
                        </div>
                    ))
                }

            </div>
        </>
    );
}