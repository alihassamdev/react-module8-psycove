import { Route, Routes } from 'react-router'

import { Home, About, Contact, NotFound } from './pages'
import { MainLayout } from './components/Layout/MainLayout/MainLayout'

import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='about-us' element={<About />} />
          <Route path='contact-us' index element={<Contact />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App
