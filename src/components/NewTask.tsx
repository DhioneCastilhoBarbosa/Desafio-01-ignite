
import {PlusCircle} from 'phosphor-react';
import {v4 as uuidv4} from 'uuid';
import styles from './NewTask.module.css';

export interface NewTask{
  content:string;
  id:string;
  itsDone: boolean;
}




export function NewTask(){
  return(
    <form className={styles.newTaskForm}>
      <input className={styles.newTaskInput} type="text"  placeholder="Adicione uma nova tarefa"/>
      <button className={styles.newTaskButton} type="submit">
        Criar
        <PlusCircle/>
      </button>
    </form>
    
  )
}