import React from 'react';
import { toast } from 'react-toastify';

const Task = ({ task, handleUserDelate }) => {
    const { name, description, _id, selected } = task;

    const handleComplete = id => {
        const newSelected = !selected
        const newSelectedObj = { newSelected };
        fetch(`http://localhost:5000/update/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newSelectedObj)
        })
            .then(res => res.json())
            .then(data => {

                toast.success('Item Restok successfully')
            })
    }

    return (
        <div class="card w-96 mt-10 bg-neutral mx-auto text-white">
            <div class="card-body items-center text-center">
                <h1 className={selected ? "line-through card-title" : ""}>{name}</h1>

                <p>{description}</p>
                <div class="card-actions justify-end">
                    <button style={{ backgroundColor: '#64B9B4' }} onClick={() => handleComplete(_id)} class="btn text-white">complete</button>
                    <button style={{ backgroundColor: '#64B9B4' }} onClick={() => handleUserDelate(_id)} class="btn text-white">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Task;