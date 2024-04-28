import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: center;
    height: 38px;
`

export const WrapperButtonMore = styled(ButtonComponent)`
    &:hover {
        color: #fff;
        background: rgb(26, 148, 255);
        span {
            color: #fff;
        }
    }
    width: 100%;
    color: rgb(26, 148, 255);
    text-align: center;
    cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointers'}
`

export const WrapperProducts = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 12px;
    margin-top: 20px;
    flex-wrap: wrap;
    & > * {
        flex: 0 0 calc(16% - 1.6px); /* Để mỗi CardComponent chiếm 16% và cách nhau 1.6px */
        max-width: calc(20% - 10px); /* Đảm bảo không có overflow */
        height: auto;
    }
`