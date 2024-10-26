import { AccountInterface } from '../../types'

interface CardProps {
    accounts: AccountInterface[];
}

const Card = ({accounts}: CardProps) => {
    return (
        <div className="card-items">
            {accounts.map((account) => (
                <p className="card-item" key={account.id}>
                    Cardholder: {account.name} Balance: {account.balance}
                </p>
            ))}
        </div>
    )
}

export { Card }
