import styles from './Empty.module.css';
import imgList from '../assets/Clipboard.svg'

export function Empty(){
  return(
    <div className={styles.EmptyContainer}>
    <img src={imgList} alt="" />
    <p>Você ainda não tem tarefas cadastradas</p>
    <span>Crie tarefas e organize seus itens a fazer</span>
    </div>

  )
}