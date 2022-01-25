import React, {useContext, useEffect} from 'react';
import AddInput from './Add/AddInput';
import TodoList from './TodoList/TodoList';
import Footer from './Footer/Footer';
import AppStyle from './styled/App-Style';
import InfoStore, {InfoContext} from "./contexts/info";
import Status from "./Status";

const App = () => {

    return (
        <InfoStore>
            <AppStyle>
                <div className="top">
                    <div className="title">
                        <p className="leftText">Your <br/> Things</p>
                        <Status />
                    </div>
                </div>
                <div className="bottom">
                    <AddInput className="input_container" />
                    <TodoList />
                    <Footer />
                </div>
            </AppStyle>
        </InfoStore>
    );
};
export default App;
