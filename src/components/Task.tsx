import { Check, Trash } from "phosphor-react";
import styles from "./Task.module.css"

export interface TaskProps{
  content: string,
  taskId: string,
  isDone:boolean,
  onSelect:(taskId:string)=>void;
  onDelete:(taskId:string)=>void;
}

export function Task({ content,taskId,isDone,onDelete,onSelect}:TaskProps) {

  function handleDeleteTask() {
    onDelete(taskId);
  }

  function handleSelectTask() {
    onSelect(taskId);
  }

  return (
    <div className={styles.TaskContainer}>
      <button 
      className={ isDone ? styles.check : styles.notCheck} 
      onClick={handleSelectTask}
      >
        {isDone ? <Check size={24}></Check> : null}
      </button>
      <p>Teste de task adicionada</p>
      <button>
        <Trash size={24} />
      </button>

    </div>
  )
}

