import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";
import "./newProject.css"
import night from "../public/night.jpg"

export default function NewProject({onAdd,onCancel}) {
    const modal = useRef();



    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === ''){
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate

        });
    }


    return (
        <>
        <Modal ref={modal} buttonCaption="Close">
            <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
            <p className='text-stone-600 mb-4'>Oops!...... Looks like you forgot to enter your task. </p>
            <p className='text-stone-600 mb-4'>Please make sure to provide a valid input</p>
        </Modal>
        <div className= {`z-20 w-full h-full flex items-start justify-center `}>
            <div className="w-[400px] bg-stone-400 mt-20 p-10 rounded-xl">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li><button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button></li>
                    <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>Save</button></li>
                </menu>
                <div>
                    <Input type="text" ref={title} label="Title" />
                    <Input ref={description} label="Description" textarea={true} />
                    <Input type="date" ref={dueDate}  label="Due Date" />
                </div>
            </div>
        </div>
        </>
    )
}