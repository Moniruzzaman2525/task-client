import React from 'react';
import { toast } from 'react-toastify';
import useSerivce from '../Hooks/useService';
import Task from './Task';

const AllTodo = () => {
    const [tasks, setTasks] = useSerivce();

    const handleUserDelate = id => {
        console.log('object', id);
        const proceed = window.confirm("Are You Sure Want To Delate!!")
        if (proceed) {

            const url = `http://localhost:5000/delete/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log('hello', data))
            // const updateService = tasks.filter(service => service._id !== id);
            // setTasks(updateService);
            toast.success('Task Delete')
        }
    }



    return (
        <div>
            <h2 className='text-3xl my-5'>All Todo: {tasks.length}</h2>
            <div class="grid grid-cols-1 md:grid-cols-2">
                {
                    tasks.map(task => <Task handleUserDelate={handleUserDelate} task={task} key={task._id}></Task>)
                }
            </div>
        </div>
    );
};

export default AllTodo;