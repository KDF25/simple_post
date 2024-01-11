import { Layout, Row } from 'antd';
import {FC} from 'react';
import { PostId } from '../../features/PostId';

const PostIdPage: FC = () => {
    return (
        <Layout>
            <Row justify="center" align="middle">
                <PostId />
            </Row>
         </Layout>
    );
};

export default PostIdPage;