import './App.css'
import { Home } from './pages/Home';
import { PostsPage } from './pages/PostsPage';
import { AddPost } from './pages/AddPost';
import { Login } from './pages/Login';
import { Post } from './components/Post';
import { Layout } from './components/Layout';
import { ProtectedRoute } from './hoks/ProtectedRoute';
import { NotFound } from './pages/NotFound';

import { Routes, Route, Navigate } from 'react-router-dom'

import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

function App () {
    const routes = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/posts" element={<PostsPage />} />
                <Route path="posts/:id" element={<Post />} />
                <Route path="/oldadd" element={<Navigate to='/add' />} /> 
                <Route path="/add" element={
                    <ProtectedRoute>
                        <AddPost />
                    </ProtectedRoute>
                } />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        )
    )

    return (
        <RouterProvider router={ routes } />
    );
};

function App2() {

  return (
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="posts/:id" element={<Post />} />
            <Route path="/oldadd" element={<Navigate to='/add' />} /> 
            <Route path="/add" element={
                <ProtectedRoute>
                    <AddPost />
                </ProtectedRoute>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
  )
}

export default App
export { App2 }
