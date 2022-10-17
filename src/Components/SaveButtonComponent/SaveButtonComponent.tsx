import { Fragment, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Itodo } from '../ToDoInterface';

const SaveButtonComponent = (props: any) => {

    const { ToDoList, insertNewTitle, item, setFilteredToDo, handleClose, setToDoList} = props;

    // const [storeChangeToDo, setStoreChangeToDo] = useState<Itodo>(ToDoList);

    const saveEditedToDo = async () => {
        // console.log('id to change text title: ', item.id);
        // console.log('new title to replace: ', insertNewTitle);  

        ToDoList.map((element: any) => {
            if(element.id === item.id) {
                element.title = insertNewTitle
            }
        })
        
        // setStoreChangeToDo(ToDoList)
        await setFilteredToDo(ToDoList);
        
        console.log('ToDoList after change saveEditedToDo: ', ToDoList);
        
        setTimeout(() => {
            handleClose();
        }, 500)
    }

    return (
        <Fragment>
            <Button variant='primary' onClick={() => saveEditedToDo()} disabled={insertNewTitle.length <= 0}>Save</Button>
        </Fragment>
    )
}

export default SaveButtonComponent