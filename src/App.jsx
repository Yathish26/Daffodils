
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import ComingSoon from './Comingsoon'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
