import React, {useContext} from "react";
import {InfoContext} from "../contexts/info";
import TodoListStyle from "../styled/TodoList-Style";
import {FaCheck} from "react-icons/fa";
import {ImCross} from "react-icons/im";

const TodoList = () => {
    const {todoList, changeStateTodo, modifyTodo, deleteTodo} = useContext(InfoContext);

    const changeContent = ({key, target: {dataset, value}}) => {
        if (key === "Enter") {
            let item = todoList[dataset.idx];
            item.content = value;
            item.isModifying = !item.isModifying;

            modifyTodo(item);
        }
    };

    const changeSelected = (itemIdx) => {
        let item = todoList[itemIdx];
        item.isSelected = !item.isSelected;

        modifyTodo(item);
    };

    console.log("render...");
    return (
        <TodoListStyle>
            {todoList.map((item, idx) =>
                <div key={item.id} className="todo">
                    <div className="input_box">
                        <input id={"item_" + item.id} type="checkbox" onChange={() => changeSelected(idx)}
                               checked={item.isSelected}/>
                        <label htmlFor={"item_" + item.id}><FaCheck/></label>
                    </div>
                    <div className="text_box" onDoubleClick={(e) => changeStateTodo(item.id)}>
                        {item.isModifying ?
                            <input type="text" className="modifying" defaultValue={item.content} data-idx={idx} onKeyPress={changeContent}/> :
                            <p className={item.isSelected ? "selected" : ""}>{item.content}</p>}
                    </div>
                    <div className="button_box">
                        <button onClick={(e) => deleteTodo(idx)}><ImCross/></button>
                    </div>
                </div>)}
        </TodoListStyle>
    );
};

export default TodoList;