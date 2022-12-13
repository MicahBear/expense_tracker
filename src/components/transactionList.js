import React from 'react'


export const TransactionList = () => {
    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {/* later on the li will be replaced with transaction component */}
                <li className="minus">
                    Cash <span>-$400</span><button className="delete-btn">x</button>
                </li>
            </ul>
        </div>
    )
}