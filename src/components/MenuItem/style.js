import styled from "styled-components";

export const LinkArea = styled.div`
    
    width: 100%;
    height: 100%;
    background-color: ${props => props.pageActive ? '#0b4d0b' : ''};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 34px;
        height: auto;
    }
`