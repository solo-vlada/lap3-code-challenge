import React from 'react';
import './css/App.css';
import {Routes, Route} from 'react-router-dom';
import {SearchPage, RepoPage, HomePage} from './pages';
import {Header} from './layouts';


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Header/>}>
            <Route path='/' element={<HomePage/>} />
              <Route path='search' element={<SearchPage />}/>
              <Route path=':username' element={<RepoPage />}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
