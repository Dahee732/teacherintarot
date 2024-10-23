import styled from "styled-components";
import scrollIcon from '../assets/images/scroll_down.svg'
const Main = ()=> {


    return (
        <MainWrap>
                <SubTitle>타로카드로 알아보는</SubTitle>
                <MainTitle>교사 유형 테스트</MainTitle>

                <ScrollIcon>
                    <img src={scrollIcon} alt="#" />
                    scroll
                </ScrollIcon>
        </MainWrap>
    )
    
}

const MainWrap = styled.div`
    max-width:480px;
    width:100%;
    height:100%;
    /* background-color: #fff; */
    margin:auto;
    color: var(--basic-white);
    text-align: center;;
`


const SubTitle = styled.p`
    color:var(--basic-yellow);
    margin-top:100px;
    margin-bottom:19px;
`
const MainTitle = styled.h1`
    color:var(--basic-white);
`
const ScrollIcon = styled.div`
    position:absolute;
    bottom:5%;
    text-align: center;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    left:50%;
    transform: translateX(-50%);
    img{
        display:block;
    }
`
export default Main;