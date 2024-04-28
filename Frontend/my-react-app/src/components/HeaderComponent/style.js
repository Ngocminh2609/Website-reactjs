import { Row } from 'antd';
import { styled } from 'styled-components';

export const WrapperHeader = styled(Row)`
    padding: 10px 125px;
    background-color: rgb(26, 148, 255);
    align-items: center;
    gap: 30px;
    flex-wrap: nowrap
`

export const WrapperTextHeader = styled.span`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    text-align: left;
    cursor: pointer;
`

export const WrapperHeaderAccount = styled.div`
    display: flex;
    align-items: center;
    color: #fff
`

export const WrapperTextHeaderSmall = styled.span`
    font-size: 12px;
    color: #fff;
    white-space: nowrap
`

export const WrapperContentPopup = styled.p`
    cursor: pointer;
    &:hover {
        color: rgb(26, 148, 255);
    }
`