import { Outlet } from "react-router-dom"
import React, { useContext } from 'react'
import Header from "./components/Header.jsx"
import { FavProvider } from "./contexts/FavContext"

const App = () => {
  
  return (
    <FavProvider>
      <Header/>
      <Outlet />
    </FavProvider>
  )
}

export default App