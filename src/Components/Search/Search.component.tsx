import { Fragment, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Search.css';
import ToDolist from '../ToDoList/ToDoList.component';

const SearchComponent = (props: any) => {

    const { ToDoList, setToDoList, } = props;

    const [ filteredToDo, setFilteredToDo ] = useState(ToDoList);
    const [ search, setSearch ] = useState('');

    const onSearch = async (event:any) => {
        const value = event.target.value

        if(event.target.length !== 0) {

            const filtered = ToDoList.filter((item: any) => {
                return item.title.includes(value.toString().toLowerCase().trim());
            })

            setSearch(value);
            setTimeout( async () => {
                setFilteredToDo(filtered);
            }, 500); 

        } else {
            setSearch(value);
            setToDoList([...ToDoList]);
        }

    }

    return (
        <Fragment>
            <input className="form-control search-bar" type="search" placeholder='Search To-Do List' onChange={(event)=> onSearch(event)} value={search}/>
            <div style={{marginBottom: '30px'}}>
                <h1> Your To Do List</h1>
            </div>
            <ToDolist ToDoList={ToDoList} setToDoList={setToDoList} filteredToDo={filteredToDo} setFilteredToDo={setFilteredToDo} setSearch={setSearch}/>
        </Fragment>
    )
    
}

export default SearchComponent;