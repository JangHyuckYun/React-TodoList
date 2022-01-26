import React, {useContext, useEffect} from 'react';
import AddInput from './Add/AddInput';
import TodoList from './TodoList/TodoList';
import Footer from './Footer/Footer';
import AppStyle from './styled/App-Style';
import InfoStore, {InfoContext} from "./contexts/info";
import Status from "./Status";
import ChooseViewType from "./TodoList/ChooseViewType";

const App = () => {

    return (
        <InfoStore>
            <AppStyle>
                <div className="top">
                    <div className="title">
                        <div className="left_box">
                            <p className="leftText">TODO LIST</p>
                        </div>
                        <Status />
                    </div>
                </div>
                <div className="bottom">
                    <AddInput className="input_container" />
                    <ChooseViewType />
                    <TodoList />
                </div>
            </AppStyle>
        </InfoStore>
    );
};
export default App;
