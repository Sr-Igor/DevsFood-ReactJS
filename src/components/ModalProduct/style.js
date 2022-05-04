import styled from "styled-components";

export const Container = styled.div`
    width: 650px;
    padding: 20px;
`

export const ProductArea = styled.div`
    display: flex;
`

export const ProductPhoto = styled.img`
    width: 310px;
    height: auto;
    border-radius: 10px;

`

export const ProductInfoArea = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
`

export const ProductDetails = styled.div`

`

export const ProductQtArea = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ProductButtons = styled.div`

    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .cancel {
        border: 0;
        background-color: #073c07;
        box-shadow: 4px 5px 0px rgba(0,0,0,0.16);
        color: white;
        border-radius: 5px;
        font-size: 13px;
        font-weight: bold;
        padding: 5px 10px;
        cursor: pointer;
    }

    .addCart {
        border: 0;
        background-color: #073c07;
        box-shadow: 4px 5px 0px rgba(0,0,0,0.16);
        color: white;
        border-radius: 5px;
        font-size: 22px;
        font-weight: bold;
        padding: 10px 20px;
        margin-left: 10px;
        cursor: pointer;
    }
`

export const ProductName = styled.div`
    font-size: 30px;
    font-weight: bold:
`

export const ProductIngredients = styled.div`
    font-size: 14px;
`

export const Quantity = styled.div`
    display: flex;
    align-items: center;
    background-color: #073C07;
    border-radius: 5px;

    img {
        width: 24px;
        height: auto;
        cursor: pointer;
        margin-left: 10px;
        margin-right: 10px;
    }

    span {
        font-size: 25px;
        font-weight: bold;
        color: white;
        margin-left: 10px;
        margin-right: 10px;
    }
`

export const Price = styled.div`
    font-size: 30px;
    font-weight: bold;
    color: 
`
