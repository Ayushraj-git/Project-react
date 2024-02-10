import Tasks from "./Tasks.jsx";

export default function SelectedProject({project, onDelete, onAddTask, onDeleteTask, tasks}){

    if (!project) {
        return <div>No project selected</div>;
      }
    
    const projectTasks = tasks.filter(task => task.projectId === project.id);
    
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    return(
        <div className="w-full mt-16 px-20">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                    <button className="bg-red-500 px-6 py-2 text-white rounded-xl hover:bg-red-700 transition duration-300" onClick={onDelete}>Delete</button>
                </div>
                <p className="mb-4 text-stone-400">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </header>
            <Tasks onAdd={onAddTask} onDelete= {onDeleteTask} tasks={projectTasks}/>
        </div>
    )
}