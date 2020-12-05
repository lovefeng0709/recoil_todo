import React from 'react'
import {todoListFilterState} from '../state/AllState'
import {useRecoilState} from 'recoil'
export const TodoListFilters= ()=> {
    const [filter, setFilter] = useRecoilState(todoListFilterState);
  
    const updateFilter = ({target: {value}}) => {
      setFilter(value);
    };
  
    return (
      <>
        筛选:
        <select value={filter} onChange={updateFilter}>
          <option value="Show All">所有</option>
          <option value="Show Completed">已完成</option>
          <option value="Show Uncompleted">未完成</option>
        </select>
      </>
    );
  }