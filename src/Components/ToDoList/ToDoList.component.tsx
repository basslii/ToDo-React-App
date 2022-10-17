import React, { Fragment, useEffect, useState } from 'react';
import Table from 'react-bootstrap/esm/Table';
import DeleteButton from '../DeleteButton/DeleteButton';
import EditButton from '../EditButton/EditButton';
import EditToDoButton from '../EditToDoButton/EditToDoButton';
import './ToDoList.css'

const ToDolist = (props:any) => {
    const { ToDoList, setToDoList, filteredToDo, setFilteredToDo, setSearch} = props;
    
    const [ updatedToDoList, setUpdatedToDoList ] = useState(ToDoList);

    useEffect(() => {
        setTimeout( async () => {
            setUpdatedToDoList(ToDoList);
        }, 500);
    });

    useEffect(() => {
        setFilteredToDo(ToDoList);
    },[ToDoList]);

    const handleEditData = async (event: any, id: number) => {
        
        const value = event.target.value;

        if(value === '1') {
            ToDoList.filter((item: any) => {
                return item.id === id;
            }).map((item: any) => {
                item.completed = 'completed';
                return item;
            })

            setUpdatedToDoList([...ToDoList]);
        }

        if(value === '2') {
            ToDoList.filter((item: any) => {
                return item.id === id;
            }).map((item: any) => {
                item.completed = 'not completed';
                return item;
            })

            setUpdatedToDoList([...ToDoList]);
        }

        //? set the dropdown value to default value
        setTimeout(() => {
            event.target.value = '';
        }, 300);
    }
    
    const handleDeleteData = async (id: number, index: number) => {
        // console.log('target index: ', index)
        // console.log('target id: ', id)

        //? custom function that can delete data from initial table and searched data
        for(let [i, v] of ToDoList.entries()) {
            if(v.id === id) {
                setTimeout(async () => {
                    // console.log(`${i}: `, v);  
                    //? splice method to return the remove the selected or searched data
                    await ToDoList.splice(i, 1);
                }, 500);
    
            }
        }
        
        // Example to show as a failed function
        // function to delete object from the array
        // ! Does not work on searched data 
        // ToDoList.filter(async (item: any) => {
        //     if(item.id === id) {
        //         console.log('filter item id: ', item.id);
        //         return ToDoList.splice(index, 1)
        //     }
        // })

        //to store the remaining data after deleting 
        setUpdatedToDoList([...updatedToDoList]);
        
        setFilteredToDo(updatedToDoList);

        setTimeout(() => {
            // transferring the update to the filtered to be displayed in the UI

            // reset the search input text after delete
            setSearch('');
        }, 500)
        
    }
    
    // render the UI of the ToDoList table
    return (
        <React.StrictMode>
            <Fragment>
                <div className='table-container'>
                    <Table striped bordered hover variant="dark" size='sm'>
                        <thead>
                            <tr>
                                <th style={{width: '75px'}} className='title-font'>#</th>
                                <th style={{width: '100px'}} className='title-font'>Task id</th>
                                <th className='title-font'>To Do Lists</th>
                                <th style={{width: '150px'}} className='title-font'>Progress</th>
                                <th style={{width: '250px'}} className='title-font'>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredToDo
                                .map((el:any, index: number) => {
                                    const num = index + 1;
                                    return (
                                        <Fragment>
                                            <tr key={num}>
                                                <td className='center'>{num}</td>
                                                <td className='center'>{el.id}</td>
                                                <td>
                                                    <EditToDoButton title={el.title} ToDoList={ToDoList} item={el} setFilteredToDo={setFilteredToDo} setSearch={setSearch} setToDoList={setToDoList}/>
                                                </td>
                                                {/* <td>{el.title}</td> */}
                                                <td className='center' style={{color: el.completed === 'not completed' ? 'red' : 'green'}}>{el.completed}</td>
                                                <td>
                                                    <div className='space-evenly'>
                                                        <EditButton handleEditData={(event: any) => handleEditData(event, el.id)}/>
                                                        <DeleteButton handleDeleteData={() => handleDeleteData(el.id, index)}/>
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
        </React.StrictMode>
    )

};

export default ToDolist;