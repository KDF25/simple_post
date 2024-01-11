import { FC} from "react";
import { useParams} from "react-router-dom";
import { Loader } from "../../../enteties/Loader";
import { useGetPostByIdQuery, useGetCommentsByIdQuery } from "../../../shared/store/reducers/posts";
import { IComment, IPost } from "../../../shared/store/reducers/posts/types";
import styles from './styles.module.css';


export const PostId: FC = () => {
    const params = useParams();
    const postId = parseInt(params.id!, 10); // Преобразование в number или undefined

    const {isLoading, data: currentPost} = useGetPostByIdQuery(postId);
    const {isLoading: isCommentLoading, data: currentComments} = useGetCommentsByIdQuery(postId);

    const post : IPost = currentPost!;
    const comment : IComment[] = currentComments!;

    return (
        <div>
            <h1>Страница поста с ID = {postId}</h1>
            {isLoading
                ? <Loader/>
                : <div>{post.id}. {post.title}</div>
            }

            <h1>Комментарии</h1>
            {isCommentLoading 
                ? <Loader/>
                : <div className={styles.wrapper}>{comment.map(comm => 
                    <div className={styles.comment}>
                        <h5>{comm.email}</h5>
                        <div>{comm.body}</div>
                    </div>

                )}
                
                </div>
            }
        </div>
    );
};
