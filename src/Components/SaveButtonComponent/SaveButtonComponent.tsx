import { Fragment } from 'react';
import { Button } from 'react-bootstrap';

const SaveButtonComponent = (props: any) => {

    const { ToDoList, insertNewTitle, item, setFilteredToDo, handleClose, setToDoList} = props;

    const saveEditedToDo = async () => {
        console.log('id to change text title: ', item.id);
        console.log('new title to replace: ', insertNewTitle);  

        ToDoList.map((element: any) => {
            // return element.id === item.id
            if(element.id === item.id) {
                element.title = insertNewTitle
            }
        })
        
        // await setToDoList(ToDoList);
        await setFilteredToDo(ToDoList);
        
        console.log('ToDoList after change: ', ToDoList);
        // console.log('filteredToDo after change: ', filteredToDo);
        
        setTimeout(() => {
            handleClose();
        }, 500)
    }

    return (
        <Fragment>
            <Button variant='primary' onClick={() => saveEditedToDo()}>Save</Button>
        </Fragment>
    )
}

export default SaveButtonComponent