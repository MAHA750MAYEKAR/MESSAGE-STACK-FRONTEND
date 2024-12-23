
import './App.css';

import { Route, Routes } from 'react-router-dom';

import { SignInCard } from './components/organisms/Auth/signInCard';
import { SignUpCard } from './components/organisms/Auth/SignUpCard';
import Auth from './pages/auth/Auth';

function App() {
  return (

    <>
      <Routes>
        <Route path="/auth/signin" element={<Auth ><SignInCard/></Auth >} />
        <Route path="/auth/signup" element={<Auth ><SignUpCard /></Auth >} />
      </Routes>
      
    </>
  );
}

export default App;