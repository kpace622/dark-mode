import { useEffect } from 'react';

import { useLocalStorage } from './useLocalStorage';



export const useDarkMode = () => {
    const [value, setValue] = useLocalStorage("dark");

    

    useEffect(() => {
    
        if (value === true) {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    }, [value])

    const toggleDark = (e) => {
        e.preventDefault();

        return value ? setValue(false) : value(true)
    }

    return [value, setValue]
}
