import { Fragment } from "react";
import '../Button/Button.css';

const AddButton = (props: any) => {
    const { onClickAddButton, inputText } = props

    return (
        <Fragment>
            <div className="btn-container">
                <button type='submit' className="btn btn-primary margin" onClick={onClickAddButton} disabled={inputText.length < 1}>Add</button>
            </div>
        </Fragment>
    )
}

export default AddButton;