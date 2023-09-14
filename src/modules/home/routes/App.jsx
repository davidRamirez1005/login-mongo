import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../../auth/components/Login';
import NotFound from '../../auth/components/NotFound';
import Home from '../components/Home';
import Profile from '../../pages/Profile';
import { AuthProvider, AuthRoute } from '../../auth/context/auth'
import { Logout } from '../../auth/components/Logout';


function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route
              path="/Profile"
              element={
                <AuthRoute>
                  <Profile />
                </AuthRoute>
              }
            />
            <Route
              path="/logout"
              element={
                <AuthRoute>
                  <Logout />
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

export default App;