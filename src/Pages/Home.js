import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='h-screen flex-col flex items-center justify-center'>
            <h2 className='text-3xl'>To-Do APP!</h2>
            <div className='mt-10 '>
                <Link to='/todo'><button style={{ backgroundColor: '#64B9B4' }} type="submit" className="text-white mr-5 font-bold rounded-lg text-xl px-5 py-5 text-center">See All Task</button></Link>
                <Link to='/addTodo'><button style={{ backgroundColor: '#64B9B4' }} type="submit" className="text-white font-bold rounded-lg text-xl px-5 py-5 text-center">Add New Task</button></Link>
            </div>
        </div>
    );
};

export default Home;