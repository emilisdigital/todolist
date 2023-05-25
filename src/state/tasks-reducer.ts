import { v1 } from 'uuid';
import { TasksStateType } from '../App/App';

export type removeTaskActionType = ReturnType<typeof removeTaskAC>
export type addTaskActionType = ReturnType<typeof addTaskAC>
export type changeTaskStatusActionType = ReturnType<typeof changeTaskStatusAC>
export type changeTaskTitleActionType = ReturnType<typeof changeTaskTitleAC>
export type AddTodolistActionType = ReturnType<typeof AddTaskForTodolistAC>
export type RemoveTodolistACType = ReturnType<typeof RemoveTodolistAC>


type ActionsType = removeTaskActionType | addTaskActionType | changeTaskStatusActionType | changeTaskTitleActionType | AddTodolistActionType
    | RemoveTodolistACType

const initialState: TasksStateType = {}

export const tasksReducer = (state: TasksStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'REMOVE-TASK':
            return { ...state, [action.todolistId]: state[action.todolistId].filter(task => task.id !== action.taskId) }
        case 'ADD-TASK':
            return { ...state, [action.todolistId]: [...state[action.todolistId], { id: v1(), title: action.title, isDone: false }] }
        case 'CHANGE-TASK-STATUS':
            return { ...state, [action.todolistId]: state[action.todolistId].map(task => task.id === action.taskId ? { ...task, isDone: !task.isDone } : task) }
        case 'CHANGE-TASK-TITLE':
            return { ...state, [action.todolistId]: state[action.todolistId].map(task => task.id === action.taskId ? { ...task, title: action.title } : task) }
        case 'ADD-TODOLIST':
            // const newTodolistId = v1()
            return { ...state, [action.id]: [] }
        case 'REMOVE-TODOLIST':
             let copyState = { ...state }
             delete copyState[action.id]
            return copyState
        default:
            return state
    }
}

export const removeTaskAC = (taskId: string, todolistId: string) => {
    return { type: 'REMOVE-TASK', taskId, todolistId } as const
}

export const addTaskAC = (title: string, todolistId: string) => {
    return { type: 'ADD-TASK', title, todolistId } as const
}

export const changeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string) => {
    return { type: 'CHANGE-TASK-STATUS', taskId, isDone, todolistId } as const
}

export const changeTaskTitleAC = (taskId: string, title: string, todolistId: string) => {
    return { type: 'CHANGE-TASK-TITLE', taskId, title, todolistId } as const
}

export const AddTaskForTodolistAC = (title: string, id: string) => {
    return { type: 'ADD-TODOLIST', title, id } as const
}

export const RemoveTodolistAC = (id: string) => {
    return { type: 'REMOVE-TODOLIST', id } as const
}


