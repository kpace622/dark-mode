import { useEffect } from 'react';

import { useLocalStorage } from './useLocalStorage';



export const useDarkMode = () => {
    const [value, setValue] = useLocalStorage("dark");

    

    useEffect(() => {
        function addClass() {
        const dark = document.getElementByTagName('body')
        dark.classList.add('dark-mode')  
        }
        
        if (useLocalStorage === true) {
            return addClass()
        }
    }, []) 

    return [value, setValue]
}