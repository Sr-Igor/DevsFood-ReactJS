import React from 'react'
import * as C from './style'

export const  Cart = () => {
    return (
        <C.CartArea>
            <C.CartHeader>
                <img src="/assets/cart.png" alt="cart" />
                <span>Meu carrinho (x)</span>
            </C.CartHeader>
            <C.CartBody>

            </C.CartBody>
        </C.CartArea>
    )
}