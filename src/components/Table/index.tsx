import { useState } from 'react';
import { v4 } from 'uuid';

import clipboardImg from '../../assets/clipboard.svg';
import { ITodo } from '../../interfaces/ITodo';
import { CreateTodoArea } from '../CreateTodoArea';
import { Todo } from '../Todo';

import styles from './Table.module.css';

export function Table() {
    const [todo, setTodo] = useState(Array<ITodo>);
    const [concludedTodo, setConcludedTodo] = useState(0);

    function deleteTodo(todoId: string) {
        const getTodoById = todo.find((td) => td.id === todoId);
        const todoWithoutReferedId = todo.filter((td) => td.id !== todoId)

        if (getTodoById?.concluded) {
            let newConcludedValue = concludedTodo - 1
    
            setConcludedTodo(newConcludedValue)
        }

        setTodo(todoWithoutReferedId)
    }

    function concludeTodo(todoId: string, type: number) {
        setTodo(todo => {
            const newTodoList = todo.map((td) => {
                if (td.id === todoId) {
                    return {...td, concluded: type === 1 ? true: false};
                }
                return td;
            })

            return newTodoList
        })

        let newConcludedValue = concludedTodo
        if (type === 1) {
            newConcludedValue += 1;
        }
        else {
            newConcludedValue -= 1;
        }

        setConcludedTodo(newConcludedValue)
    }

    function handleCreateTodo(description: string) {
        const newTodo: ITodo = {
            id: v4(),
            description: description,
            concluded: false,
            onDeleteFunction: deleteTodo,
            onConcludedFunction: concludeTodo,
        }

        setTodo([...todo, newTodo])
    }

    return (
        <div>
            <CreateTodoArea createFunction={ handleCreateTodo } />
            <div className={ styles.wrapper }>
                <header className={ styles.header }>
                    <p className={ styles.createdTodo }>
                        Tarefas criadas <span className={ styles.count }>{ todo.length }</span>
                    </p>
                    <p className={ styles.concludedTodo }>
                        Concluídas <span className={ styles.count }>
                            { 
                                concludedTodo > 0 
                                ? concludedTodo + ' de ' + todo.length
                                : 0
                            }
                        </span>
                    </p>
                </header>

                <div className={ styles.content }>
                    {
                        todo.length > 0 
                        ? todo.map((td) => 
                            <Todo 
                                key={ td.id } 
                                description={ td.description } 
                                id={ td.id } 
                                concluded={ td.concluded }
                                onDeleteFunction={ deleteTodo } 
                                onConcludedFunction= { concludeTodo } 
                            />
                        ) 
                        : <div className={ styles.emptyList }>
                            <img src={ clipboardImg } />
                            <h5 className={ styles.emptyDescription }>
                                Você ainda não tem tarefas cadastradas<br />
                                <span className={ styles.emptySubtile }>Crie tarefas e organize seus itens a fazer</span>
                            </h5>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}