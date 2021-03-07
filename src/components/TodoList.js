import React, { useEffect, useState } from 'react'
import './TodoList';

const TodoList = () => {
    // data cho list
    const [todo, setTodo] = useState([]);
    // state cho input
    const [val, setVal] = useState('');
    const [searchTeam, setSearchTeam] = useState('');
    // const [searchResults, setSearchResults] = useState([]);
    const handleValueChange = (event) => {

        setVal(event.target.value);
    }
    // on add item to TodoList
    const onAddItemToList = (event) => {
        // const _todo = [...todo];
        // _todo.push(val);
        // setTodo(_todo);
        // check trung nhau
        const checkVal = todo.find(v => v === val);
        if (event.keyCode === 13) {
            if (!checkVal) {
                setTodo([...todo, val])
            }
            else {
                alert('trung roi ko nhap dc')
            }
            setVal('');
        }
    }
    const clickItemToList = () => {
        const checkVal = todo.find(v => v === val);
        if (!checkVal) {
            setTodo([...todo, val])
        }
    }

    const onRemoveToList = (item) => {
        // setTodo(todo.filter(value => value !== item))
        const newTodo = todo.filter(value => value !== item)
   
            setTodo(newTodo)

    }

    useEffect(() => {
        const results = todo.filter(value => value.toLowerCase().includes(searchTeam));
        setTodo(results);

    }, [searchTeam])

    // console.log(todo);
    const handleSearch = (e) => {
        setSearchTeam(e.target.value);

    }
    return (
        <div className="todolist">
            <div className="name">TodoList</div>
            <ul className="list-todo">
                {todo.map((item, index) => (
                    <li key={index}>
                        <span>{item}</span>
                        <button onClick={() => onRemoveToList(item)}>x</button>
                    </li>
                ))}
            </ul>
            <div className="input-group" >
                <input
                    type="text"
                    placeholder="nhap"
                    value={val}
                    onKeyUp={onAddItemToList}
                    onChange={handleValueChange}
                />
                <button onClick={clickItemToList}>add</button>
            </div>

            <div className="inputSearch">
                <input
                    type="text"
                    placeholder="search"
                    value={searchTeam}
                    onChange={handleSearch}
                />
            </div>
            {/* <ul>
                {searchResults.map((item,index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul> */}
        </div>
    )
}
export default TodoList;