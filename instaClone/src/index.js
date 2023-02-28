import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FormUpdate from './component/FormUpdate';
import LandPage from './component/Landing_page';
import PostView from './component/Post_view';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandPage/>,
  },
  {
    path: "/posts",
    element: <PostView/>
  },
  {
    path: "/create",
    element: <FormUpdate/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


