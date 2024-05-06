import { Row } from 'antd';
import { styled } from 'styled-components';

export const WrapperFooter = styled(Row)`
    text-align: center;
    background-color: rgb(26, 148, 255);
`

export const WrapperTextFooter = styled.span`
    font-size: 15px;
    display: block;
    margin: 15px 0;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
`