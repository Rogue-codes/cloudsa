import Home from "./Components/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Email from "./Components/Email";
import { useEffect, useState } from "react";
import styled from 'styled-components'
import AzureActiveDirectory from "./Components/AzureActiveDirectory";
import Microst365 from "./Components/Microst365";
import OnPrem from "./Components/OnPrem";
import AzureInfra from "./Components/AzureInfra";

const Loader = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      height: 250px;
      width: 250px;
      object-fit: contain;
    }
`

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout (()=>{
      setLoading(false);
    }, 3000)
  },[])
  
  return (
    <div className="App">
      {
        loading ? (<Loader>
          <img src="/spinner.gif" alt=''></img>
        </Loader>) : (
          <Router>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/email" element={<Email/>}/>
              <Route path='/aad' element={<AzureActiveDirectory/>}/>
              <Route path='/m365' element={<Microst365/>}/>
              <Route path='/onPrem' element={<OnPrem/>}/>
              <Route path='/azureInfra' element={<AzureInfra/>}/>
            </Routes>
          </Router>
        )
      }

    </div>
  );
}

export default App;
