import {FC} from 'react';
import cl from './PostItem.module.css';
import { Button} from 'antd';
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../../../shared/hooks/useFavorites';
import { useActions } from '../../../shared/hooks/useActions';
import { IPost } from '../../../shared/store/reducers/posts/types';

interface PostItemProps {
    post: IPost;
    index: number;
    remove?: (post: IPost) => void | undefined;
}

export const PostItem: FC<PostItemProps> = ({post, index, remove}) => {
    const router = useNavigate();
    const {favorites} = useFavorites();
    const {toggleFavorites} = useActions();

    console.log(111, favorites)

    const isExist = favorites.some((r: IPost ) => r.id === post.id)

    return (
        <div className={cl.post}>
            <div className={cl.post__content}>
                <strong>{index}. {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>

            <div className="post__btns">
                {post.id && post.id <= 100 && (
                    <Button
                    type="primary"
                    style={{ backgroundColor: 'green', marginRight: '15px' }}
                    onClick={() => router(`/posts/${post.id}`)}
                    >
                    Open
                    </Button>
                )}
                
                {remove 
                ? <Button onClick={() => remove(post)} type="primary" style={{ backgroundColor: 'red' , marginRight: '15px'}}>Delete</Button>
                : ''}
                
                <Button onClick={() => (toggleFavorites(post))} 
                    type="primary" 
                    style={{ backgroundColor: isExist ? 'blue': 'pink' }}
                    >{isExist ? 'Remove': 'Add to Fav'}</Button>
            </div>
        </div>
    );
};
