import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../../auth/components/Login';
import NotFound from '../../auth/components/NotFound';
import Home from '../components/Home';
import Continuacion from '../../pages/Continuacion';


function Navegation() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Continuacion" element={<Continuacion />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Navegation;