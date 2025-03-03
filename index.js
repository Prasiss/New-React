import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

const app =() => {
    return <h1>This ia React Script</h1> 
}

const container=document.getElementById('root');
const root=createRoot(container);

root.render(<app />)