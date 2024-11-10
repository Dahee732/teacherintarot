import styled, { keyframes } from 'styled-components'


const IsLoading = () => {


    return (
        <LoadingWrap>
            <FlipBox  />
        </LoadingWrap>
    )

}

export default IsLoading;
const LoadingWrap = styled.div`
    width:100vw;
    position:fixed;
    height:100vh;
    top:0;
    left:0;
    background: linear-gradient(174.48deg, #2B6454 47.7%, #165342 67.69%);
`



const flipSquare = keyframes`
      0% {
    -webkit-transform: perspective(150px) rotate(30deg) rotateX(0deg) rotateY(0deg);
            transform: perspective(150px) rotate(30deg) rotateX(0deg) rotateY(0deg); }
  50% {
    -webkit-transform: perspective(150px) rotate(30deg) rotateX(-180deg) rotateY(0deg);
            transform: perspective(150px) rotate(30deg) rotateX(-180deg) rotateY(0deg); }
  100% {
    -webkit-transform: perspective(150px) rotate(30deg) rotateX(-180deg) rotateY(-180deg);
            transform: perspective(150px) rotate(30deg) rotateX(-180deg) rotateY(-180deg); } 


`

const FlipBox = styled.div`
          animation: ${flipSquare} 1.5s infinite;
  background-color: var(--basic-yellow);
  content: '';
  display: block;
  height: 80px;
  width: 50px;
  border-radius: 4px;
    position:absolute;
    top:calc(50% - 40px);
    left:calc(50% - 25px);
`