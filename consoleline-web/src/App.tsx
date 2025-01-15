import { createHashRouter, RouterProvider } from "react-router-dom";
import 'moment/locale/zh-cn';
import './App.css';

import logRoutes from './router/log';

export default () => (
    <RouterProvider router={createHashRouter([...logRoutes])} />
)