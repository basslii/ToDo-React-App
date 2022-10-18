import { Fragment } from 'react';
import { Button } from 'react-bootstrap';

const SaveButtonComponent = (props: any) => {

    const { ToDoList, insertNewTitle, item, setFilteredToDo, handleClose } = props;

    const saveEditedToDo = () => {

        ToDoList.map((element: any) => {
            if(element.id === item.id) {
                return element.task = insertNewTitle;
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