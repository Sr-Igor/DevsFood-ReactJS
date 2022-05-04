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
        flex: 1;
        color: #FFF;
        font-size: 17px;
    }
`

export const CartBody = styled.div`
    display: ${props => props.show ? 'block' : 'none'};
    color: #FFF;


    .productArea{

        .productItem{ 
            display: flex;
            margin: 10px;
        }

        img {
            width: 64px;
            height: auto;
            border-radius: 10px;
        }

        .productInfoArea {
            
            flex: 1;
            margin-left: 10px;

            .productName {
                font-size: 15px;
                font-weight: bold;
            }

            .productPrice {
                font-size: 13px;
            }

        }

        .productQtArea {

            display: flex;
            align-items: center;

            img {
                width: 13px;
                height: auto;
                cursor: pointer;
            }

            span {
                font-size: 13px;
                font-weight: bold;
                margin: 0px 5px;
            }
        }

    }
`


