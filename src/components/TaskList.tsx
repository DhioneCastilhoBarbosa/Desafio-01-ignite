import { Empty } from './Empty';
import { Task } from './Task';
import { TaskInfo } from './TaskInfo';
import styles from './TaskList.module.css';
export function TaskList(){
  return(
    <div className={styles.TasksListContainer}>
      <TaskInfo/>
      <Task/>
      
    </div>
  )
}