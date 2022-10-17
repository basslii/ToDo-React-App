import { Fragment, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Search/Search.css';
import { Itodo } from '../ToDoInterface';
import AddButton from "../AddButton/AddButton.component";
import SearchComponent from "../Search/Search.component";
import {v4 as UUIDV4 } from 'uuid';

const AddInput = () => {

    const [ToDoList, setToDoList] = useState<Itodo[]>([]);
    const [inputText, setInputText] = useState('');

    //Input To Do Change Handler Function
    const changeHandler = (event: any) => {
        const value = event.target.value;
        setInputText(value.toLowerCase());
    }

    const handleToDo = () => {
        
    }

    const onClickAddButton = () => {
        if(inputText.length > 0) {
            const newToDoList:Itodo = {id: UUIDV4().split('-')[0], title:inputText, status: 'not completed'};
            setToDoList([...ToDoList, newToDoList,]);
            
            //clear input text after data is added
            setTimeout(() => {
                setInputText('');
            }, 500);
        }
    }

    return (
        <Fragment>
            <input className="form-control search-bar" placeholder="Add To-Do List" type="text" onChange={(event) => changeHandler(event)} value={inputText}/>
            <AddButton onClickAddButton={onClickAddButton}/>
            <SearchComponent ToDoList={ToDoList}/>
        </Fragment>
    )
}

export default AddInput;