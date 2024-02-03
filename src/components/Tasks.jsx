import NewTask from "./NewTask.jsx";

export default function Tasks({tasks, onAdd, onDelete}){
    return(
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTask onAdd={onAdd}/>
            {tasks.length === 0 && (
            <p className="text-stone-800 my-4">
                This project does not have any task yet.
            </p>
            )}
            {tasks.length > 0 && 
            <div className=" mt-8  ">
               {tasks.map((task) => (
                <div key={task.id} className="p-4 flex bg-stone-200 justify-between my-4 rounded-xl">
                  <span>{task.text}</span>
                  <button className="text-stone-700 hover:text-red-500" onClick={() => onDelete(task.id)}>Clear</button>
                </div>))}
            </div>
            }
        </section>
    )
}