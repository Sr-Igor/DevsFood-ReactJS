import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import * as C from './style'
import { useDispatch } from 'react-redux'


export const ModalProduct = ({data, setStatus}) => {
    const dispatch = useDispatch()
    const [qt, setQt] = useState(1)

    useEffect(()=>{
        setQt(1)
    }, [data])

    const handleMinus = () => {
        if(qt > 1){
            setQt(qt - 1)
        }
    }

    const handleMore = () => {
        setQt(qt +1)
    }

    const handleAddCart = () => {

        dispatch({
            type: 'ADD_PRODUCT',
            payload: {data, qt}
        })



        setStatus(false)
    }

    return (
        <C.Container>
            <C.ProductArea>
                <C.ProductPhoto src={data.image}/>
                <C.ProductInfoArea>
                    <C.ProductDetails>
                        <C.ProductName>{data.name}</C.ProductName>
                        <C.ProductIngredients>{data.ingredients}</C.ProductIngredients>
                    </C.ProductDetails>
                    <C.ProductQtArea>
                        <C.Quantity>
                            <img src="/assets/minus.png" alt="minus" onClick={handleMinus}/>
                            <span>{qt}</span>
                            <img src="/assets/plus.png" alt="more" onClick={handleMore}/>
                        </C.Quantity>
                        <C.Price>
                            R$ {(data.price * qt).toFixed(2)}
                        </C.Price>
                    </C.ProductQtArea>
                </C.ProductInfoArea>
            </C.ProductArea>
            <C.ProductButtons>
                    <button className='cancel' onClick={()=> setStatus(false)}>Cancelar</button>
                    <button className='addCart' onClick={handleAddCart}>Adicionar ao Carrinho</button>
            </C.ProductButtons>
        </C.Container>
    )
}