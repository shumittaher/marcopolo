import React, { createContext } from 'react'
import useTours from '../hooks/useTours';

export const ToursContext = createContext()


const ToursProvider = ({ children }) => {
    return (
        <div>
            <ToursContext.Provider value={useTours()}>
                {children}
            </ToursContext.Provider>
        </div>
    )
}

export default ToursProvider
