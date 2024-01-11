import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/query'
// import reducers from './reducers'
import { postsApi } from './reducers/posts';
import {favoritesReducer} from './reducers/favorites.slice';

const rootReducer = combineReducers({
  'favorites': favoritesReducer,
  [postsApi.reducerPath]: postsApi.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(postsApi.middleware),
  })

  export type RootState = ReturnType<typeof rootReducer>;





