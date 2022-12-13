import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext)
    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {/* later on the li will be replaced with transaction component */}
                {transactions.map(transaction => (<li className="minus">
                    {transaction.text} <span>-$400</span><button className="delete-btn">x</button>
                </li>))}

            </ul>
        </div>
    )
}