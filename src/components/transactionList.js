import React from 'react'


export const TransactionList = () => {
    return (
        <div>
            <h3>History</h3>
            <ul id="list" class="list">
                {/* later on the li will be replaced with transaction component */}
                <li class="minus">
                    Cash <span>-$400</span><button class="delete-btn">x</button>
                </li>
            </ul>
        </div>
    )
}