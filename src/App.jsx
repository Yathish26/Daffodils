
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Error404 from './Error404'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
