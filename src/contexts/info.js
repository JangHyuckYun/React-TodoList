import {createContext, useState} from "react";
import { useBeforeunload } from "react-beforeunload";

const defaultData = {
    todoList: [],

    addTodo: () => {},
    modifyTodo: () => {},
    deleteTodo: () => {},
    validation: () => {},
    changeStateTodo: () => {},
};

export const InfoContext = createContext(defaultData);



const InfoStore = (props) => {
    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("todoList")) || []);
    console.log(todoList);
    const getTodoIdx = (itemId) => {
        return todoList.findIndex(findItem => findItem.id === itemId );
    };

    const addTodo = (item) => {
        setTodoList([...todoList, item]);
    };

    const modifyTodo = (item) => {
        todoList[getTodoIdx(item.id)] = item;

        setTodoList([...todoList]);
    };

    const changeStateTodo = (itemIdx, type = "modify") => {
        let target = todoList[itemIdx];
        if(type === "modify") {
            target.isModifying = !target.isModifying;
        } else if(type === "select") {
            target.isSelected = !target.isSelected;
        }

        setTodoList([...todoList]);
    };


    const deleteTodo = (itemIdx) => {
        todoList.splice(itemIdx, 1);

        setTodoList([...todoList]);
    };

    const validation = (item) => {
        const regex = /^[a-zA-Z0-9ㄱ-ㅎ가-힣!?"']+$/g;

        return regex.test(item.content);
    };

    useBeforeunload((event) => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    });

    return (
        <InfoContext.Provider value={{todoList, addTodo, modifyTodo, deleteTodo, validation, changeStateTodo}}>
            {props.children}
        </InfoContext.Provider>
    );
};

export default InfoStore;