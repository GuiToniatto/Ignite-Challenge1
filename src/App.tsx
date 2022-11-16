import { Header } from './components/Header'

import styles from './App.module.css';
import './global.css';
import { CreateTodoArea } from './components/CreateTodoArea';
import { Table } from './components/Table';

function App() {
  return (
    <div className="App">
      <Header />
      <div className={ styles.wrapper }>
        <Table />
      </div>
    </div>
  )
}

export default App
