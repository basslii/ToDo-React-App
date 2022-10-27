import { Fragment, useState } from "react";
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

        const uuidNum = parseInt(UUIDV4().split('-')[0].replaceAll(/[a-zA-Z]/g , ""));

        if(inputText.length > 0) {
            const newToDoList:Itodo = {id: uuidNum, task: inputText, status: 'not completed'};
            setToDoList([...ToDoList, newToDoList,]);
            
            //clear input text after data is added
            setInputText('');
        }      


        //push data to DB        
    }

    return (
        <Fragment>
            <input className="form-control search-bar" placeholder="Add To-Do List" type="text" onChange={(event) => setInputText(event.target.value.toLowerCase())} value={inputText}/>
            <AddButton onClickAddButton={onClickAddButton} inputText={inputText}/>
            <SearchComponent ToDoList={ToDoList}/>
        </Fragment>
    )
}

export default AddInput;