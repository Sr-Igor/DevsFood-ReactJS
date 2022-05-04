import React from 'react'
import * as C from './style'

export const CategoryItem = ({data, activeCategory, setAcitveCategory}) => {

    const handleCategoryClick =() => {
        setAcitveCategory(data.id)
    }

    return(
        <C.Container 
            active={activeCategory}
            id={data.id}
            onClick={handleCategoryClick}
            data-tip={data.name}
            data-for='tip-top'
            >
            <img src={data.image} alt="categoryImage" />
        </C.Container>
    )
}