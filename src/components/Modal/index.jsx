import React from "react";
import * as C from './style'

export const Modal = ({status, setStatus ,children}) => {

    const handleModalClick = (e) => {
        if(e.target.classList.contains("modalControl")){
            setStatus(false)
        }
    }

    return (
        <C.Container status={status} onClick={handleModalClick} className='modalControl'>
            <C.ModalBody>
                {children}
            </C.ModalBody>
        </C.Container>
    )
}