import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Result from './pages/Result';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@300..900&family=Noto+Sans+KR:wght@100..900&display=swap');

@font-face {
    font-family: 'Pretendard';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

  @font-face {
    font-family: 'SeoulHangangM';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/SeoulHangangM.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  
  :root {
    --primary-color: #3498db;
    --basic-white: #fff;
    --basic-yellow: #FEEB81;
    --basic-orenge: #FE4B1F;
    --secondary-green: #073A2C;
    --third-green: #92B0A8;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    font-family: 'SeoulHangangM';
    height: 100vh;
    overflow: hidden;
    background: linear-gradient(174.48deg, #2B6454 47.7%, #165342 67.69%);
  }
`;

function App() {
  return (
    <BrowserRouter  basename="/teacherintarot">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/result/:id" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;