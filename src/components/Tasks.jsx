import NewTask from "./NewTask.jsx";
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export default function Tasks({tasks, onAdd, onDelete}){
    return (
        <section className="p-4 md:p-8">
          <h2 className="text-2xl font-bold font-notoSans text-stone-700 mb-6">Tasks</h2>
          <NewTask onAdd={onAdd} />
          {tasks.length === 0 && (
            <p className="text-stone-800 my-4">
              This project does not have any tasks yet.
            </p>
          )}
          {tasks.length > 0 && (
            <div className="mt-6 space-y-4">
              {tasks.map((task) => (
                <div key={task.id} className="p-4 bg-gradient-elegant-day1 flex justify-between items-center rounded-xl">
                  <span className="text-stone-800 ">{task.text}</span>
                  <CheckCircleIcon
                    className="text-stone-700 hover:text-red-500 focus:outline-none h-8 w-8 transition-all duration-500 ease-in-out transform hover:scale-110"
                    onClick={() => onDelete(task.id)}
                  />
                </div>
          ))}
        </div>
      )}
    </section>
  );
}