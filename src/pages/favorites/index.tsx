import { Layout, Row } from 'antd';
import {FC} from 'react';
import { Favorites } from '../../widgets/Favorites';


const FavoritesPage: FC = () => {

    return (
        <Layout>
            <Row justify="center" align="middle" className="h180">
                <Favorites/>
            </Row>
        </Layout>
    );
};

export default FavoritesPage;