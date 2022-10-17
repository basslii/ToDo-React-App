import { Fragment, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import SaveButtonComponent from '../SaveButtonComponent/SaveButtonComponent';
// import './EditToDoButton.css'

const ModalEditToDo = (props: any) => {
    const [ handleShow, handleClose, isOpen, setIsOpen ] = props;

    const [insertNewTitle, setInsertNewTitle] = useState('');

    console.log('handleShow: ', handleShow);
    console.log('handleShow: ', handleClose);
    console.log('isOpen: ', isOpen);

    return (
        <Modal show={isOpen === true} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit To Do</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input type='text' className='form-control' value={insertNewTitle}></input>
            </Modal.Body>
            <Modal.Footer>
                <SaveButtonComponent/>
                <Button variant='Secondary'>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalEditToDo;