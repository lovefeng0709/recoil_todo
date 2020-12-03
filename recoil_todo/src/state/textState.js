/*
 * @Descripttion: 
 * @version: v-1
 * @Author: love-coding
 * @Date: 2020-12-03 21:50:16
 * @LastEditors: love-coding
 * @LastEditTime: 2020-12-03 21:51:51
 */
import { atom } from 'recoil';
export const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });