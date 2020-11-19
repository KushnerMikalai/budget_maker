import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './Counter.module.css'
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    selectCount,
    selectCounter,
    setKilunchickAction,
} from './counterSlice'

export default function Counter() {
    const count = useSelector(selectCount)
    const counter = useSelector(selectCounter)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState('2')

    return (
        <div>
            {counter}
            <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
                <span className={styles.value}>{count}</span>
                <button
                    className={styles.button}
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
            </div>
            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={e => setIncrementAmount(e.target.value)}
                />
                <button
                    className={styles.button}
                    onClick={() =>
                        dispatch(incrementByAmount(Number(incrementAmount) || 0))
                    }
                >
                    Add Amount
                </button>
                <button
                    className={styles.asyncButton}
                    onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
                >
                    Add Async
                </button>
                <button
                    className={styles.button}
                    onClick={() => dispatch(setKilunchickAction('uasia'))}
                >
                    Set kilunchick
                </button>
            </div>
        </div>
    )
}
