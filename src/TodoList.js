import React from "react";
import "./TodoList.css";

class Todo extends React.Component {
    render() {
        const {idx, complete, text, modify, display, onChange, modifyTodo, deleteTodo} = this.props;

        return (
            <div className={"todo " + (display ? "flex " : "none ") + (complete ? "complete " : "")} key={idx}
                 data-idx={idx}>
                <div className="check-box">
                    <input type="checkbox" checked={complete} onChange={onChange}/>
                </div>
                <div className="text-box" onDoubleClick={modifyTodo}>
                    {modify ? (
                            <textarea onKeyPress={modifyTodo}>
                                {text}
                            </textarea>)
                        : (<p>{text}</p>)}

                </div>
                <div className="corner flex align-center justify-center">
                    <button onClick={deleteTodo}>Delete</button>
                </div>
            </div>
        );
    }
}

class TodoList extends React.Component {
    render() {
        const {onChange, deleteTodo, modifyTodo} = this.props;

        return (
            <div className="todo-list-container container">
                {this.props.todoList.map((todo, idx) =>
                    <Todo
                        idx={idx}
                        text={todo.text}
                        display={todo.display}
                        complete={todo.complete}
                        modify={todo.modify}
                        onChange={onChange}
                        modifyTodo={modifyTodo}
                        deleteTodo={deleteTodo}/>)}
            </div>
        );
    }
}

export default TodoList;