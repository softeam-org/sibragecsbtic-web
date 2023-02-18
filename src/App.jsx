import { Routes, Route, useNavigate } from 'react-router-dom';


const App = () => {
  //const navigate = useNavigate();
  return (
    <Routes>
        <Route path='/*' element={<Home />} />
    </Routes>
  )
}

export default App