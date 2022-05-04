import styled from "styled-components";

export const CartArea = styled.div`
    position: fixed;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    bottom: 0;
    right: 30px;
    background-color: #136713;
`

export const CartHeader =styled.div`
    height: 50px;
    width: 290px;
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
        width: 23px;
        height: auto;
        margin-left: 10px;
        margin-right: 10px
    }

    span {
        color: #FFF;
        font-size: 17px;
    }
`

export const CartBody = styled.div`
`