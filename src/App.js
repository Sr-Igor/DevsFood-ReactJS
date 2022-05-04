import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import ReactTooltip from 'react-tooltip';

import * as C from './AppStyled'
import { PrivateRoute } from './components/PrivateRoute';

import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';
import { MenuItem } from './components/MenuItem';
import { Cart } from './components/Cart';

export default () => {
    const name = useSelector(state => state.user.name);

    return (
        <BrowserRouter>
            <C.Container>
                <C.Menu>
                    <MenuItem title='Loja' icon='/assets/store.png' link='/' />
                    <MenuItem title='Pedidos' icon='/assets/order.png' link='/orders' />
                    <MenuItem title='Meu Perfil' icon='/assets/profile.png' link='/profile' />
                </C.Menu>
                <C.PageBody>
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>
                        <PrivateRoute exact path="/orders">
                            <div>TELA DE PEDIDOS</div>
                        </PrivateRoute>
                        <PrivateRoute exact path="/profile">
                            <div>TELA DE PERFIL</div>
                        </PrivateRoute>
                    </Switch>
                </C.PageBody>
                <Cart />
                <ReactTooltip id='tip-top' place='top' effect='solid'/>
                <ReactTooltip id='tip-right' place='right' effect='solid'/>
            </C.Container>
        </BrowserRouter>
    );
}