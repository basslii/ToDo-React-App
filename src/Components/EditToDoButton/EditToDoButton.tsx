import { Fragment, useState } from 'react';
import './EditToDoButton.css'
import { Button, Modal } from 'react-bootstrap'
import SaveButtonComponent from '../SaveButtonComponent/SaveButtonComponent';
import 'bootstrap/dist/css/bootstrap.min.css';


const EditToDoButton = (props: any) => {
    
    const { title, ToDoList, item, setFilteredToDo, setSearch, setToDoList } = props;

    const [insertNewTitle, setInsertNewTitle] = useState('');
    const [ isOpen, setIsOpen ] = useState(false);
    
    const handleShow = () => {
        setInsertNewTitle('');
        setIsOpen(true);

    };
    const handleClose = () => {
        setInsertNewTitle('');
        setIsOpen(false);

        setTimeout(() => {
            setSearch('');
        }, 300);
    };

    return (
        <Fragment>
            <div>
                <Button className='btn-custom' type='submit' onClick={() => handleShow()}>{title}</Button>
            </div>

            <Modal show={isOpen === true} onHide={handleClose} className='modal'>
                <Modal.Header closeButton>
                    <Modal.Title>Edit To-Do Title</Modal.Title>
                </Modal.Header>
                <Modal.Body className='centered'>
                    <input type='text' className='input-custom' placeholder={title} onChange={(event: any) => setInsertNewTitle(event.target.value.toLowerCase())} value={insertNewTitle}></input>
                </Modal.Body>
                <Modal.Footer>
                    <SaveButtonComponent ToDoList={ToDoList} insertNewTitle={insertNewTitle} item={item} setFilteredToDo={setFilteredToDo} handleClose={handleClose}/>
                    <Button variant='Secondary' onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}

export default EditToDoButton;