import React, { useRef } from 'react'
import axios from 'axios'


export default function Input() {
    const Task = useRef();
    const addList = async(event)=>{
        event.preventDefault();
        if(Task.current.value)
        await axios.post("/list/add",{
            "text" : Task.current.value
        })
        
    }
    

    return (
        <div className='px-5 w-2/4 text-slate-800 m-auto my-10'>
            <form action="" className='w-full flex flex-nowrap'>
                <input ref={Task} type="text" className='focus:outline-none border-b-2 border-slate-800 w-10/12 mr-4' />
                <button onClick={addList} className='whitespace-nowrap border-2 px-2 py-1 border-slate-800 hover:bg-slate-800 hover:text-white'>
                    <i className="fa-solid fa-plus mr-2 text-green-500"></i>
                    <span>Add Task</span>
                </button>
            </form>

        </div>
    )
}
