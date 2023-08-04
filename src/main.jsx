import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {theme} from './custom/theme.js';
import {RouterProvider} from 'react-router-dom';
import {router} from './routes/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <RouterProvider router={router}>
            </RouterProvider>
        </ThemeProvider>
    </React.StrictMode>,
)
