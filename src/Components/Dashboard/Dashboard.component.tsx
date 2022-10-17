import 'bootstrap/dist/css/bootstrap.min.css';
import AddInput from '../AddInput/AddInput.component';
import './Dashboard.css';

const DashboardComponent = () => {

        return (
            <div className='Dashboard-Container'>
                <div style={{padding: '20px'}}>
                    <h1> Input will be here</h1>   
                </div>
                <AddInput/>
            </div>
        );
};

export default DashboardComponent;
