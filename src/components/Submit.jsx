
import styled from "styled-components";

const Submit = ()=>{




    return (
        <InputWrap>
            <InputTit>
                생년월일
            </InputTit>
            <InputDate></InputDate>
            <SubmitBtn>
                테스트 시작
            </SubmitBtn>

        </InputWrap>
    )
}

const InputWrap = styled.div`
    width:100%;
    text-align: left;
    position:absolute;
    bottom:50px;

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

`
const SubmitBtn = styled.button`
    width:100%;
    font-size:18px;
    padding:20px;
    text-align: center;
    border-radius:10px;
    border:none;
`


export default Submit;