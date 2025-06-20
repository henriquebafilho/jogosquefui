import { createContext, useContext } from 'react';

const TimeContext = createContext();

export const TimeProvider = ({ children }) => {
    const time = "Botafogo";

    return (
        <TimeContext.Provider value={{ time }}>
            {children}
        </TimeContext.Provider>
    );
};

export const useTime = () => {
    return useContext(TimeContext);
};