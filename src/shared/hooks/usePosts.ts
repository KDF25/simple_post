import { useMemo } from "react";
import { IPost } from "../store/reducers/posts/types";

export const useSortedPosts = (posts: any, sort: string) => {

    const sortedPosts = useMemo(()=> {
        if(sort){
          return [...posts].sort((a,b) => a[sort].localeCompare(b[sort]))
       }
        return posts;
      }, [sort, posts])

    return sortedPosts;
}

export const usePosts = (posts: any, sort: string, query: string) => {
    const sortedPosts = useSortedPosts(posts, sort);

    const sortedAndSearchedPosts = useMemo(()=> {
        return sortedPosts.filter((post: IPost) => post.title.toLowerCase().includes(query.toLocaleLowerCase()))
    }, [query, sortedPosts])
  
    return sortedAndSearchedPosts;
}