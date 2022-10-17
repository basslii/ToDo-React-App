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

    const onClickAddButton = () => {
        if(inputText.length > 0) {
            const newToDoList:Itodo = {id: UUIDV4().split('-')[0], title:inputText, status: 'not completed'};
            setToDoList([...ToDoList, newToDoList,]);
            
            //clear input text after data is added
            setInputText('');
        }
    }

    return (
        <Fragment>
            <input className="form-control search-bar" placeholder="Add To-Do List" type="text" onChange={(event) => setInputText(event.target.value.toLowerCase())} value={inputText}/>
            <AddButton onClickAddButton={onClickAddButton}/>
            <SearchComponent ToDoList={ToDoList}/>
        </Fragment>
    )
}

export default AddInput;