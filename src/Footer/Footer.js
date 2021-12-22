import React from "react";
import "./Footer.css";

class Footer extends React.Component {
    render() {
        const { todoList, changeTodoList, deleteCompleted } = this.props;

        return todoList.length === 0 ? "" : (
            <footer className="footer flex">
                <div className="complete-state">
                    <span>{todoList.filter(todo => todo.display).length}</span>
                </div>
                <div className="footer-menus flex align-center justify-center">
                    <button className="footer-menu" onClick={changeTodoList} data-type={"all"}>All</button>
                    <button className="footer-menu" onClick={changeTodoList} data-type={"active"}>Active</button>
                    <button className="footer-menu" onClick={changeTodoList} data-type={"complete"}>Complete</button>
                </div>
                <div className="corner flex align-center">
                    <button id="clear-completed" onClick={deleteCompleted}>Clear Completed</button>
                </div>
            </footer>
        );
    }
}

export default Footer;