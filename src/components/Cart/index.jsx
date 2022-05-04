import React from 'react'
import * as C from './style'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

export const  Cart = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.cart.products)

    const [show, setShow] = useState(false)

    const handleProductChange = (key, type) => {
        dispatch({
            type: 'CHANGE_PRODUCT',
            payload: {key, type}
        })
    }

    return (
        <C.CartArea>
            <C.CartHeader onClick={() => setShow(!show)}>
                <img src="/assets/cart.png" alt="cart" />
                <span>Meu carrinho ({products.length})</span>
                {show && 
                    <img  src='/assets/down.png' alt='down'/>
                }
            </C.CartHeader>
            <C.CartBody show={show}>
                    <div className='productArea'>
                        {products.map((item, index)=> (
                            <div className='productItem' key={index}>
                                <img src={item.image} alt="item" />
                                <div className='productInfoArea'>
                                    <div className='productName'>{item.name}</div>
                                    <div className='productPrice'>R$ {item.price.toFixed(2)}</div>
                                </div>
                                <div className='productQtArea'>
                                    <img src="/assets/minus.png" alt="-" onClick={()=> handleProductChange(index, '-')}/>
                                    <span>{item.qt}</span>
                                    <img src="/assets/plus.png" alt="+" onClick={()=> handleProductChange(index, '+')}/>
                                </div>
                            </div>
                        ))}
                    </div>
            </C.CartBody>
        </C.CartArea>
    )
}