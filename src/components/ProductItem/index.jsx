import React from 'react'
import * as C from './style'

export const ProductItem = ({data, onClick}) => {

    const handleClick = () => {
        onClick(data)
    }

    return(
        <C.Container onClick={handleClick}>
            <C.ProductPhotoArea>
                <img src={data.image} alt="" />
            </C.ProductPhotoArea>
            <C.ProductInforArea>
                <span className='name'>{data.name}</span>
                <span className='price'>R$ {data.price}</span>
                <span className='ingredients'>{data.ingredients}</span>
            </C.ProductInforArea>
            <C.ProductButtonArea>
                <img src="/assets/next.png" alt="next" />
            </C.ProductButtonArea>
        </C.Container>
    )
}