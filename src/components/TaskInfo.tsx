
import styles from './TaskInfo.module.css'
export function TaskInfo(){
  return(
    <div className={styles.TaskInfoContainer}>
      
      <div className={styles.TaskInfoCreated}>
        <text>Tarefas criadas</text>
        <span>0</span>
      </div>
      <div className={styles.TaskInfoDone}>
        <text>Concluidas</text>
        <span>0</span>
      </div>
    </div>
  )
}