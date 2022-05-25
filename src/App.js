import Home from "./Components/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Email from "./Components/Email";
import { OkTooltip } from '@deepdub/react-ok-tooltip';
import '@deepdub/react-ok-tooltip/dist/tooltip.css';
import { tooltip } from '@deepdub/react-ok-tooltip';
import styled from 'styled-components'

const Whatsapp = styled.a`
  @media (max-width:480px) {
    left: 80%;
  }
  cursor: pointer;
  position: fixed;
  left: 92%;
  top: 70%;
  width:5%;
  height: 10%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: all .5s linear;
  border: none;
  &:hover{
    transform: scale(1.1)
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`
function App() {
  return (
    <div className="App">
      <Router>
      <button ref={tooltip('I am a tooltip!')}>
        <Whatsapp href="https://api.whatsapp.com/send?phone=2347086793671">
          <img src='/wat.png' alt=''/>
        </Whatsapp>
      </button>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/email" element={<Email/>}/>
        </Routes>
        <OkTooltip arrowSize={5} />
      </Router>
    </div>
  );
}

export default App;
