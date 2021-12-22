import React from 'react';
import Add from './Add';
import TodoList from './TodoList';
import Footer from './Footer';
import './App.css';

/* TODO
 - todo check 기능 o
 - todo text 수정 기능 x
 - todo 삭제 기능 o
 - 전체 선택, 전체 삭제 o
 - 남은 할일 수, 오늘 날짜 등 표시 x
* */

class App extends React.Component {
    constructor(props) {
        super(props);
        let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
        console.log("todoList", todoList);

        this.state = {
            todoList,
        }
    }

    addList($e) {
        const key = $e.key;
        if (key === "Enter") {
            let {todoList} = this.state;
            let text = $e.target.value;

            if (text.length > 0) {
                todoList.push({text, complete: false, display: true, modify:false});
                $e.target.value = "";
                this.setState({
                    todoList
                });
            }

        }
    }

    checkTodo($e) {
        const {todoList} = this.state;
        let {dataset: {idx}} = $e.target.parentNode.parentNode;
        idx = parseInt(idx);

        todoList[idx].complete = !todoList[idx].complete;

        this.setState({
            todoList
        })
    }

    changeTodoList($e) {
        const {dataset: {type}} = $e.target;
        let {todoList} = this.state;

        this.setState({
            todoList: todoList.map(todo => {
                // eslint-disable-next-line default-case
                switch (type) {
                    case "all":
                        todo.display = true;
                        break;

                    case "active":
                        todo.display = !todo.complete;
                        break;

                    case "complete" :
                        todo.display = todo.complete;
                        break;
                }

                return todo;
            }),
        })
    }

    deleteCompleted($e) {
        let {todoList} = this.state;

        this.setState({
            todoList: todoList.filter(todo => !todo.complete),
        })
    }

    deleteTodo($e) {
        const {dataset: {idx}} = $e.target.closest(".todo");
        let { todoList } = this.state;

        todoList.splice(idx, 1);

        this.setState({
            todoList
        })
    }

    modifyTodo($e) {
        const { type, key, target, target:{ nodeName, value } } = $e;
        const { dataset:{ idx } } = target.closest(".todo");
        let { todoList } = this.state;

        if(type === "keypress" && key === "Enter" && nodeName === "TEXTAREA") { // textarea 에서 입력 완료 시
            todoList[idx].text = value;
            todoList[idx].modify = false;
        } else if(type === "dblclick"){ // 더블 클릭 시
            if(nodeName === "TEXTAREA" && todoList[idx].modify) {
                todoList[idx].text = value;
            }

            todoList[idx].modify = !todoList[idx].modify;
        }

        this.setState({
            todoList
        })
    }

    render() {
        const { todoList } = this.state;

        localStorage.setItem("todoList", JSON.stringify(todoList));

        return (
            <div className="App">
                <Add
                    onKeyPress={($e) => this.addList($e)}/>
                <TodoList
                    todoList={todoList}
                    onChange={($e) => this.checkTodo($e)}
                    modifyTodo={($e) => this.modifyTodo($e)}
                    deleteTodo={($e) => this.deleteTodo($e)} />
                <Footer
                    todoList={todoList}
                    changeTodoList={($e) => this.changeTodoList($e)}
                    deleteCompleted={($e) => this.deleteCompleted($e)} />
            </div>
        );
    }
}

export default App;
