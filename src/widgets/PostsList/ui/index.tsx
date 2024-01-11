import {FC, useState, useEffect} from 'react';
import { usePosts } from '../../../shared/hooks/usePosts';
import { getNewSlicedData, getPagesCount } from '../../../shared/utils/pages';
import cl from './styles.module.css'
import { Button } from 'antd';
import { useFavorites } from '../../../shared/hooks/useFavorites';
import { useNavigate } from 'react-router-dom';
import { PostItem } from '../../../enteties/PostItem';
import { PostFilter } from '../../../features/PostFilter';
import { PostForm } from '../../../features/PostForm';
import { IPost } from '../../../shared/store/reducers/posts/types';
import { useGetPostsQuery, useGetCommentsByIdQuery } from '../../../shared/store/reducers/posts';
import { MyModal } from '../../../enteties/MyModal';
import { MyPagination } from '../../../enteties/Pagination';


const postsPerPage = 10

export const PostsList: FC = () => {

    const [posts, setPosts] = useState<IPost[]>([]);
    const [data, setData] = useState<IPost[]>([]);

    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);

    const { isLoading, isError, data: allPosts} = useGetPostsQuery('');
    const firstData : IPost[] = allPosts || []
    const {favorites} = useFavorites();

    // const sortedAndSearchedPosts: IPost[] = usePosts(posts, filter.sort, filter.query);
    const sortedAndSearchedPosts: IPost[] = usePosts(data, filter.sort, filter.query);

    useEffect(() => {
        if (data.length === 0) {
            setData(firstData);
            setTotalPages(getPagesCount(firstData.length, postsPerPage));
        }

        const slicedData = getNewSlicedData(page, postsPerPage, sortedAndSearchedPosts);
        console.log("slicedData", slicedData);
        if (slicedData.length !== 0) {
            setPosts(slicedData);

          } else {
            const newSlicedData = getNewSlicedData(page - 1, postsPerPage, sortedAndSearchedPosts);
            console.log("newSlicedData", newSlicedData);
            setPosts(slicedData);
          }

      }, [sortedAndSearchedPosts, page]);

    const removePost =(post: IPost)=>{
        const updatedData = data.filter(p => p.id !== post.id);
        const newTotalPages = getPagesCount (updatedData.length, postsPerPage)

        setData(updatedData);

        if (newTotalPages < totalPages){
            setTotalPages(newTotalPages)
        }
        if (page > newTotalPages){
            setPage(newTotalPages)
        }

    }

    const changePage = (page: number) => {
        setPage(page)
    }

    const createPost =(newPost: IPost)=>{
        setData([...data, newPost])
        setModal(false)
    }

    const router = useNavigate();

    return (
        <div className={cl.wrapper}>
            <PostFilter filter={filter} setFilter={setFilter}/>

            <div className={cl.btn}>
                <Button type="primary" 
                    style={{ backgroundColor: 'blue'}} 
                    onClick={()=> setModal(true)}
                    >New Post
                </Button>

                <Button type="primary" 
                    style={{ backgroundColor: 'red', }} 
                    onClick={() => router(`/favorites`)}
                    >Favorites {favorites.length ? favorites.length : ''}
                </Button>
            </div>


            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>

            {data.length
                ?
                (<div>
                    <h1 className={cl.post_list}>SPISOK</h1>
                        {posts.map((post, index) => 
                        <PostItem remove={removePost} index={(page - 1) * postsPerPage + index + 1} post={post} key={post.id}/>
                    )}

                    <MyPagination
                        page={page}
                        changePage={changePage}
                        totalPages={totalPages}
                    />
                </div>)
                :
                (<div ><h1 className={cl.post_list}>Spisok pust</h1></div>)
            }

        </div>
    );
};

