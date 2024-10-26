import { UserProfileProps } from '../../types'
import { useState } from 'react'


// const UserProfile: FC<UserProfileProps> = (prop) => {}
const UserProfile = (props: UserProfileProps) => {

    const {name='default name', status, avatar} = props.userinfo

    const [showStatus, setShowStatus] = useState<boolean>(true)

    return (
        <article>
            <h2 className="text-green-600 font-bold text-xl">{name}</h2>
            <img src={avatar} height={100} width={250} alt={`${name}\`s avatar`} />
            <div onClick={() => setShowStatus(p => !p)}>
                {showStatus ? <p>{status}</p> : 'status hidden' }
            </div>
        </article>
    )
}

// UserProfile.defaultProps = {
//     img: 'https://dummyimage.com/200x150'
// }

export { UserProfile }
