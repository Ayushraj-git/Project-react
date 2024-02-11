import Button from "./Button.jsx";
export default function ProjectsSidebar({onStartAddProject, projects, onSelectProject, selectedProjectId}){
    return (
        <aside className="w-full md:w-1/3 px-4 md:px-8 py-8 md:py-16 bg-stone-900 text-stone-50">
          <h2 className="mb-6 uppercase md:text-3xl text-stone-200 select-none font-lilitaOne">Your Projects</h2>
          <div className="mb-6">
            <Button onClick={onStartAddProject}>+ Add Project</Button>
          </div>
          <ul>
            {projects.map((project) => {
              const buttonClasses = `w-full text-left px-4 py-2 rounded-lg my-1 focus:outline-none transition-colors duration-300 ${
                project.id === selectedProjectId ? "bg-stone-800 text-white" : "bg-stone-800 hover:bg-stone-800 text-stone-400"
              }`;
    
              return (
                <li key={project.id}>
                  <button className={buttonClasses} onClick={() => onSelectProject(project.id)}>
                    {project.title}
                  </button>
                </li>
              );
            })}
                
            
                
            
        </ul>
    </aside>
    );
}