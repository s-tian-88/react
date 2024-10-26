import { useState } from 'react'
import { PurchaseType } from '../../types'
import { PurchaseItem } from '../PurchaseItem'


const PurchaseList = () => {

    const [items, setItems] = useState<PurchaseType[]>([
        {id: 1, name: 'Item1', done: false},
        {id: 2, name: 'Item2', done: false},
        {id: 3, name: 'Item3', done: false},
    ])

    const onItemToggle = (id: number) => {
        setItems(prev => prev.map(i => {
            if (i.id === id) {
                return {...i, done: !i.done}
            }
            return i
        }))
    }
    const onItemRemove = (id: number) => {
        setItems(prev => prev.filter(i => i.id !== id))
    }


    return (
        <>
        { items.length ?
            <ul>
                {items.map(item => <PurchaseItem 
                           key={item.id} 
                           item={item} 
                           check={onItemToggle}
                           remove={onItemRemove}
                           />)}
            </ul> :
        'No purchases'
        }
        </>
    )
}

export { PurchaseList }
