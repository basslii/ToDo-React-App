import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';

const DeleteButton = (props: any) => {
    
    const { handleDeleteData } = props;

    return (
        <Fragment>
            <button type="submit" className="btn btn-secondary" onClick={handleDeleteData}>Delete</button>
        </Fragment>
    )
};

export default DeleteButton;