import { Fragment, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Itodo } from '../ToDoInterface';

const SaveButtonComponent = (props: any) => {

    const { ToDoList, insertNewTitle, item, setFilteredToDo, handleClose } = props;

    const saveEditedToDo = () => {

        ToDoList.map((element: any) => {
            if(element.id === item.id) {
                element.title = insertNewTitle
            }
        })
        
        setFilteredToDo([...ToDoList]);
        
        
        setTimeout(() => {
            handleClose();
        }, 500)
    }

    return (
        <Fragment>
            <Button variant='primary' onClick={() => saveEditedToDo()} disabled={insertNewTitle.length < 1}>Save</Button>
        </Fragment>
    )
}

export default SaveButtonComponent