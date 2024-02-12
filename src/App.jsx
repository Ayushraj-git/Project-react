import { useEffect, useState } from "react";

import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  // const [projectsState, setProjectsState] = useState({
  //   selectedProjectId: undefined,
  //   projects: [] ,
  //   tasks: []
  // });
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: JSON.parse(localStorage.getItem('projects')) || [],
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
  });

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    setProjectsState({
      selectedProjectId: undefined,
      projects: storedProjects,
      tasks: storedTasks,
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projectsState.projects));
    localStorage.setItem('tasks', JSON.stringify(projectsState.tasks));
  }, [projectsState.projects, projectsState.tasks]);

  function handleAddTask(text) {
    setProjectsState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [newTask,...prevState.tasks]
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter( (task) => task.id !== id,)
      }
    });
  }


  
  function handleSelectProject(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    });
  }
  

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    });
  }

  function handleCancelAddProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    });

  }

  function handleAddProject(projectData){
    setProjectsState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      };

      return {
        ...prevState,
        selectedProjectId:undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  function handleDeleteProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter( (project) => project.id !== prevState.selectedProjectId),
      }
    });
  }


  //to find element in an array by id
  //find id inbuilt feature of js that takes in a function that runs for every element and returns true when it finds the given element
  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)

  let content;

switch (projectsState.selectedProjectId) {
  case null:
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
    break;
  case undefined:
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
    break;
  default:
    content = (
      <SelectedProject
        project={selectedProject}
        onDelete={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasks={projectsState.tasks}
      />
    );
}



  return (
    <main className="min-h-screen flex flex-col bg-gradient-elegant-day sm:flex-row">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      <div className="flex-grow p-4 m-0 sm:p-8">
        {content}
      </div>
    </main>
  );
}

export default App;
