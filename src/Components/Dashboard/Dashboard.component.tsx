import 'bootstrap/dist/css/bootstrap.min.css';
import AddInput from '../AddInput/AddInput.component';
import './Dashboard.css';

const DashboardComponent = () => {

        return (
            <div className='Dashboard-Container'>
                <div className='app-title'>
                    <h1>To-Do Tracker App</h1>   
                </div>
                <AddInput/>
            </div>
        );
};

export default DashboardComponent;
