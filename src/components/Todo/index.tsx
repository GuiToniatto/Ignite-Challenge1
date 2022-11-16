import { useState } from "react";
import { HiOutlineTrash } from 'react-icons/hi';

import { ITodo } from "../../interfaces/ITodo";


import styles from './Todo.module.css';

export function Todo({ id, description, concluded, onDeleteFunction, onConcludedFunction }: ITodo) {
    const [checkboxValue, setCheckboxValue] = useState(0);

    function deleteTodo() {
        onDeleteFunction(id)
    }

    function handleConcludedTodo() {
        const type = checkboxValue == 0 ? 1 : 0;
        setCheckboxValue(type)

        onConcludedFunction(id, type)
    }

    return (
        <div className={ styles.wrapper }>
            <div className={ styles.container }>
                <input type="checkbox" onChange={ handleConcludedTodo } value={ checkboxValue }/>
                <span className={ styles.checkboxSpan }></span>
            </div>
            <span className={ concluded ? styles.contentChecked : styles.content }>
                { description }
            </span>
            <a className={ styles.trash } onClick={ deleteTodo }>
                <HiOutlineTrash />
            </a>
        </div>
    )
}