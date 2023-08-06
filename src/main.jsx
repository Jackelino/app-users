import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom';
import {router} from './routes/index.jsx';

const root = document.getElementById('root');
const app = ReactDOM.createRoot(root);
app.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
);
