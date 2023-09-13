import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../../auth/components/Login';
import NotFound from '../../auth/components/NotFound';
import Home from '../components/Home';
import Profile from '../../pages/Profile';
import { AuthProvider, AuthRoute } from '../../auth/context/auth'


function Navegation() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              {/* <Route path="/Profile" element={<Profile />} /> */}
              <Route
              path="/Profile"
              element={
                <AuthRoute>
                  <Profile />
                </AuthRoute>
              }
            />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default Navegation;