import Home from "./Components/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Email from "./Components/Email";
import { useEffect, useState } from "react";
import styled from 'styled-components'

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
            </Routes>
          </Router>
        )
      }

    </div>
  );
}

export default App;
