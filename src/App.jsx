// import Process from './components/Process';
import Main from './pages/Main';
import {createGlobalStyle } from 'styled-components';

function App() {
  return (
    
            
    <div className="App">
      <GlobalStyle />
      <Main />
    </div>


  );
}

const GlobalStyle = createGlobalStyle`
  :root{
    --primary-color: #3498db;
    --basic-white : #fff;
    --basic-yellow:  #FEEB81;
  }
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  body{
    width:100vw;
    height:100vh;
    overflow: hidden;
    background: linear-gradient(174.48deg, #2B6454 47.7%, #165342 67.69%);
  }


`



export default App;
