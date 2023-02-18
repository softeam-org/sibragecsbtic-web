import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './container/Home';
import Inscricoes from './container/Inscricoes';
import Local from './container/Local';
import Submissao from './container/Submissao';
import Programacao from './container/Programacao';

const App = () => {
  // const navigate = useNavigate();
  return (
    <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='inscricoes/*' element={<Inscricoes />} />
        <Route path='local/*' element={<Local />} />
        <Route path='submissao/*' element={<Submissao />} />
        <Route path='programacao/*' element={<Programacao />} />
        {/* <Route path='*' element={<NotFound />} /> */}
    </Routes>
  )
}

export default App