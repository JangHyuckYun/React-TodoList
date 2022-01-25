import React, {useContext, useRef} from "react";
import AddInputStyle from "../styled/AddInput-Style";
import {InfoContext} from "../contexts/info";
import {FaPlusCircle} from "react-icons/fa";

const AddInput = (props) => {
    const { className } = props;
    const {todoList, addTodo, validation} = useContext(InfoContext);
    const input = useRef(null);

    const createItem = () => {
        const lastItem = todoList[todoList.length - 1] || {id:0, content:""};

        return {
            id: lastItem.id + 1,
            content: input.current.value,
            isSelected:false,
            isModifying:false,
        };
    }

    const readyAddTodo = () => {
        const item = createItem();

        if(validation(item)) {
            addTodo(item);

            input.current.value = "";
        } else {
            console.log("error!!");
        }
    };

    const onKeyPress = ( { key } ) => {
        if(key === "Enter") readyAddTodo();
    };

    return (
        <AddInputStyle className={className}>
            <input ref={input} type="text" onKeyPress={onKeyPress}/>
                <FaPlusCircle onClick={readyAddTodo} />
        </AddInputStyle>
    );
};

export default AddInput;