import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";
import night from "../public/night.jpg";
import { ArrowLeftStartOnRectangleIcon,ClipboardDocumentListIcon } from '@heroicons/react/24/solid'

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
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
        <p className='text-stone-600 mb-4'>Oops!... Looks like you forgot to enter your task. </p>
        <p className='text-stone-600 mb-4'>Please make sure to provide valid input.</p>
      </Modal>
      <div className={'w-full min-h-screen flex items-center justify-center bg-gradient-elegant-day p-2 rounded-md'}>
        <div className="w-full max-w-md bg-gradient-custom-purple mt-4 p-6 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray active:bg-gray-600 transition-all duration-500 ease-in-out transform hover:scale-110" onClick={onCancel}>
              <ClipboardDocumentListIcon className="h-8 w-8"/>
              Cancel
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-green active:bg-green-800 transition-all duration-500 ease-in-out transform hover:scale-110 " onClick={handleSave}>
              <ArrowLeftStartOnRectangleIcon className="h-8 w-8"/>
              Save 
            </button>
          </div>
          <div>
            <Input type="text" ref={title} label="Title" />
            <Input ref={description} label="Description" textarea={true} />
            <Input type="date" ref={dueDate} label="Due Date" />
          </div>
        </div>
      </div>
    </>
  );
}
