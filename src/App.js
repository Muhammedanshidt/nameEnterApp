import './App.css';
import { Routes, Route } from 'react-router-dom';
import Input from './components/Input';
import Page from './components/Page';
import { useState } from 'react';
import context from './components/context';
function App() {
  const [name,setName] = useState()
 
  
  const data = {
    name,
    setName
  }
  return (
    <div className="App" >  
    <context.Provider value={data}>
     <Routes>
      <Route path="/" element={<Input />} />
      <Route path="/page" element={<Page />} />
     </Routes>
    </context.Provider>
     
     </div>
  );
}
export default App;

