import React, {useContext, useMemo, useRef, useState} from "react";
import AddInputStyle from "../styled/AddInput-Style";
import {InfoContext} from "../contexts/info";
import {FaPlus, FaPlusCircle} from "react-icons/fa";

const AddInput = (props) => {
    const { className } = props;
    const {todoList, textMaxLength, addTodo, validation} = useContext(InfoContext);
    const [textPercent, setTextPercent] = useState(0);
    const input = useRef(null);

    const getAverage = list => {
        const allLen = list.length;
        const completeLen = list.filter(item => item.isSelected).length;

        return Math.ceil(completeLen / allLen * 100) || 0;
    }

    const avg = useMemo(() => getAverage(todoList), [todoList]);

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
            setTextPercent(0);
        } else {
            console.log("error!!");
        }
    };

    const onKeyPress = ( { key, target: { value } } ) => {
        if(key === "Enter") readyAddTodo();
    };

    const onInput = ({target: { value }}) => {
        let percent = Math.ceil(value.length / textMaxLength * 100) || 0;
        percent = percent > 100 ? 100 : percent;
        setTextPercent(percent);

        if(value.length >= textMaxLength) {
            input.current.value = value.slice(0, textMaxLength);
        }
    }

    return (
        <AddInputStyle className={className} avg={avg} textPercent={textPercent}>
            <input ref={input} type="text" onKeyPress={onKeyPress} onInput={onInput}/>
                <FaPlus onClick={readyAddTodo} />
        </AddInputStyle>
    );
};

export default AddInput;