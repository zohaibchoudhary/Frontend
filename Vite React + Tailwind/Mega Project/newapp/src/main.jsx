import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Store/store.js'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Signup from './pages/Signup.jsx'
import Post from './pages/Post.jsx'
import AllPosts from './pages/AllPosts.jsx'
import AddPost from './pages/AddPost.jsx'
import EditPost from './pages/EditPost.jsx' 
import {Login, Protection } from './Components/index.js'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <Protection authentication={false}>
                    <Login />
                </Protection>
            ),
        },
        {
            path: "/signup",
            element: (
                <Protection authentication={false}>
                    <Signup />
                </Protection>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <Protection authentication>
                    {" "}
                    <AllPosts />
                </Protection>
            ),
        },
        {
            path: "/add-post",
            element: (
                <Protection authentication>
                    {" "}
                    <AddPost />
                </Protection>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <Protection authentication>
                    {" "}
                    <EditPost />
                </Protection>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router = {router} />
    </Provider>
  </React.StrictMode>,
)

