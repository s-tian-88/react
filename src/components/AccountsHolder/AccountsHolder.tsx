// Render props

import { useState } from 'react'
import { AccountInterface } from '../../types'

interface AccounsHolderProps {
    render: (accounts: AccountInterface[]) => React.ReactNode
}

const AccountsHolder = ({ render }: AccounsHolderProps) => {

    const [accounts] = useState<AccountInterface[]>([
        {id: 1, name: '-----', balance: 1000},
        {id: 2, name: '-----', balance: 10000},
        {id: 4, name: '-----', balance: 100000},
        {id: 3, name: '-----', balance: 1000000},
    ])

    return (
        <>
            { render(accounts) }
        </>
    )
}

export { AccountsHolder }
