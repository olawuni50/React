import React from 'react'
import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import Homes from "./components/Home/Homes"




const theme = createTheme({
  typography: {
    fontFamily: [
      'Alegreya Sans',
      'sans-serif'
    ].join(','),
    textTransform:"none"
  },
  button:{
    textTransform:"none"
  }
})

function App() { 

  return (
    <ThemeProvider theme={theme}>
      <Router>

        <Routes>
          <Route path="/" exact element={<Homes />} />
        </Routes>
      </Router>
     
      
    </ThemeProvider>
  )
}

export default App
