import React, { useRef, useState } from 'react'
import axios from 'axios'



export default function List({listDate,listText,listIsCompleted}) {
    const [complete,setComplete] = useState(listIsCompleted);
    const [edit,setEdit] = useState("false");
    const listEditText = useRef();
    const deleteList = async(event)=>{
        event.preventDefault()
        console.log(listText)
        
        await axios.post('/list/delete',{
            text : listText,
            date : listDate
        })
    }

    const completeList = async(event)=>{
        event.preventDefault()
        setComplete("true")
        await axios.post('/list/complete',{
            text : listText,
            date : listDate
        })
    }
    const updateList = async(event)=>{
        event.preventDefault()
        setEdit("false")
        await axios.put('/list/update',{
            oldText : listText,
            newText : listEditText.current.value,
            date : listDate
        })
    }
    const setEditable = ()=>{
        setEdit("true")
    }


    return  (
         <div className='w-2/4 rounded-2xl p-4 bg-slate-800 text-white m-auto mt-4 border-solid border-slate-300 border-4'>
            <div className='flex w-full gap-4 mb-6'>
                <i className={`fa-solid fa-list pt-1 ${complete=="true" ? "text-green-400" : "text-orange-600" }`}></i>
                <div className='flex justify-between w-full'>
                    <input ref={listEditText} type="text" disabled = {edit==="true" ? false : true} placeholder={listText} className={` focus:outline-none bg-inherit w-3/4 text-white placeholder:text-white ${edit=="true" ? "border-b-2 cursor-text" :""  } `} />
                    <p>{listDate}</p>
                </div>
            </div>
            <div className='flex justify-end gap-3'>
            { complete == "false" ?  <i className="fa-solid fa-check hover:text-green-500 cursor-pointer text-blue-200" onClick={completeList}></i> : ""}
               { complete == "false" ? edit=="true" ? <i className="fa-solid fa-floppy-disk hover:text-yellow-300 cursor-pointer text-blue-200" onClick={updateList}></i> : <i onClick={setEditable} className="fa-solid fa-pen-to-square hover:text-yellow-300 cursor-pointer text-blue-200"></i> : "" }
                <i className="fa-solid fa-trash hover:text-red-500 cursor-pointer text-blue-200" onClick={deleteList}></i>
            </div>

        </div>
    )
}
