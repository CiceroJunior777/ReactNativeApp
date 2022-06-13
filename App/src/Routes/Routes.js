import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import Login from '../pages/login/Login';
import Inicial from '../pages/home/Home';

export const Routes = () => {
    return (
        <Router>
            <Stack key={Login} hideNavBar>
                <Scene key="login" element={Login} title="Login"/>
                <Scene key="inicial" element={Inicial} title="Inicial"/>
                <Scene key="cadastro" element={Cadastro} title="Cadastro" />
                <Scene key="lista" element={Lista} title="Lista" />
            </Stack>
        </Router>
    );
}