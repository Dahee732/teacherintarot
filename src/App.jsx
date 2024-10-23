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
@font-face {
    font-family: 'SeoulHangangM';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/SeoulHangangM.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
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
    font-family: 'SeoulHangangM';
    height:100vh;
    overflow: hidden;
    background: linear-gradient(174.48deg, #2B6454 47.7%, #165342 67.69%);
  }


`



export default App;
