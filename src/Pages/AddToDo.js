import React from 'react';
import { toast } from 'react-toastify';

const AddToDo = () => {
    const handleAddTask = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;

        const task = { name, description };
        console.log(task);

        fetch('http://localhost:5000/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                e.target.reset();
                toast.success('Add Task Successfully')
            })
    }
    return (
        <div className='mx-auto w-1/2 mt-10'>
            <form className='' onSubmit={handleAddTask}>
                <input type="text" name='name' placeholder="Task Name" class="input mb-5 block w-full input-bordered " />
                <textarea type="text" name='description' placeholder="Task Description" class="textarea mb-5 w-full block input-bordered  " />
                <button style={{ backgroundColor: '#64B9B4' }} type="submit" className="text-white font-bold rounded-lg text-xl px-5 py-5 text-center">Add New Item</button>
            </form>
        </div>
    );
};

export default AddToDo;