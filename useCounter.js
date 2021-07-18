import { useState } from 'react';

export const useCounter = (initialState = 1) => {
    
    const [counter, setCounter] = useState(initialState);

    const increment = () => {
        setCounter(counter + 1);
    }
    
    const decrement = () => {
        if (counter === 1) {
            return setCounter(initialState);
        }
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(initialState)
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };    

}
