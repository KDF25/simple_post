import React from 'react';
import LoginPage from '../../pages/login';
import PostsPage from '../../pages/posts';
import PostIdPage from '../../pages/postId';
import FavoritesPage from '../../pages/favorites';
import { RouteNames } from './routes';
import NotFoundPage from '../../pages/not-found';

export interface IRoute {
    path: string;
    component: React.ComponentType;
}


export const publicRoutes: IRoute[] = [
    {path: RouteNames.Login, component: LoginPage},
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.Posts, component: PostsPage},
    {path: RouteNames.Favorites, component: FavoritesPage},
    {path: RouteNames.Login, component: LoginPage},
    {path: RouteNames.PostIdPage, component: PostIdPage},
    {path: RouteNames.NotFound, component: NotFoundPage},
]