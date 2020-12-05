import React from 'react'
import {todoListState} from '../state/AllState'
import {useRecoilValue} from 'recoil'
import {TodoItemCreator} from './TodoItemCreator'
import {TodoItem } from './TodoItem'
import {TodoListStats} from './TodoListStats'
import {TodoListFilters} from './TodoListFilters'
export const TodoList = ()=>{
    const todoList = useRecoilValue(todoListState);
    return (
      <>
        <TodoListStats /> 
        <TodoListFilters /> 
        <TodoItemCreator />
    
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
      </>
    );     
}
