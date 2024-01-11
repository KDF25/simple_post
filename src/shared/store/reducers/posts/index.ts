import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IPost , IComment} from './types'

export const postsApi = createApi({
  reducerPath: 'postsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com'
  }),
  refetchOnFocus: true,
  endpoints: build => ({
        getPosts: build.query<IPost[], string>({
        query: () => ({url: `/posts`}),

      }),
        getPostById: build.query<IPost, number>({
          query: (id: number) => ({url: `posts/${id}`}),
          transformResponse: (response: IPost) => response,
    
          }),
        getCommentsById: build.query<IComment[], number>({
          query: (id: number) => ({url: `posts/${id}/comments`}),
          transformResponse: (response: IComment[]) => response,
          })
    })
})

export const {useGetPostsQuery, useGetPostByIdQuery, useGetCommentsByIdQuery} = postsApi;


