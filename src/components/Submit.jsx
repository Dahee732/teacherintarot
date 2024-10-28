
import react, { useState } from 'react'

import styled from "styled-components";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import calendarIcon from '../assets/images/calendar.svg'

const Submit = ( props ) => {


    const [selectedDate, setSelectedDate] = useState(null);
    const [isOpen, setIsOpen] = useState(false);



    const handleIconClick = () => setIsOpen(!isOpen);
    const handleDateChange = (date) => {
        setSelectedDate(date);
        setIsOpen(false); // 날짜 선택 후 DatePicker 닫기
    };
    const checkResult = ()=> {
        
        console.log(selectedDate)
        props.setIsResultOpen(true)
    }


    return (
        <InputWrap className="submit" isActive={props.isActive} isResultOpen = {props.isResultOpen}>
            <InputTit>
                생년월일
            </InputTit>
            <InputDate>
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="yyyyMMdd"
                    onClickOutside={() => setIsOpen(false)} // 외부 클릭 시 닫기
                    open={isOpen} // open 속성을 상태로 제어
                />
                <DateButton onClick={handleIconClick} >
                </DateButton>
            </InputDate>
            <SubmitBtn onClick={checkResult}>
                테스트 시작
            </SubmitBtn>

        </InputWrap>
    )
}

const InputWrap = styled.div`
    width:100%;
    text-align: left;
    position:absolute;

    transition:all 1s ease;
    opacity: ${props => props.isActive > 0 ? props.isResultOpen ? 0 : 1 : 0};
    bottom:${props => props.isActive > 0 ? 50+"px" : -100+"%"};
`
const InputTit = styled.div`
    font-size:15px;
    color:var(--basic-white);
    text-align:left;
    position:relative;
    display: inline-block;
    margin-bottom:16px;
    &::after {
        content:'';
        position:absolute;
        right:-12%;
        top: 0;
        width:4px;
        height:4px;
        border-radius: 50%;
        background-color:  var(--basic-orenge);
        display:block;
    }
`

const InputDate = styled.div`
    display:block;
    background-color: var(--secondary-green);
    border-radius:10px;
    margin-bottom:26px;
    position:relative;
    .react-datepicker-wrapper{
        width:100%;
        font-size:18px;

        color:var(--third-green)
    }

    .react-datepicker__input-container input{
        background-color: unset;
        width:100%;
        display:block;
        border:none;
        padding:20px;
        color:var(--third-green);
        font-size:18px;
    }
    .react-datepicker__input-container input:focus{
        outline:none;
    }

`

const SubmitBtn = styled.button`
    width:100%;
    font-size:18px;
    padding:20px;
    text-align: center;
    border-radius:10px;
    border:none;
    color:var(--secondary-green);
`

const DateButton = styled.div`
    position:absolute;
    right:20px;
    top:50%;
    transform:translateY(-50%);
    z-index:10;
    width:24px;
    height:24px;
    background: url(${calendarIcon}) no-repeat center / contain;
`


export default Submit;