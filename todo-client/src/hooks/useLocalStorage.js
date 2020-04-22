import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {

    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        
        // * parse and return the stored JSON, or if undefined, return the intial value
        return item ? JSON.parse(item) : initialValue
    })

    const setValue = (value) => {
        
        setStoredValue(value)

        // * saves the passed value to local storage by turning it into a JSON string
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    return [ storedValue, setValue];

};
