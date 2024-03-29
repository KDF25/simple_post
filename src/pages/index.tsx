import { Route, Routes} from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../shared/config';

const Routing = () => {
    // const {isAuth} = useTypedSelector(state => state)
    const isAuth = true
    return (

            isAuth
            ? 
                <Routes>
                    {privateRoutes.map(route => 
                        <Route 
                            path={route.path} 
                            element={<route.component/>}
                            key={route.path}
                        />
                    )}
                </Routes>
            :
                <Routes>
                    {publicRoutes.map(route => 
                        <Route 
                            path={route.path} 
                            element={<route.component/>}
                            key={route.path}
                        />
                    )}
                </Routes> 
        

    );
};

export default Routing;