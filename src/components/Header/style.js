import styled from "styled-components";


export const Container = styled.div`
    background-color: #136713;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Logo = styled.img`
    height: 70px;
    width: auto;
`

export const SearchInput = styled.input`
    border: 0;
    border-radius: 25px;
    width: ${props => props.active ? '300px' : '0px'};
    height: 50px;
    background-color: #FFF;
    background-image: url('/assets/search.png');
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: 10px center;
    outline: none;
    padding-left: 50px;
    cursor: pointer;
    transition: all ease 0.5s;
    font-size: 15px;

    &:hover {
        width: 300px; 
        cursor: text;
    }
`