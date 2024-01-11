import {FC} from 'react';
import {Layout, Row, Menu} from 'antd';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../shared/config/routes';


export const Navbar: FC = () => {
    const router = useNavigate();
    const isAuth = true;
    return (
        <Layout.Header>
            <Row justify="end">

                {isAuth
                    ?
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ flex: 1, minWidth: 0 }} selectable={false}>
                        <div style={{color: 'white'}}>Дамир</div>
                        <Menu.Item onClick={() => router(RouteNames.Login)} key={1}>
                            Выйти
                        </Menu.Item>
                    
                    </Menu>
                    :
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ flex: 1, minWidth: 0 }} selectable={false}>
                        <Menu.Item onClick={() => router(RouteNames.Login)} key={2}>
                            Логин
                        </Menu.Item>
                    
                    </Menu>
                }
                
            </Row>
        </Layout.Header>
    );
};