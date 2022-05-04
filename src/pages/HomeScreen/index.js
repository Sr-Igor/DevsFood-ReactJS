import React from 'react';
// import { useHistory } from "react-router-dom";
import * as C from './styled';
import { Header } from '../../components/Header';
import { useState } from 'react';
import { api } from '../../api';
import { useEffect } from 'react';
import { CategoryItem } from '../../components/CategoryItem';
import ReactTooltip from 'react-tooltip';
import { ProductItem } from '../../components/ProductItem';
import { Modal } from '../../components/Modal';
import { ModalProduct } from '../../components/ModalProduct';

let searchTimer = null

export default () => {
    // const history = useHistory();

    const [headerSearch ,setHeaderSearch] = useState('')
    const [categoriesList, setCategoriesList] = useState([])
    const [productsList, setProductsList] = useState([])
    const [totalPages, setTotalPages] = useState(0)

    const [modalStatus, setModalStatus] = useState(false)
    const [modalData, setModalData] = useState({});

    const [activeCategory, setAcitveCategory] = useState(0);
    const [activePage, setActivePage] = useState(1)
    const [activeSearch, setActiveSearch] = useState('')

    useEffect(()=> {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(()=>{ 
            setActiveSearch(headerSearch)  
        }, 2000);

    }, [headerSearch])

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
        const CallProducts = async () => {
            const prods = await api.getProducts(activeCategory, activePage, activeSearch)
            if(prods.error === '') {
                setProductsList(prods.result.data)
                setTotalPages(prods.result.pages)
                setActivePage(prods.result.page)
            }
        }

        CallProducts();

    }, [activeCategory, activePage, activeSearch])

    const handleSearch = (searchItem) => {
        setHeaderSearch(searchItem)
    }

    const handleProductClick = (data) => {
        setModalData(data)
        setModalStatus(true)
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
                        onClick={handleProductClick}
                        />
                    ))}
                </C.ProductList>
            </C.ProductArea>
            }
            {totalPages > 0 &&
                <C.ProductPagination>
                    {Array(totalPages).fill(0).map((item, index)=>(
                        <C.ProductItem 
                            key={index} 
                            active={activePage}
                            current={index + 1}
                            onClick={() => setActivePage(index + 1)}
                            >
                                {index + 1}
                        </C.ProductItem>
                    ))}
                </C.ProductPagination>
            }

            <Modal status={modalStatus} setStatus={setModalStatus}>
                <ModalProduct
                    data={modalData}
                    setStatus={setModalStatus}
                />
            </Modal>
        </C.Container>
    );
}