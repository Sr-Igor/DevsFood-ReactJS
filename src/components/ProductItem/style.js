import styled from "styled-components";


export const Container = styled.div`
    background-color: #FFF;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba( 0, 0, 0, 0.16);
    padding: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const ProductPhotoArea = styled.div`

    width: 100px;

    img {
        width: 100%;
    }
`


export const ProductInforArea = styled.div`

    flex: 1;
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    color: #136713;

    .name {
        font-size: 20px;
        font-weight: bold;
    }

    .price{
        font-size: 14px;
    }

    .ingredients{
        font-size: 11px;
    }
`

export const ProductButtonArea = styled.div`
    


    img{
        width: 15px;
    }
`