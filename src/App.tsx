import { useState } from 'react'
import './App.css'
import { Userslist } from './components/UserList'
import { User } from './components/User'

function App() {

  return (
    <>
        <Userslist />
        <User id={3} />
    </>
  )
}

export default App
