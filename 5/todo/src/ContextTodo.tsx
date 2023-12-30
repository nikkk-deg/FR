import { createContext, useContext, useReducer, FC  } from 'react';


const ToDoContext = createContext<any | null>(null);

const ToDoDispatchContext = createContext<any | null>(null);

interface FilterProviderProps {
  children: React.ReactNode;
}

export interface InitialTask {
    id: number;
    text: string;
    done: boolean;
}


const initialTasks: InitialTask[] = [
    { id: 0, text: 'Philosopher’s Path', done: true },
  ];

export const TodoProvider : FC<FilterProviderProps> = ({children}) => {
    const [tasks, dispatch] = useReducer(
        toDoReducer, 
        initialTasks
    );
    return(
        <ToDoContext.Provider value={tasks}>
            <ToDoDispatchContext.Provider value={dispatch}>
                {children}
            </ToDoDispatchContext.Provider>
        </ToDoContext.Provider>
    );
}



export const useToDo = () => {
    return useContext(ToDoContext);
}

export const useToDoDispatch = () => {
    return useContext(ToDoDispatchContext);
}



export function toDoReducer(tasks: any , action: any){
    switch (action.type){
        case 'add':{
            return [...tasks, {
                id: action.id,
                text: action.taskName,
                done: false,
            }]
        }
        case 'delete': {
            return tasks.filter((t : InitialTask) => t.id !== action.id);
        }
        case 'change':{
            return tasks.map((item: InitialTask) => {
                if(item.id === action.task.id){
                    return action.task
                }
                else{
                    return item;
                }
            })
        }
        case 'check':{
            return tasks.map((item: InitialTask) => {
                if(item.id === action.task.id){
                    return action.task
                }
                else{
                    return item;
                }
            })
        }
        default :{
            throw new Error('Unknow action: ' + action.type);
        }
    }
}


