import React, {useContext, useEffect} from "react";
import {InfoContext} from "../contexts/info";
import ChooseViewTypeStyle from "../styled/ChooseViewType-Style";
const ChooseViewType = () => {
    const { todoList, viewType, modifyViewType  } = useContext(InfoContext);
    const buttons = [
        {name:"All", type:"all"},
        {name:"Activate", type:"activate"},
        {name:"Complete", type:"complete"}
    ];

    const setViewType = ({target:{ dataset }}) => {
        modifyViewType(dataset.type);
    }

    return (
        <ChooseViewTypeStyle viewType={viewType}>
            {buttons.map(btn => <button key={btn.type} className={btn.type} onClick={setViewType} data-type={btn.type}>{btn.name}</button>)}
        </ChooseViewTypeStyle>
    );
};

export default ChooseViewType;