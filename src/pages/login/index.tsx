import { Layout, Row } from 'antd';
import {FC} from 'react';
import { LoginForm } from '../../enteties/LoginForm';


const LoginPage: FC = () => {

    return (
        <Layout>
            <Row justify="center" align="middle" className="h180">
                <LoginForm />
            </Row>
        </Layout>
    );
};

export default LoginPage;