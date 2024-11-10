import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { findResultById } from '../data/data';
import styled from "styled-components";
import resultBg from '../assets/images/result_bg.svg'
import resultList from '../assets/images/list_marker.svg'
import resultLine from '../assets/images/result_line.svg'
import { cardImages } from '../components/Cards';
import Section from '../components/Section';
import IsLoading from "../components/IsLoading";

const Result = ()=>{
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const resultData = findResultById(id);
    
    const splitText = (text) => {
        const korean = text.split('(')[0];
        const english = text.match(/\((.*?)\)/)[1];
        return { korean, english };
    }
    let title = splitText(resultData.type)

    const sectionArray = [
        {tit:"당신은 이런 교사", key : resultData.kind},
        {tit:"담임할 때는 이래요", key : resultData.homeroom},
        {tit:"수업할 때는 이래요", key : resultData.teach},
        {tit:"행정 업무 할 때는 이래요", key : resultData.administrative},
        {tit:`${title.korean} 타입의 교사인 당신을 위한 조언` , key : resultData.advice},
        {tit:`${title.korean} 타입 교사인 당신을 위한 행운 아이템`, key : resultData.item},
    ]

    useEffect(()=>{
        window.addEventListener('DOMContentLoaded', ()=>{
            setIsLoading(false);
        })
    })
    
    useEffect(()=>{
        console.log(isLoading)
    },[isLoading])

    return (
        <ResultWrap>
            
            <ResultEnTitle>{title.english}</ResultEnTitle>
            <ImgWrap>
                <img src={cardImages[id < 10 ? ("0" + id) : id]} alt="#" />
            </ImgWrap>
            <ResultKrTitle>당신은 {title.korean} 타입의 교사</ResultKrTitle>
            <ResultLine>
                <img src={resultLine} alt="result_line" />
            </ResultLine>
            {sectionArray.map((item ,index)=> {
                return (
                    <Section
                        key = {"card"+index}
                        index= {index}
                        title={item.tit}
                        items={item.key}
                    />
                )
            })}

            <ResetButton onClick={() => navigate('/')}>
                다시 테스트하러 가기
            </ResetButton>
            {isLoading && <IsLoading />}
        </ResultWrap>

    )
}


const ResultWrap = styled.div`
    font-family: 'Pretendard';
    color:var(--basic-white);
    max-width:340px;
    margin:auto;
    padding-top:86px;
    height:100vh;
    overflow-y:scroll;
    &::-webkit-scrollbar{
        display:none;
    }
`
const ResultEnTitle = styled.h2`
    position:relative;
    text-align: center;
    font-family: "Frank Ruhl Libre", serif;
    margin-bottom:39px;
    &::before{
        content:"";
        display:block;
        width:20px;
        height:20px;
        background-image:url(${resultList});
        background-repeat:no-repeat;
        background-position:center;
        margin:auto;
        background-size: contain;
        margin-bottom:18px;
    }
`
const ResultKrTitle = styled.h2`
    position:relative;
    text-align: center;
    margin-bottom:15px;
`
const ImgWrap = styled.div`
    width:100%;
    aspect-ratio: 307 / 314 auto;
    max-height:314px;
    background-image:url(${resultBg});
    background-repeat:no-repeat;
    background-size:contain;
    background-position:center;
    text-align: center;
    margin-bottom:39px;
    img{
        width:50%;
        max-width:181px;
    }
`
const ResultLine = styled.div`
    width:90%;
    max-width:340px;
    margin:auto;
    margin-bottom:40px;
    img{
        width:100%;
    }
`
const ResetButton = styled.button`
    width:100%;
    background-color:var(--basic-white);
    border-radius:10px;
    max-width:350px;
    color:var(--secondary-green);
    border:0;
    padding:20px;
    font-size:18px;
    margin:59px auto 20px;
    display:block;
`   

export default Result;