
import './App.css';

import { Route, Routes } from 'react-router-dom';

import { SignInCard } from './components/organisms/Auth/signInCard';
import { SignUpCard } from './components/organisms/Auth/SignUpCard';
import Auth from './pages/auth/Auth';
import { NotFound } from './pages/NotFound/NotFound';

function App() {
  return (

    <>
      <Routes>
        <Route path="/auth/signin" element={<Auth ><SignInCard/></Auth >} />
           <Route path="/auth/signup" element={<Auth ><SignUpCard /></Auth >} />
           <Route path="/*" element={<NotFound/>} />
      </Routes>
      
    </>
  );
}

export default App;