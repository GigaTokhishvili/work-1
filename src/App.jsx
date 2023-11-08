import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Auth from './pages/Auth page/Auth';
import Landing from './pages/landing page/Landing';
import Main from './pages/Main page/Main';
import Error from './pages/Error page/Error';
import NavBar from './components/NavBar';
import Api from './pages/Api/Api';

function App() {
  const [user, setUser] = useState(false);

  const location = useLocation();

  useEffect(() => {
    (localStorage.getItem('userImg') && localStorage.getItem('userName')) ? setUser(true) : setUser(false);
  
  }, [location]);
  

  return (
    <>
    {user && <NavBar />}
    <Routes>
      {!user ? (
        <>
          <Route index path='/' element={<Landing />} />
          <Route path='/auth' element={<Auth />} />
        </>
      ) : (
        <>
            <Route path='/main' element={<Main />} />
            <Route path='/api' element={<Api />} />
        </>
      )}
      <Route path='*' element={<Error />} />
    </Routes>
      </>
  );
}

export default App;
