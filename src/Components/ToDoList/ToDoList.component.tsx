import { Fragment, useEffect, useState } from 'react';
import Table from 'react-bootstrap/esm/Table';
import DeleteButton from '../DeleteButton/DeleteButton';
import EditButton from '../EditButton/EditButton';
import EditToDoButton from '../EditToDoButton/EditToDoButton';
import './ToDoList.css'

const ToDoComponent = (props:any) => {
    const { ToDoList, filteredToDo, setFilteredToDo, setSearch} = props;
    
    const [ updatedToDoList, setUpdatedToDoList ] = useState(ToDoList);
    
    useEffect(() => {
        setUpdatedToDoList(ToDoList);
    });

    useEffect(() => {
        setFilteredToDo(ToDoList);
        // setTimeout(async () => {
        // }, 500)
    },[ToDoList]);

    const handleEditData = async (event: any, id: number) => {
        
        const value = event.target.value;

        if(value === '1') {
            ToDoList.filter((item: any) => {
                return item.id === id;
            }).map((item: any) => {
                item.status = 'completed';
                return item;
            })

            setUpdatedToDoList([...ToDoList]);
        }

        if(value === '2') {
            ToDoList.filter((item: any) => {
                return item.id === id;
            }).map((item: any) => {
                item.status = 'not completed';
                return item;
            })

            setUpdatedToDoList([...ToDoList]);
        }

        setTimeout(() => {
            event.target.value = '';
        }, 300);
    }
    
    const handleDeleteData = (id: number) => {

        for(let [i, v] of ToDoList.entries()) {
            if(v.id === id) {
                ToDoList.splice(i, 1);
            }
        }
        
        setUpdatedToDoList([...updatedToDoList]);
        
        setFilteredToDo(updatedToDoList);
        
        setTimeout(() => {            
            setSearch('');
        }, 500)
        
    }

    // get data from DB
    // const baseUrl = 'http://localhost:3300/todos/';
    // fetch(baseUrl).then(res => res.json()).then(data => console.log(data));

    
    return (
        
            <Fragment>
                <div className='todo-number'>
                    <h3>You have currently <b style={{color: 'black'}}>{ToDoList.length}</b> To-Do list</h3>
                </div>
                <div className='table-container'>
                    <Table striped bordered hover variant="dark" size='sm'>
                        <thead>
                            {
                                filteredToDo.length !== 0 
                                ?
                                    <tr>
                                        <th style={{width: '75px'}} className='title-font'>#</th>
                                        <th style={{width: '120px'}} className='title-font'>Task id</th>
                                        <th className='title-font'>To Do Lists</th>
                                        <th style={{width: '120px'}} className='title-font'>Progress</th>
                                        <th style={{width: '250px'}} className='title-font'>Update</th>
                                    </tr>
                                :  
                                    false
                            }
                        </thead>
                        <tbody>
                            {
                                filteredToDo
                                .map((el:any, index: number) => {
                                    const num = index + 1;
                                    return (
                                        <Fragment>
                                            <tr key={el.id}>
                                                <td className='center'>{num}</td>
                                                <td className='center'>{el.id}</td>
                                                <td>
                                                    <EditToDoButton title={el.task} ToDoList={ToDoList} item={el} setFilteredToDo={setFilteredToDo} setSearch={setSearch}/>
                                                </td>
                                                <td className='center' style={{color: el.status === 'not completed' ? 'red' : 'green'}}>{el.status}</td>
                                                <td>
                                                    <div className='space-evenly'>
                                                        <EditButton handleEditData={(event: any) => handleEditData(event, el.id)}/>
                                                        <DeleteButton handleDeleteData={() => handleDeleteData(el.id)}/>
                                                    </div>
                                                </td>
                                            </tr>
                                        </Fragment>
                                    )    
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </Fragment>
        
    )

};

export default ToDoComponent;