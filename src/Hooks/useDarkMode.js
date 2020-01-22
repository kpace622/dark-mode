import { useEffect } from 'react';

import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [value, setValue] = useLocalStorage("dark");

    useEffect(() => {
        let dark = document.getElementsByTagName('body')
        if (useLocalStorage === true) {
            dark.classList.add('dark-mode')
        }
    }, []) 

    return [value, setValue]
}