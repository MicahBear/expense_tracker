import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './transaction'


export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext)
    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {/* later on the li will be replaced with transaction component */}
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}

            </ul>
        </div>
    )
}