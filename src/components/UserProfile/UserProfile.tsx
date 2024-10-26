import { UserProfileProps } from '../../types'
import { useState } from 'react'


// const UserProfile: FC<UserProfileProps> = (prop) => {}
const UserProfile = (props: UserProfileProps) => {

    const {name, status, avatar} = props.userinfo

    const [showStatus, setShowStatus] = useState<boolean>(true)

    return (
        <article>
            <h2 className="text-green-600 font-bold text-xl">{name}</h2>
            <img src={avatar} height={150} width={200} alt={`${name}\`s avatar`} />
            <div onClick={() => setShowStatus(p => !p)}>
                {showStatus ? <p>{status}</p> : 'status hidden' }
            </div>
        </article>
    )
}

export { UserProfile }
