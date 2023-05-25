// export const TaskComponent = ({ todolists, tasks, removeTask, changeFilter, addTask, changeStatus, removeTodolist, changeTaskTitle, changeTodolistTitle }: TaskComponentPropsType) => {
import { Checkbox, IconButton } from "@material-ui/core"
import { EditableSpan } from "./EditableSpan"
import React, { ChangeEvent } from "react"
import { Delete } from "@material-ui/icons"
import { TaskType } from "./Todolist"

type TaskComponentPropsType = {
    task: TaskType
    onChangeHandler: (id: string, newIsDone: boolean) => void
    onTitleChangeHandler: (id: string, newValue: string) => void
    onClickHandler: (id: string) => void
}

export const TaskComponent = ({ task, onChangeHandler, onTitleChangeHandler, onClickHandler }: TaskComponentPropsType) => {

    const onTitleChange = (newValue: string) => onTitleChangeHandler(task.id, newValue)
    const onCheckedChange = (e: ChangeEvent<HTMLInputElement>) => onChangeHandler(task.id, e.currentTarget.checked)

    return <div key={task.id} className={task.isDone ? "is-done" : ""}>
        <Checkbox
            checked={task.isDone}
            color="primary"
            onChange={onCheckedChange}
        />
        <EditableSpan value={task.title} onChange={onTitleChange} />
        <IconButton onClick={() => onClickHandler(task.id)}>
            <Delete />
        </IconButton>
    </div>
}