import { Layout, Row } from 'antd';
import {FC} from 'react';
import { PostsList } from '../../widgets/PostsList';

const PostsPage: FC = () => {
    return (
        <Layout>
            <Row justify="center" align="middle">
                <PostsList/>
            </Row>
         </Layout>
    );
};

export default PostsPage;