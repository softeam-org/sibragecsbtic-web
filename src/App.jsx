import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './container/Home';
import Inscricoes from './container/Inscricoes';
import Local from './container/Local';
import Submissoes from './container/Submissoes';
import Programacao from './container/Programacao';
import Layout from './container/Layout';
import SummerSchool from './container/SummerSchool';
import Desafio from './container/Desafio';

const App = () => {
  // const navigate = useNavigate();
  return (
    <Layout>
      <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='inscricoes/*' element={<Inscricoes />} />
          <Route path='local/*' element={<Local />} />
          <Route path='submissoes/*' element={<Submissoes />} />
          <Route path='programacao/*' element={<Programacao />} />
          <Route path='summer-school/*' element={<SummerSchool />} />
          <Route path='desafio/*' element={<Desafio />} />
          {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </Layout>
  )
}

export default App