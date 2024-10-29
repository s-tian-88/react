import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


const Post = () => {
    const [post, setPost] = useState<{title: string, body: string} | null>(null);
    const { id } = useParams(); // url get params
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(post => setPost(post))
    }, [id])

    const handleGoBack= () => {
        // navigate('/')
        // navigate('/posts', {
        //     replace: true, // save move history
        //     state: "State value" // pass on state, see useLocation hook
        // })
        navigate(-1)
    }
    
    return (
        <div className="post">
            <button className="btn" onClick={handleGoBack}>go back</button>
        {post && (
            <>
                <h1>{ post?.title }</h1>
                <p>{ post?.body }</p>
            </>
        )}
        </div>
    )
}

export { Post };
