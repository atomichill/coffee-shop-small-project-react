
import './App.scss';
import {Routes,Route} from 'react-router-dom'

import Main from '../main/mai';
import Our from '../../pages/our-coffee-page/Our';
import Header from '../header/header';




function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Main />}/>
          <Route path='our' element={ <Our />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
