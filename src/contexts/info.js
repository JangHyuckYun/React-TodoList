import {createContext, useEffect, useState} from "react";
import { useBeforeunload } from "react-beforeunload";

const defaultData = {
    todoList: [],
    textMaxLength:0,
    viewType: "",

    addTodo: () => {},
    modifyTodo: () => {},
    deleteTodo: () => {},
    validation: () => {},
    changeStateTodo: () => {},
    modifyViewType: () => {},
    getTodoIdx:() => {},
};

export const InfoContext = createContext(defaultData);

const InfoStore = (props) => {
    const textMaxLength = 30;
    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("todoList")) || []);
    const [viewType, setViewType] = useState(JSON.parse(localStorage.getItem("viewType")) || "all");

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

    const changeStateTodo = (itemId, type = "modify") => {
        if(Array.isArray(itemId)) {
            itemId.forEach(idx => {
                todoList[getTodoIdx(idx)].isModifying = !todoList[getTodoIdx(idx)].isModifying;
            });
        } else {
            let target = todoList[getTodoIdx(itemId)];
            if(type === "modify") {
                target.isModifying = !target.isModifying;
            } else if(type === "select") {
                target.isSelected = !target.isSelected;
            }
        }

        setTodoList([...todoList]);
    };


    const deleteTodo = (itemId) => {
        todoList.splice(getTodoIdx(itemId), 1);

        setTodoList([...todoList]);
    };

    const validation = (item) => {
        const regex = /^[a-zA-Z0-9ㄱ-ㅎ가-힣!?"'\s]+$/g;

        return regex.test(item.content.trim());
    };

    const modifyViewType = (type) => {
        setViewType(type);
    };

    useBeforeunload((event) => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
        localStorage.setItem("viewType", JSON.stringify(viewType));
    });

    useEffect(() => {
        document.querySelector("#root").addEventListener("click", ({target}) => {
            const modifyingTodos = todoList.filter(item => item.isModifying);

            if(target.className !== "modifying" && modifyingTodos.length !== 0) {
                console.log("asfasf");
                changeStateTodo(modifyingTodos.map(item => item.id));
            }
        })
    }, []);


    return (
        <InfoContext.Provider value={{textMaxLength, todoList, viewType, addTodo, modifyTodo, deleteTodo, validation, changeStateTodo, modifyViewType, getTodoIdx}}>
            {props.children}
        </InfoContext.Provider>
    );
};

export default InfoStore;