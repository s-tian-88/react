import { useState } from 'react'
import './App.css'
import { UserProfile } from '../UserProfile'
import { UserInfoInterface } from '../../types'

function App() {

    const [count, setCount] = useState(0)

    const userInfo: UserInfoInterface= {
        name: 'USER1',
        status: 'STATUS1',
        avatar: 'https://dummyimage.com/200x150'
    } 

    return (
        <>
        <UserProfile userinfo={userInfo}/>
        <h1>React</h1>
        <div className="card">
            <button className= "bg-teal-700" onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <p>
                test tesxt
            </p>
        </div>
        </>
    )
}

export { App }
