import LandingPage from '../../module/LandingPage';
import CartPage from '../../module/cart';
import{ createBrowserRouter } from 'react-router-dom';

const routerList = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />,
    },
    {
        path: 'cart',
        element: <CartPage />,
    },
]);

export default routerList;