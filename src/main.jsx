import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import '/src/css/output.css'
import HomePage from './pages/HomePage.jsx'
import Catagories from './pages/Catagories.jsx';
import Area from './pages/Area.jsx';
import MealInfo from './components/Mealinfo.jsx';
import Favourite from './pages/Favourite.jsx';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { 
                path: '/', 
                element: <HomePage /> 
            },
            { 
                path: '/:mealName', 
                element: <MealInfo/>
            },
            { 
                path: '/catagory', 
                element: <Catagories /> 
            },
            { 
                path: '/Area', 
                element: <Area /> 
            },
            { 
                path: '/favourite', 
                element: <Favourite /> 
            },
        ]
    }
])

createRoot(document.getElementById('root')).render(<RouterProvider router ={routes} />);
