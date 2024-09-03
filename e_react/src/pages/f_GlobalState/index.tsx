import React, { Component } from 'react'
import Context from './Context'
import Zustand01 from './Zustand01'

export default function index() {
  return (
    <div>
      <h1>리액트 전역 상태관리 (Context API / Zustand)</h1>
      <Context/>
      
      <hr />
      <Zustand01/>
      
    </div>
  )
}

