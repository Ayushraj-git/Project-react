import noProjectImage from '../assets/project-management.png';
import Button from './Button.jsx';
export default function NoProjectSelected({onStartAddProject}){
    return(
        <div className="mt-24 text-center w-full flex items-start justify-center ">
            <div className="flex flex-col">
            <img src={noProjectImage} alt="An empty task list" className="w-40 h-40 object-contain mx-auto"/>
            <h2 className="text-3xl font-playPenSans font-bold text-stone-600 my-4">No Project Selected</h2>
            <p className='text-stone-500 mb-4 font-mPlus font-medium'>Select a Project or Get started with a new one</p>
            <p className='mt-4'>
                <Button onClick={onStartAddProject}>Create new Project</Button>
            </p>
            </div>
        </div>
    );

}
