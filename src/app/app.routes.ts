import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { Component } from '@angular/core';
import { HeaderComponent } from './pages/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:"login",
        pathMatch:"full"
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:HeaderComponent,
        children:[
            {
                path:'dashboard',
                component:DashboardComponent
            },
            {
                path:'users',
                component:UsersComponent
            },
            {
                path:'create-new',
                component:UsersComponent
            },
            {
                path:'incident-list',
                component:UsersComponent
            }
        ]
    }
];
