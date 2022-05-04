import React from 'react';
import { useHistory } from "react-router-dom";
import * as C from './styled';
import { Header } from '../../components/Header';
import { useState } from 'react';
import { api } from '../../api';
import { useEffect } from 'react';
import { CategoryItem } from '../../components/CategoryItem';
import ReactTooltip from 'react-tooltip';
import { ProductItem } from '../../components/ProductItem';

export default () => {
    const history = useHistory();

    const [headerSearch ,setHeaderSearch] = useState('')
    const [categoriesList, setCategoriesList] = useState([])
    const [productsList, setProductsList] = useState([])
    const [totalPages, setTotalPages] = useState(0)

    const [activeCategory, setAcitveCategory] = useState(0);
    const [activePage, setActivePage] = useState(0)

    const CallProducts = async () => {
        const prods = await api.getProducts()
        if(prods.error === '') {
            setProductsList(prods.result.data)
            setTotalPages(prods.result.pages)
            setActivePage(prods.result.page)
        }
    }

    useEffect(()=>{
        const CallCategories = async () => {
            const request = await api.getCategories()
            if(request.error === ''){
                setCategoriesList(request.result)
            }
            ReactTooltip.rebuild();
        };
        CallCategories()
    }, []);

    useEffect(()=>{
        CallProducts()
    }, [activeCategory, activePage])

    const handleSearch = (searchItem) => {
        setHeaderSearch(searchItem)
    }

    return (
        <C.Container>
            <Header searchItem={headerSearch} onSearch={handleSearch}/>
            {categoriesList.length > 0 && 
                <C.CategoriesArea>
                    Selecione uma categoria
                    <C.CategoryList>
                        <CategoryItem 
                        data={{
                            id: 0,
                            name: 'Todas as categorias',
                            image: '/assets/food-and-restaurant.png',
                        }}
                        activeCategory={activeCategory}
                        setAcitveCategory={setAcitveCategory}
                    />
                    {categoriesList.map((item, index) => (
                        <CategoryItem
                            key={index}
                            data={item}
                            activeCategory={activeCategory}
                            setAcitveCategory={setAcitveCategory}
                        />
                    ))}
                    </C.CategoryList>
                </C.CategoriesArea>
            }
            {productsList.length > 0 &&
            <C.ProductArea>
                <C.ProductList>
                    {productsList.map((item, index) => (
                        <ProductItem 
                        key={index}
                        data={item}
                        />
                    ))}
                </C.ProductList>
            </C.ProductArea>
            }

            <C.ProductPagination>
                {totalPages > 0 &&
                Array(totalPages).fill(0).map((item, index)=>(
                    <C.ProductItem 
                        key={index} 
                        active={activePage}
                        current={index + 1}
                        onClick={() => setActivePage(index + 1)}
                        >
                            {index + 1}
                    </C.ProductItem>
                ))
                }
            </C.ProductPagination>
        </C.Container>
    );
}