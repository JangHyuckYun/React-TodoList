import React, {useContext, useEffect} from "react";
import {InfoContext} from "../contexts/info";
import TodoListStyle from "../styled/TodoList-Style";
const Todo = () => {
    const { todoList } = useContext(InfoContext);

    return (
        <TodoListStyle>
            {todoList.map(item => <div className="todo"></div>)}
        </TodoListStyle>
    );
};

export default Todo;