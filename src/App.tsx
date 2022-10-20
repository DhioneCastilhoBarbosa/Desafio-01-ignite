import { useState } from 'react'
import styles from './App.module.css'
import './global.css';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { TaskList } from './components/TaskList';

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.wrapper}>
      <Header/>
      <NewTask/>
      <TaskList/>
    </div>



  )
}


