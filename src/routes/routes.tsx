import React from 'react'
import {Login} from "../pages/Login";
import {Main} from "../pages/Main";

interface RouteProps {
    page:  React.ComponentType
    path: string
}

export function getRoutes(): RouteProps[] {
    return [
        {
            page: Main,
            path: '/',
        },
        {
            page: Login,
            path: '/login'
        }
    ]
}