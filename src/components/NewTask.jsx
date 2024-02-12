import { useState } from "react"

export default function NewTask({onAdd}){
    const [enteredTask, setEnteredTask] =useState('');

    function handleChange(event) {
        setEnteredTask(event.target.value);

    }

    function handleClick(){
        if (enteredTask.trim() === ''){
            return;
        }
        onAdd(enteredTask);
        setEnteredTask('');
    }


    return(
        <div className="flex items-center gap-4">
            <input autoFocus type="text" className="w-64 py-2  rounded-lg text-center bg-stone-200" onChange={handleChange} value={enteredTask}/>
            <button className="w-8 h-8 bg-green-400 pb-1 rounded-full text-white text-xl hover:bg-green-500 transition-all duration-500 ease-in-out transform hover:scale-110" onClick={handleClick}>+</button>
        </div>
    )
}