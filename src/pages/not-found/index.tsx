import { Layout, Row } from 'antd';
import {FC} from 'react';


const NotFoundPage: FC = () => {

    return (
        <Layout>
            <Row justify="center" align="middle" className="h180">
                Страница не найдена....
            </Row>
        </Layout>
    );
};

export default NotFoundPage;