import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { PostInterface } from "../../models";
import { Link } from "react-router-dom";


const Posts = () => {
    const [posts, setPosts] = useState<PostInterface[]>([]);
    const location = useLocation()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then((response) => response.json())
            .then((posts) => setPosts(posts))
    }, []);

    return (
        <div className="posts">
            <h1>Posts page</h1>
            <ul className="posts__item">
                {posts.map((post) => (
                    <li className="posts__item" key={post.id}>
                        <Link to={`/posts/${post.id}`}>{ post.title }</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export { Posts };
