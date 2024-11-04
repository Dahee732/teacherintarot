import styled from "styled-components";
import scrollIcon from '../assets/images/scroll_down.svg';
import mainBg from '../assets/images/main_bg.png';
import React, {useState, useEffect} from 'react';
import Submit from "../components/Submit"

const Main = ()=> {
    const [pageNum, setPageNum] = useState(0);
    const [resultOpen, setResultOpen] = useState(false);



    const handleWheel = (event)=> {
            if (event.deltaY < 0) {
                console.log('up')
                setPageNum(prop => prop !== 0 ? prop - 1 : 0);

              } else if (event.deltaY > 0) {
                console.log('down')
                setPageNum(prop => prop + 1);

                window.removeEventListener('wheel', handleWheel);
                window.removeEventListener('touchmove', handleTouchMove);
              }
    }
    const handleTouchMove = (event)=> {

        if (event.deltaY < 0) {

            setPageNum(prop => prop !== 0 ? prop - 1 : 0);

          } else if (event.deltaY > 0) {

            setPageNum(prop => prop + 1);

            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('touchmove', handleTouchMove);

          }

    }


    useEffect(() => {
        console.log("pageNum changed:", pageNum);
    },[pageNum])


    useEffect(()=> {
        window.addEventListener('wheel', handleWheel);
        window.addEventListener('touchmove', handleTouchMove);

    },[])



    return (
        <MainWrap>
                
                <TitleWrap isResultOpen = {resultOpen}>
                <SubTitle>타로카드로 알아보는</SubTitle>
                <MainTitle>교사 유형 테스트</MainTitle>
                </TitleWrap>

                <ScrollIcon style={{opacity : pageNum === 0 ? 1 : 0}} >
                    <img src={scrollIcon} alt="#" />
                    scroll
                </ScrollIcon>

                <Submit  
                isActive = {pageNum} 
                isResultOpen = {resultOpen} 
                setIsResultOpen = {setResultOpen} 
                />


        </MainWrap>
    )
    
}

const MainWrap = styled.div`
    padding-top:5rem;
    max-width:390px;
    width:100%;
    height:100vh;
    /* background-color: #fff; */
    margin:auto;
    color: var(--basic-white);
    text-align: center;;
    display:flex;
    /* justify-content: center; */
    flex-direction: column;
    position:relative;
    align-items: center;
    & *{
        box-sizing: border-box;
    }
`


const SubTitle = styled.p`
    color:var(--basic-yellow);
    /* margin-top:100px; */
    margin-bottom:19px;
    font-size:22px;
`
const MainTitle = styled.h1`
    font-size:46px;
    color:var(--basic-white);
    margin-bottom:15px;
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
    transition:all 0.5s ease;
    transform: translateX(-50%);
    img{
        display:block;
    }
`
const TitleWrap = styled.div`
    background-image:url(${mainBg});
    background-repeat:no-repeat;
    background-size:contain;
    background-position:center;
    width:370px;
    height:370px;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition:all 0.5s ease;
    opacity: ${props => props.isResultOpen ? 0 : 1};
    
`


export default Main;