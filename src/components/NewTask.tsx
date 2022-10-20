
import {PlusCircle} from 'phosphor-react';
import styles from './NewTask.module.css';
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