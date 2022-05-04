import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 15px;
`;

export const CategoriesArea = styled.div`
    color: #FFF;
    margin-top: 20px;
`

export const CategoryList = styled.div`
    margin-top: 10px;
    display: flex;
`

export const ProductArea = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;

`

export const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
`

export const ProductPagination = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
`

export const ProductItem = styled.div`
    background-color: ${props => props.active === props.current ? '#ddd' : '#FFF'};
    padding: 5px 10px;
    border-radius: 5px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    cursor: pointer;
    font-weight: 500;
    color: #555;
    margin-right: 8px;
`