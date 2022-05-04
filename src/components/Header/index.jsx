import React from 'react'
import { useState } from 'react'
import * as C from './style'

export const Header = ({searchItem, onSearch}) => {

    const [inputActive, setInputActive] = useState(searchItem === '' ? false : true)

    const handleInputFocus = () => {
        setInputActive(true)
    }

    const handleInputBlur = () => {
        if(!searchItem){
            setInputActive(false)
        }
    }

    const handleSearchItem = (e)=> {
        onSearch(e.target.value)
    }


    return(
        <C.Container>
            <C.Logo  src="/assets/logo.png" alt='logo'/>
            <C.SearchInput 
                type='text'
                placeholder='Pesquisar...'
                active={inputActive}
                value={searchItem}
                onChange={handleSearchItem}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                />
        </C.Container>
    )
}