import { Button } from 'antd';
import {FC, useState, ChangeEvent, FormEvent} from 'react';
import { MyInput } from '../../../enteties/MyInput';
import { IPost } from '../../../shared/store/reducers/posts/types';


interface PostFormProps {
    create: (newPost: IPost) => void;
}

export const PostForm: FC<PostFormProps> = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})
    const addNewPost = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()

        if (!post.title || !post.body) {
            return; // Если одно из полей пустое, ничего не делаем
          }
          
        const newPost = {
            ...post,
            id: Date.now(),
            userId: Date.now(),
        }
        create(newPost)
        setPost({title: '', body: ''})
      }
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>, field: string) => {
    setPost({ ...post, [field]: e.target.value });
    };

    return (
        <form onSubmit={addNewPost}>
        <MyInput 
            value={post.title}
            onChange={e=> setPost({...post, title: e.target.value})}
            type="text" 
            placeholder='Название поста'/>
        <MyInput 
            value={post.body}
            onChange={e=> setPost({...post, body: e.target.value})}
            type="text" placeholder='Описание поста'/>
        <Button htmlType="submit" type="primary" 
                style={{ backgroundColor: 'blue', marginTop: '30px'}}>Создать пост</Button>
    </form>
    );
};
