import React, {useContext} from "react";
import {InfoContext} from "../contexts/info";
import TodoListStyle from "../styled/TodoList-Style";
import {FaCheck} from "react-icons/fa";
import {ImCross} from "react-icons/im";

const TodoList = () => {
    const {todoList, viewType, changeStateTodo, modifyTodo, deleteTodo, getTodoIdx, validation} = useContext(InfoContext);

    const changeContent = ({key, target: {dataset, value}}) => {
        if (key === "Enter") {
            let item = todoList[dataset.idx];
            item.content = value;

            if(validation(item)) {
                item.isModifying = !item.isModifying;

                modifyTodo(item);
            }
        }
    };

    const changeSelected = (itemId) => {
        let item = todoList[getTodoIdx(itemId)];
        item.isSelected = !item.isSelected;

        modifyTodo(item);
    };

    return (
        <TodoListStyle>
            {todoList.filter(item => {
                if(viewType === "all") return true;
                else return viewType === "activate" ? !item.isSelected : item.isSelected;
            }).map((item, idx) =>
                <div key={item.id} className="todo">
                    <div className="input_box">
                        <input id={"item_" + item.id} type="checkbox" onChange={() => changeSelected(item.id)}
                               checked={item.isSelected}/>
                        <label htmlFor={"item_" + item.id}><FaCheck/></label>
                    </div>
                    <div className="text_box" onDoubleClick={(e) => changeStateTodo(item.id)}>
                        {item.isModifying ?
                            <input type="text" className="modifying" defaultValue={item.content} data-idx={idx} onKeyPress={(e) => changeContent(e)}/> :
                            <p className={item.isSelected ? "selected" : ""}>{item.content}</p>}
                    </div>
                    <div className="button_box">
                        <button onClick={(e) => deleteTodo(item.id)}><ImCross/></button>
                    </div>
                </div>)}
        </TodoListStyle>
    );
};

export default TodoList;