import Button from "./Button.jsx";
import HomeButton from "./HomeButton.jsx";
export default function ProjectsSidebar({onStartAddProject, projects, onSelectProject, selectedProjectId}){
    return (
        <aside className="w-full md:w-1/3 px-4 md:px-8 py-8 md:py-16 bg-gradient-midnight-blue ">
            <HomeButton/>
          <h2 className="mb-6 uppercase md:text-5xl text-stone-200 select-none font-lilitaOne">Your Projects</h2>
          <div className="mb-6">
            <Button className="px-4 py-2 text-xs md:text-base rounded-md bg-gradient-mid-red text-stone-200  transition-all duration-500 ease-in-out transform hover:scale-110" onClick={onStartAddProject}>+ Add Project</Button>
          </div>
          <ul>
            {projects.map((project) => {
              const buttonClasses = `w-full text-left px-4 py-2 rounded-lg my-1 focus:outline-none transition-all delay-150 ease-in-out transform hover:scale-110 bg-gradient-marine-blue text-stone-100 ${project.id === selectedProjectId ? "bg-gradient-mid-red scale-105 text-white" : "bg-gradient-marine-blue "}`;

    
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