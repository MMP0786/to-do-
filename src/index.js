import React from 'react';
import ReactDOM from 'react-dom/client';
import Todo from './componet/Todo';
import counter from './componet/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
   <>
    <Todo></Todo>
    <counter></counter>
    </>
    
  // </React.StrictMode>
);

