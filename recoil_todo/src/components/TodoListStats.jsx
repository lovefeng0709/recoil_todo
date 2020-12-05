import React from 'react'
import {todoListStatsState} from '../state/AllState'
import {useRecoilValue} from 'recoil'
export const  TodoListStats=()=> {
    const {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    } = useRecoilValue(todoListStatsState);
  
    const formattedPercentCompleted = Math.round(percentCompleted * 100);
  
    return (
      <ul>
        <li>总数: {totalNum}</li>
        <li>已完成: {totalCompletedNum}</li>
        <li>未完成: {totalUncompletedNum}</li>
        <li>完成比例: {formattedPercentCompleted}%</li>
      </ul>
    );
  }