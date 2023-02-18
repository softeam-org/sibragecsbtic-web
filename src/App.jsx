import { Routes, Route, useNavigate } from 'react-router-dom';


const App = () => {
  //const navigate = useNavigate();
  return (
    <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='inscricoes/*' element={<Inscricoes />} />
        <Route path='local/*' element={<Local />} />
        <Route path='submissao/*' element={<Submissao />} />
        <Route path='programacao/*' element={<Programacao />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App