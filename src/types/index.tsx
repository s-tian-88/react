interface UserInfoInterface {
    id?: number,
    name: string,
    status: string,
    avatar?: string,
}

interface UserProfileProps {
    userinfo: UserInfoInterface
}

export type {
    UserInfoInterface,
    UserProfileProps
}
