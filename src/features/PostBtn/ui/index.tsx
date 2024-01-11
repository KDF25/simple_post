import { Button } from 'antd';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyModal } from '../../../enteties/MyModal';
import { useFavorites } from '../../../shared/hooks/useFavorites';
import { IPost } from '../../../shared/store/reducers/posts/types';
import { PostForm } from '../../PostForm';
import cl from './styles.module.css';


export const PostsBtns: FC = () => {

    const [modal, setModal] = useState(false);
    const {favorites} = useFavorites();

    const createPost =(newPost: IPost)=>{
        // setData([...data, newPost])
        setModal(false)
    }

    const router = useNavigate();

    return (
        <div className={cl.wrapper}>

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

        </div>
    );
};

