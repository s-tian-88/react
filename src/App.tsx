import './App.css'
import { Home } from './pages/Home';
import { PostsPage } from './pages/PostsPage';
import { AddPost } from './pages/AddPost';
import { Login } from './pages/Login';
import { Post } from './components/Post';
import { Layout } from './components/Layout';
import { ProtectedRoute } from './hoks/ProtectedRoute';

import { Routes, Route, Navigate } from 'react-router-dom'
import { NotFound } from './pages/NotFound';


function App() {

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

