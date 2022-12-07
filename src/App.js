import React from 'react';
import {Route, Routes} from 'react-router-dom';
import EventAdd from './component/EventAdd';
import HomePage from './component/HomePage';
import './App.css'
import EventList from './component/EventList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  
  return (
    <div className='App'>
      
<Routes>
  <Route exact path="/" element={<HomePage/>}  ></Route>
  <Route path="/eventadd" element={<EventAdd/>}  ></Route>
  <Route pathe="/eventlist/:id" element={<EventList/>}  ></Route>
</Routes>,

    
    </div>
    
    
  
      
    
  );
}

export default App;
