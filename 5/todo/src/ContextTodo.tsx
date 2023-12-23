import { createContext, useContext, useReducer, FC  } from 'react';

const ToDoContext = createContext<any | null>(null);

const ToDoDispatchContext = createContext<any | null>(null);

interface FilterProviderProps {
  children: React.ReactNode;
}

const initialTasks = [
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
            return{

            }
        }
        case 'change':{
            return{

            }
        }
        case 'check':{
            return{

            }
        }
        default :{
            throw new Error('Unknow action: ' + action.type);
        }
    }
}


