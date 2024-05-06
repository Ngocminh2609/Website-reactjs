import styled from "styled-components";

export const WrapperLableText = styled.h4`
    color: rgb(56, 56, 61);
    font-size: 15px;
    font-weight: 1000;
`

export const WrapperTextValue = styled.span`
    padding: 4px 10px;
    border-radius: 8px;
    color: rgb(56, 56, 61);
    font-size: 15px;
    font-weight: 400;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    &:hover{
        background: #ccccb3;
    }
`

export const WrapperContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 10px 0 20px 0;
`

export const WrapperTextPrice = styled.div`
    padding: 4px;
    color: rgb(56, 56, 61);
    border-radius: 10px;
    background-color: rgb(238, 238, 238);
    width: fit-content;
`