import { createSlice } from "@reduxjs/toolkit";
import { IPost } from "./posts/types";


const initialState: IPost[] = [];


export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorites: (state, {payload: post}) => {
            const isExist = state.some(r => r.id === post.id)

        if (isExist){
            const index = state.findIndex(item => item.id === post.id)
            if (index !== -1) {
                state.splice(index, 1)
            }}
        else
            state.push(post)

        },
        deleteFavorites: (state) => {
            state.splice(0, state.length, ...initialState);
        }

    }
});


export const { actions: favoritesActions, reducer: favoritesReducer} = favoritesSlice;
