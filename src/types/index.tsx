interface UserInfoInterface {
    id?: number,
    name: string,
    status: string,
    avatar?: string,
}

interface UserProfileProps {
    userinfo: UserInfoInterface
}

interface AccountInterface {
    id: number,
    name: string,
    balance: number
}

type PurchaseType = {
    id: number,
    name: string,
    done?: boolean
}

export type {
    UserInfoInterface,
    UserProfileProps,
    AccountInterface,
    PurchaseType,
}
