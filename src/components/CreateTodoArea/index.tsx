import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import plusIcon from '../../assets/plus.svg';
import { ICreateTodo } from '../../interfaces/ICreateTodo';
import styles from './CreateTodoArea.module.css';

export function CreateTodoArea({ createFunction }: ICreateTodo) {
  const [ inputValue, setInputvalue ] = useState('');

  function handleTitleChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setInputvalue(event.target?.value)
  }

  function createTodoForm(event: FormEvent) {
    event.preventDefault()

    createFunction(inputValue)

    setInputvalue('');
  }

  function hanldeInvalidValue(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  return (
    <form className={ styles.content } onSubmit={ createTodoForm }>
      <input 
        type="text" 
        placeholder='Adicione uma nova tarefa' 
        value={ inputValue }
        onChange={ handleTitleChange }
        onInvalid={ hanldeInvalidValue }
        required
      />
      <button>
        Criar
        <img src={ plusIcon } />
      </button>
    </form>
  )
}
