import { useState } from 'react'
import './likesButton.css'

const LikesButton = () => {

    const initialState = {
        title: 'post title',
        likes: 0
    }
    const [state, setState] = useState(initialState)

    const handleAddLike = () => {

        setState(
            {
                ...state,
                likes: state.likes + 1}
        )

        // setCount(count + 1)
        // setCount((p) => p + 1)
    }

    return (
        <div className="container">
            <button 
                onClick={ handleAddLike } 
                className="bg-teal-700 rounded btn my-3"
            >
            {state.title}: { state.likes }
            </button>
        </div>
    )
}

 export { LikesButton }
