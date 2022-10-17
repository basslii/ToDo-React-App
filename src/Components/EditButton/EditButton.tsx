import { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './EditButton.css'

const EditButton = (props?: any) => {

    const { handleEditData } = props;

    return (
        <Fragment>
            <div className="form-group">
                <select id="editCompletion" className="btn btn-white" defaultValue='' onChange={handleEditData}>
                    <option value='' disabled className="font-black center" style={{color: 'black'}}>Edit</option>
                    <option value="1" className="center" style={{color: 'black'}}>Complete</option>
                    <option value="2" className="center" style={{color: 'black'}}>Not Complete</option>
                </select>
            </div>
        </Fragment>
    )
}

export default EditButton;