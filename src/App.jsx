import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Registro from './components/Registro';
import { useState } from 'react';

const App = () => {
  const [alert, setAlert] = useState({msg: "", color: ""})
  return (
    <>
    <Registro alert={alert} setAlert={setAlert}/>
    </>
  )
}

export default App
